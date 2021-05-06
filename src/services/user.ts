/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:32:00
 * @LastEditor: wangj
 * @LastEditTime: 2021-02-01 14:41:35
 */
import request from '@/utils/request';
import  globalConfig from '../../config/globalConfig';
export async function query(): Promise<any> {
  return request('/api/users');
}

export async function queryCurrent(): Promise<any> {
  return request(`/${globalConfig.apiPrefix}/authorize/me`, {
    method: 'GET',
  });
}

export async function systemVersion(): Promise<any> {
  return request(`/${globalConfig.apiPrefix}/system/version`);
}

export async function queryNotices(params: any): Promise<any> {
  return request(`/${globalConfig.apiPrefix}/notifications/_query`, {
    method: "GET",
    params,
  });
}
