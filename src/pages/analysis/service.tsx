/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:26:20
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-18 11:06:31
 */
import request from 'umi-request';
import getFakeChartData from './mock-data';
import { getAccessToken } from '@/utils/authority';
import  globalConfig from '../../../config/globalConfig';
export async function fakeChartData() {
  alert("data is "+ JSON.stringify(getFakeChartData))
  return getFakeChartData;
  // return request('/api/fake_chart_data');
}

export async function getMulti(data: any) {
  return request(`/${globalConfig.apiPrefix}/dashboard/_multi?X_Access_Token=${getAccessToken()}`, {
    method: 'POST',//query param is complex construction ,so use POST subs GET
    data,
  });
  return Promise.resolve(getFakeChartData);
}
