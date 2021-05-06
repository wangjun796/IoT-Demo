import request from '@/utils/request';
import  globalConfig from '../../../config/globalConfig';
export async function configType(params?: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/config/types`, {
    method: 'GET',
    params,
  });
}

export async function template(params?: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/template/_query`, {
    method: 'GET',
    params,
  });
}
export async function queryById(id: string) {
  return request(`/${globalConfig.apiPrefix}/notifier/template/${id}`, {
    method: 'GET',
  });
}

export async function saveOrUpdate(item: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/template`, {
    method: 'PATCH',
    data: item,
  });
}

export async function saveOrUpdateConfig(item: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/config`, {
    method: 'PATCH',
    data: item,
  });
}

export async function removeConfig(id: string) {
  return request(`/${globalConfig.apiPrefix}/notifier/config/${id}`, {
    method: 'DELETE',
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/notifier/template/${id}`, {
    method: 'DELETE',
  });
}

export async function config(params?: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/config/_query`, {
    method: 'GET',
    params,
  });
}

export async function queryConfigById(id: string) {
  return request(`/${globalConfig.apiPrefix}/notifier/config/${id}`, {
    method: 'GET',
  });
}

export async function configMetadata(type: string, id: string) {
  return request(`/${globalConfig.apiPrefix}/notifier/config/${type}/${id}/metadata`, {
    method: 'GET',
  });
}

export async function debugTemplate(id: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/notifier/${id}/_send`, {
    method: 'POST',
    data,
  });
}

async function list(params: any) {
  return request(`/${globalConfig.apiPrefix}/notify/history/_query`, {
    method: 'GET',
    params
  })
}

async function detail(id: string) {
  return request(`/${globalConfig.apiPrefix}/notify/history/${id}`, {
    method: 'GET'
  })
}

export const history = { list, detail };