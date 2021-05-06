import request from '@/utils/request';
import { RuleInstanceItem } from './data.d';
import  globalConfig from '../../../../config/globalConfig';

export async function list(params?: any) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/_query`, {
    method: 'GET',
    params,
  });
}

export async function listNoPaging(params?: any) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/_query/no-paging`, {
    method: 'GET',
    params,
  });
}

export async function saveOrUpdate(params: RuleInstanceItem) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/`, {
    method: 'PATCH',
    data: params,
  });
}

export async function info(id: string) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}`, {
    method: 'GET',
  });
}

export async function remove(id: string) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}`, {
    method: 'DELETE',
  });
}

export async function start(id: string) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}/_start`, {
    method: 'POST',
  });
}

export async function stop(id: string) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}/_stop`, {
    method: 'POST',
  });
}

export async function createModel(params: RuleInstanceItem) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/model`, {
    method: 'POST',
    data: params,
  });
}

export async function log(id: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}/logs`, {
    method: 'GET',
    params,
  });
}

export async function event(id: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}/events`, {
    method: 'GET',
    params,
  });
}

export async function node(id: string, params: any) {
  return request(`/${globalConfig.apiPrefix}/rule-engine/instance/${id}/nodes`, {
    method: 'GET',
    params,
  });
}

export async function create(params: any) {
  return request(`/${globalConfig.apiPrefix}/rule-editor/flows/_create`, {
    method: 'POST',
    data: params
  });
}
