import request from '@/utils/request';
import { RuleModelItem } from './data';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params?: any) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/_query`, {
        method: 'GET',
        params: params,
    });
}

export async function listNoPaging(params?: any) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/_query/no-paging`, {
        method: 'GET',
        params: params,
    });
}

export async function saveOrUpdate(params: RuleModelItem) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/`, {
        method: 'PATCH',
        data: params,
    });
}

export async function add(params: RuleModelItem) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model`, {
        method: 'POST',
        data: params
    })
}

export async function info(id: string) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/${id}`, {
        method: 'GET',
    });
}


export async function remove(id: string) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/${id}`, {
        method: 'DELETE',
    });
}

export async function deploy(id: string) {
    return request(`/${globalConfig.apiPrefix}/rule-engine/model/${id}/_deploy`, {
        method: 'POST'
    })
}