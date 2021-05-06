import request from '@/utils/request';
import { EmailItem } from './data';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/email-sender/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/email-sender/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: EmailItem) {
    return request(`/${globalConfig.apiPrefix}/email-sender/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/email-sender/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/email-sender/${id}`, {
        method: 'DELETE',
    });
}
