import request from '@/utils/request';
import { OrgItem } from './data.d';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params: any) {
  return request(`/${globalConfig.apiPrefix}/dimension/_query/tree`, {
    method: 'GET',
    params,
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/dimension/${id}`, {
    method: 'DELETE',
  });
}

export async function add(params: OrgItem) {
  return request(`/${globalConfig.apiPrefix}/dimension`, {
    method: 'POST',
    data: params,
  });
}
export async function saveOrUpdate(params: OrgItem) {
  return request(`/${globalConfig.apiPrefix}/dimension/${params.id}`, {
    method: 'PUT',
    data: params,
  });
}

export async function bindUser(params: any) {
  return request(`/${globalConfig.apiPrefix}/dimension-user/_query/no-paging`, {
    method: 'GET',
    params,
  });
}

export async function unBindUser(id: string) {
  return request(`/${globalConfig.apiPrefix}/dimension-user/${id}`, {
    method: 'DELETE',
  });
}

export async function bind(params: any) {
  return request(`/${globalConfig.apiPrefix}/dimension-user`, {
    method: 'POST',
    data: params,
  });
}
