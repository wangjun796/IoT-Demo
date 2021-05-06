import request from "@/utils/request";
import  globalConfig from '../../../../config/globalConfig';
export async function list() {
    return request(`/${globalConfig.apiPrefix}/system/config/front`, {
        method: 'GET',
    });
}


export async function add(params: any) {
    return request(`/${globalConfig.apiPrefix}/system/config/front`, {
        method: 'POST',
        data: params,
    })
}
export async function update(params: any) {
    return request(`/${globalConfig.apiPrefix}/system/config/front`, {
        method: 'POST',
        data: params,
    })
}
