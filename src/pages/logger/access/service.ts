import request from '@/utils/request';
import { AccessLoggerItem } from './data';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/logger/access/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/logger/access/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: AccessLoggerItem) {
    return request(`/${globalConfig.apiPrefix}/logger/access/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/logger/access/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/logger/access/${id}`, {
        method: 'DELETE',
    });
}
