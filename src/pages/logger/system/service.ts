import request from '@/utils/request';
import { SystemLoggerItem } from './data';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/logger/system/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/logger/system/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: SystemLoggerItem) {
    return request(`/${globalConfig.apiPrefix}/logger/system/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/logger/system/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/logger/system/${id}`, {
        method: 'DELETE',
    });
}
