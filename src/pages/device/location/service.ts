/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:27:38
 * @LastEditor: wangj
 * @LastEditTime: 2021-02-02 12:29:27
 */
import request from '@/utils/request';
import  globalConfig from '../../../../config/globalConfig';
export async function _search(data?: any) {
  return request(`/${globalConfig.apiPrefix}/geo/object/_search`, {
    method: 'POST',
    data,
  });
}

export async function _search_page(data?: any) {
  return request(`/${globalConfig.apiPrefix}/geo/object/_search/_page`, {
    method: 'POST',
    data,
  });
}

export async function _search_geo_json(data?: any) {
  // return request(`/${globalConfig.apiPrefix}/geo/object/_search/geo.json`, {
  //   method: 'POST',
  //   data,
  // });
  //以下是模拟数据需要底层提供接口返回geo地址位置信息
  return new Promise(resolve => {
    resolve({
      "type": "FeatureCollection",
  "features": [
    { "type": "Feature",
      "geometry": {"type": "Point", "coordinates": [102.0, 0.5]},
      "properties": {"prop0": "value0"}
      },
    { "type": "Feature",
      "geometry": {
        "type": "LineString",
        "coordinates": [
          [102.0, 0.0], [103.0, 1.0], [104.0, 0.0], [105.0, 1.0]
          ]
        },
      "properties": {
        "prop0": "value0",
        "prop1": 0.0
        }
      },
    { "type": "Feature",
       "geometry": {
         "type": "Polygon",
         "coordinates": [
           [ [100.0, 0.0], [101.0, 0.0], [101.0, 1.0],
             [100.0, 1.0], [100.0, 0.0] ]
           ]
       },
       "properties": {
         "prop0": "value0",
         "prop1": {"this": "that"}
         }
       }
     ]
    });
  })
}

export async function saveByGeoJson(data?: any) {
  return request(`/${globalConfig.apiPrefix}/geo/object/geo.json`, {
    method: 'POST',
    data,
  });
}

export async function _delete(id: any) {
  return request(`/${globalConfig.apiPrefix}/geo/object/${id}`, {
    method: 'DELETE',
  });
}
