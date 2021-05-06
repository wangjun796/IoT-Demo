import request from '@/utils/request';
import { SmsItem } from './data';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/sms-sender/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/sms-sender/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: SmsItem) {
    return request(`/${globalConfig.apiPrefix}/sms-sender/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/sms-sender/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/sms-sender/${id}`, {
        method: 'DELETE',
    });
}

export async function providerList() {
    return request(`/${globalConfig.apiPrefix}/sms-sender/provider/all`, {
        method: "GET",
    });
}
