import request from '@/utils/request';
import { FirmwareData, UpgradeTaskData } from './data';
import  globalConfig from '../../../../config/globalConfig';
export async function list(params: any) {
  return request(`/${globalConfig.apiPrefix}/firmware/_query`, {
    method: 'GET',
    params: params,
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/${id}`, {
    method: 'DELETE',
  });
}

export async function saveOrUpdate(params: Partial<FirmwareData>) {
  return request(`/${globalConfig.apiPrefix}/firmware`, {
    method: 'PATCH',
    data: params,
  });
}

export async function info(id?: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/${id}`, {
    method: 'GET',
  });
}

export async function _deployAll(id?: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task/${id}/all/_deploy`, {
    method: 'POST',
  });
}

export async function _deploy(idList: any[], id?: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task/${id}/_deploy`, {
    method: 'POST',
    data: idList,
  });
}

export async function upgradeTask(params: any) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task/_query`, {
    method: 'GET',
    params: params,
  });
}

export async function saveUpgrade(params: Partial<UpgradeTaskData>) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task`, {
    method: 'POST',
    data: params,
  });
}

export async function updateUpgrade(params: Partial<UpgradeTaskData>) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task`, {
    method: 'PATCH',
    data: params,
  });
}

export async function removeUpgrade(id: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/task/${id}`, {
    method: 'DELETE',
  });
}

export async function upgradeHistory(params: any) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/history/_query`, {
    method: 'GET',
    params: params,
  });
}

export async function removeUpgradeHistory(id: string) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/history/${id}`, {
    method: 'DELETE',
  });
}

export async function _count(params: any) {
  return request(`/${globalConfig.apiPrefix}/firmware/upgrade/history/_count`, {
    method: 'GET',
    params: params,
  });
}
