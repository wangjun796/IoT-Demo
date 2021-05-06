import request from '@/utils/request';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params?: any) {
  return request(`/${globalConfig.apiPrefix}/device/gateway/_query`, {
    method: 'GET',
    params,
  });
}

export async function unBind(gatewayId: string,deviceId :string) {
  return request(`/${globalConfig.apiPrefix}/device/gateway/${gatewayId}/unbind/${deviceId}`, {
    method: 'POST',
  });
}

export async function bind(gatewayId: string,data?: any) {
  return request(`/${globalConfig.apiPrefix}/device/gateway/${gatewayId}/bind`, {
    method: 'POST',
    data,
  });
}
