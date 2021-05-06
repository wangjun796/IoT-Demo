import request from '@/utils/request';
// import { MqttItem } from './data';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params?: any) {
  return request(`/${globalConfig.apiPrefix}/network/certificate/_query`, {
    method: 'GET',
    params,
  });
}

export async function listNoPaging(params?: any) {
  return request(`/${globalConfig.apiPrefix}/network/certificate/_query/no-paging`, {
    method: 'GET',
    params,
  });
}

export async function saveOrUpdate(params: any) {
  return request(`/${globalConfig.apiPrefix}/network/certificate/`, {
    method: 'PATCH',
    data: params,
  });
}

export async function info() {
  return request(`/${globalConfig.apiPrefix}/network/certificate`, {
    method: 'GET',
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/network/certificate/${id}`, {
    method: 'DELETE',
  });
}
