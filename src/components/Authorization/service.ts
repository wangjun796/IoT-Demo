import request from '@/utils/request';
import  globalConfig from '@/../config/globalConfig';
export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/autz-setting/_query/no-paging`, {
        method: 'GET',
        params,
    });
}

export async function setAutz(params: any) {
    return request(`/${globalConfig.apiPrefix}/autz-setting`, {
        method: 'PATCH',
        data: params,
    });
}

export async function saveAutz(params: any) {
    return request(`/${globalConfig.apiPrefix}/autz-setting/detail/_save`, {
        method: 'POST',
        data: params
    })
}

export async function autzDetail(params: { type: string, id: string }) {
    return request(`/${globalConfig.apiPrefix}/autz-setting/detail/${params.type}/${params.id}`, {
        method: 'GET'
    })
}
