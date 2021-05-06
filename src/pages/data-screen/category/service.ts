import request from '@/utils/request';
import  globalConfig from '../../../../config/globalConfig';

export async function query(params: any){
    return request(`/${globalConfig.apiPrefix}/visualization/catalog/_query`,{
        method: 'GET',
        params,
    })
}

export async function query_tree(params: any){
    return request(`/${globalConfig.apiPrefix}/visualization/catalog/_query/tree`,{
        method: 'GET',
        params,
    })
}

export async function update(params: any){
    return request(`/${globalConfig.apiPrefix}/visualization/catalog`,{
        method: 'PATCH',
        data: params,
    })
}

export async function save(params: any){
    return request(`/${globalConfig.apiPrefix}/visualization/catalog`,{
        method: 'POST',
        data: params,
    })
}

export async function remove(id: any){
    return request(`/${globalConfig.apiPrefix}/visualization/catalog/${id}`,{
        method: 'DELETE'
    })
}

