import request from '@/utils/request';
import { VisualizationItem } from './data';
import  globalConfig from '../../../../config/globalConfig';

export async function saveOrUpdate(params: VisualizationItem) {
    return request(`/${globalConfig.apiPrefix}/visualization`, {
        method: 'PATCH',
        data: params,
    });
}

export async function getLayout(params: any) {
    return request(`/${globalConfig.apiPrefix}/visualization/${params.type}/${params.target}`, {
        method: 'GET',
    })
}

export async function getDashboardData(params: any[]) {
    return request(`/${globalConfig.apiPrefix}/dashboard/_multi`, {
        method: 'POST',
        data: params
    })
}
import BaseService from "@/services/crud";
import { defer, from } from "rxjs";
import { map } from "rxjs/operators";

class Service extends BaseService<any>{
    public propertySource = (deviceId: string, propertyId: string) =>
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