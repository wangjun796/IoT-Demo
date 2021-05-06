import request from '@/utils/request';
import {DeviceInstance} from './data.d';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params: any) {
  return request(`/${globalConfig.apiPrefix}/device-instance/_query`, {
    method: 'GET',
    params,
  });
}

export async function count(params: any) {
  return request(`/${globalConfig.apiPrefix}/device-instance/_count`, {
    method: 'GET',
    params,
  });
}

export async function info(id: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${id}/detail`, {
    method: 'GET',
  });
}

export async function saveOrUpdate(params: DeviceInstance) {
  return request(`/${globalConfig.apiPrefix}/device-instance`, {
    method: 'PATCH',
    data: params,
  });
}

export async function saveDevice(params: DeviceInstance) {
  return request(`/${globalConfig.apiPrefix}/device-instance`, {
    method: 'POST',
    data: params,
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${id}`, {
    method: 'DELETE',
  });
}

export async function logs(deviceId: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${deviceId}/logs`, {
    method: 'GET',
    params,
  });
}

export async function properties(productId: string, id: string) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${id}/properties/latest`, {
    method: 'GET',
  });
}

export async function changeDeploy(deviceId: string | undefined) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${deviceId}/deploy`, {
    method: 'POST',
  });
}

export async function unDeploy(deviceId: string) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${deviceId}/undeploy`, {
    method: 'POST',
  });
}

export async function property(id: string, type: string) {
  return request(`/${globalConfig.apiPrefix}/device/standard/${id}/property/${type}`, {
    method: 'GET',
  });
}

export async function eventData(id: string, event: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${id}/event/${event}?format=true`, {
    method: 'GET',
    params,
  });
}

export async function propertieInfo(deviceId: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/device-instance/${deviceId}/properties/_query`, {
    method: 'GET',
    params,
  });
}

export async function invokedFunction(deviceId: string, functionId: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/device/invoked/${deviceId}/function/${functionId}`, {
    method: 'POST',
    data,
  });
}

export async function disconnectDevice(deviceId?: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/disconnect`, {
    method: 'POST',
  });
}

export async function update(deviceId: string | undefined, params: DeviceInstance) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}`, {
    method: 'PUT',
    data: params,
  });
}

export async function saveDeviceTags(deviceId: string | undefined, params: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/tag`, {
    method: 'PATCH',
    data: params,
  });
}

export async function removeTags(deviceId: string | undefined, tagId: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/tag/${tagId}`, {
    method: 'DELETE',
  });
}

export async function propertiesRealTime(data: any) {
  return request(`/${globalConfig.apiPrefix}/dashboard/_multi`, {
    method: 'POST',
    data,
  });
}

export async function _delete(params: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/batch/_delete`, {
    method: 'PUT',
    data: params,
  });
}

export async function _unDeploy(params: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/batch/_unDeploy`, {
    method: 'PUT',
    data: params,
  });
}

export async function _deploy(params: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/batch/_deploy`, {
    method: 'PUT',
    data: params,
  });
}

export async function configurationReset(deviceId?: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/configuration/_reset`, {
    method: 'PUT',
  });
}

export async function getDeviceShadow(deviceId: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/shadow`, {
    method: 'GET',
  });
}

export async function saveDeviceShadow(deviceId: string, data: string) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/shadow`, {
    method: 'PUT',
    data
  });
}

export async function updateProperty(deviceId: string, data: any) {
  return request(`/${globalConfig.apiPrefix}/device/instance/${deviceId}/property`, {
    method: 'PUT',
    data
  });
}
