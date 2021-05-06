import BaseService from "@/services/crud";
import { defer, from } from "rxjs";
import request from "@/utils/request";
import { map } from "rxjs/operators";
import  globalConfig from '../../../config/globalConfig';

class Service extends BaseService<any>{
    public propertyType = (deviceId: string, propertyId: string) =>
        defer(() =>
            from(request(
                `/${globalConfig.apiPrefix}/device/instance/${deviceId}/property/${propertyId}`,
                { method: 'GET' }
            )).pipe(
                map(resp => resp.result),
            ));

    public exec = (deviceId: string, functionId: string, data: any) =>
        defer(() =>
            from(request(
                `/${globalConfig.apiPrefix}/device/instance/${deviceId}/function/${functionId}`,
                { method: 'POST', data }
            )).pipe(
                map(resp => resp.result)
            ));

}
export default Service;