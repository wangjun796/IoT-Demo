import BaseService from "@/services/crud";
import { defer, from } from "rxjs";
import request from "@/utils/request";
import { map, filter, flatMap } from "rxjs/operators";
import encodeQueryParam from "@/utils/encodeParam";
import  globalConfig from '../../../../../config/globalConfig';

class Service extends BaseService<any>{

    public propertiesRealTime = (data: any) => defer(() => from(request(`/${globalConfig.apiPrefix}/dashboard/_multi`, {
        method: 'POST',
        data
    })).pipe(
        filter(resp => resp.status === 200),
        map(resp => resp.result),
        flatMap((data: Data[]) => from(data)),
        map((item) => ({
            timeString: item.data.timeString,
            timestamp: item.data.timestamp,
            ...item.data.value,
        }))
    ));

    public getProperty = (id: string, type: string) => defer(() => from(
        request(`/${globalConfig.apiPrefix}/device/standard/${id}/property/${type}`, {
            method: 'GET',
        })).pipe(
            filter(resp => resp.status === 200),
            map(resp => resp.result),
        ));

    public eventCount = (id: string, event: string) => defer(() => from(
        request(`/${globalConfig.apiPrefix}/device/instance/${id}/event/${event}?format=true`, {
            method: 'GET',
            params: encodeQueryParam({
                pageSize: 1
            })
        })).pipe(
            filter(resp => resp.status === 200),
            map(resp => resp.result.total)
        ));

    public updateProperty = (deviceId: string, data: any) => defer(() => from(
        request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/property`, {
            method: 'PUT',
            data,
        })).pipe(
            filter(resp => resp.status === 200)
        ));
}
export default Service;