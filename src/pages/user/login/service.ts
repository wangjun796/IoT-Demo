import request from '@/utils/request';
import  globalConfig from '../../../../config/globalConfig';
export async function login(params: any): Promise<any> {
  return request(`/${globalConfig.apiPrefix}/authorize/login`, {
    method: 'POST',
    data: params,
  });
}

export async function logout(): Promise<any> {
  return request(`/${globalConfig.apiPrefix}/user-token/reset`, {
    method: 'GET',
  });
}
