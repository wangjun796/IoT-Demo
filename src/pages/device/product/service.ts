import request from "@/utils/request";
import {DeviceProduct} from "./data";
import {DeviceInstance} from "@/pages/device/instance/data";
import  globalConfig from '../../../../config/globalConfig';
export async function list(params: any) {
  return request(`/${globalConfig.apiPrefix}/device-product/_query`, {
    method: 'GET',
    params: params,
  });
}

export async function saveOrUpdate(params: Partial<DeviceProduct>) {
  return request(`/${globalConfig.apiPrefix}/device-product`, {
    method: 'PATCH',
    data: params,
  });
}

export async function saveDeviceProduct(params: Partial<DeviceProduct>) {
  return request(`/${globalConfig.apiPrefix}/device-product`, {
    method: 'POST',
    data: params,
  });
}

export async function update(params: DeviceProduct,productId?: string ) {
  return request(`/${globalConfig.apiPrefix}/device-product/${productId}`, {
    method: 'PUT',
    data: params,
  });
}

export async function info(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-product/${id}`, {
    method: 'GET',
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-product/${id}`, {
    method: 'DELETE',
  });
}

export async function count(params: any) {
  return request(`/${globalConfig.apiPrefix}/device-product/_count`, {
    method: 'GET',
    params: params,
  })
}

export async function query(params: any) {
  return request(`/${globalConfig.apiPrefix}/device-product/_query`, {
    method: 'GET',
    params: params,
  });
}

export async function queryNoPagin(params?: any) {
  return request(`/${globalConfig.apiPrefix}/device-product/_query/no-paging`, {
    method: 'GET',
    params: params,
  })
}

export async function deleteById(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-product/${id}`, {
    method: 'DELETE',
  });
}

//消息协议
export async function protocolSupport() {
  return request(`/${globalConfig.apiPrefix}/protocol/supports`, {
    method: 'GET',
  });
}

//链接协议
export async function protocolTransports(id: string) {
  return request(`/${globalConfig.apiPrefix}/protocol/${id}/transports`, {
    method: 'GET',
  });
}

//协议配置
export async function protocolConfiguration(support: string, transport: string) {
  return request(`/${globalConfig.apiPrefix}/protocol/${support}/${transport}/configuration`, {
    method: 'GET',
  });
}

//发布状态切换
export async function deploy(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-product/${id}/deploy`, {
    method: 'POST',
    data: {}
  });
}

//发布状态切换
export async function unDeploy(id: string) {
  return request(`/${globalConfig.apiPrefix}/device-product/${id}/undeploy`, {
    method: 'POST',
    data: {}
  });
}

//获取机构
export async function queryOrganization() {
  return request(`/${globalConfig.apiPrefix}/organization/_all`, {
    method: 'get'
  });
}

export async function units() {
  return request(`/${globalConfig.apiPrefix}/protocol/units`, {
    method: 'get'
  });
}

//获取品类分类
export async function deviceCategory() {
  return request(`/${globalConfig.apiPrefix}/device/category`, {
    method: 'get'
  });
}

export async function deviceCategoryTree() {
  return request(`/${globalConfig.apiPrefix}/device/category/_tree`, {
    method: 'get'
  });
}
