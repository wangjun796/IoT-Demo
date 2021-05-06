import request from '@/utils/request';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params?: any) {
  return request(`/${globalConfig.apiPrefix}/network/config/_query/no-paging`, {
    method: 'GET',
    params,
  });
}

export async function config(networkType: string) {
  return request(`/${globalConfig.apiPrefix}/network/config/${networkType}/_detail`, {
    method: 'GET',
  });
}

export async function save(params?: any) {
  return request(`/${globalConfig.apiPrefix}/network/config/`, {
    method: 'PATCH',
    data: params,
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/network/config/${id}`, {
    method: 'DELETE',
  });
}

export async function support() {
  return request(`/${globalConfig.apiPrefix}/network/config/supports`, {
    method: 'GET',
  });
}

export async function changeStatus(id: string, type: string) {
  return request(`/${globalConfig.apiPrefix}/network/config/${id}/${type}`, {
    method: 'POST',
  });
}

export async function debugMqttClient(id: string, action: string, type: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/network/mqtt/client/${id}/${action}/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugTcpClient(id: string, type: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/network/tcp/client/${id}/_send/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugCoapClient(id: string, data: any) {
  // network / coap / client / 1214370069626740736 / _send
  return request(`/${globalConfig.apiPrefix}/network/coap/client/${id}/_send`, {
    method: 'POST',
    data,
  });
}

export async function debugWebSocketClient(id: string, type: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/network/websocket/client/${id}/_publish/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugUdpSupport(id: string, type: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/network/upd/${id}/_send/${type}`, {
    method: 'POST',
    data,
  });
}

export async function debugHttpClient(id: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/network/http/client/${id}/_send`, {
    method: 'POST',
    data,
  });
}
