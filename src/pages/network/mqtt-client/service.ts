import request from '@/utils/request';
import { MqttItem } from './data';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/manager/mqtt/client/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/manager/mqtt/client/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: MqttItem) {
    return request(`/${globalConfig.apiPrefix}/manager/mqtt/client/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/manager/mqtt/client/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/manager/mqtt/client/${id}`, {
        method: 'DELETE',
    });
}
