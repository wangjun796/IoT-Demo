/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:25:25
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-17 13:40:01
 */
import { Reducer } from 'redux';
import { Effect } from 'dva';
import defaultSettings, { DefaultSettings } from '../../config/defaultSettings';
import apis from '@/services';
import logo from '@/assets/IOTX.svg';
export interface SettingModelType {
  namespace: 'settings';
  state: Partial<DefaultSettings>;
  effects: {
    settingData: Effect;
    fetchConfig: Effect;
  },
  reducers: {
    changeSetting: Reducer<DefaultSettings>;
  };
}

const updateColorWeak: (colorWeak: boolean) => void = colorWeak => {
  const root = document.getElementById('root');
  if (root) {
    root.className = colorWeak ? 'colorWeak' : '';
  }
};
const themeData = JSON.parse(localStorage.getItem('smart-theme'));
const SettingModel: SettingModelType = {
  namespace: 'settings',
  //state: {titleIcon: '/IOT.png'},
  state: {titleIcon: logo,...(themeData||defaultSettings)},
  effects: {
    *fetchConfig({ payload, callback }, { call, put }) {
      const response: any = yield call(apis.systemConfig.list);
      callback(response.result);
      if (response.status === 200) {
        const tempSetting = Object.keys(response.result).length === 0 ? defaultSettings : response.result;
        yield put({
          type: 'changeSetting',
          payload: tempSetting
        })
      }
    },
    *settingData({ payload }, { call, put }) {
      const response: any = yield call(apis.systemConfig.update, payload);
      if (response.status === 200) {
        document.getElementById('title-icon')!.href = payload.titleIcon;
        yield put({
          type: 'changeSetting',
          payload
        });
      }
    }
  },

  reducers: {
    changeSetting(state, { payload }) {
      const { colorWeak, contentWidth } = payload;
      if (state && state.contentWidth !== contentWidth && window.dispatchEvent) {
        window.dispatchEvent(new Event('resize'));
      }
      updateColorWeak(!!colorWeak);
      localStorage.setItem('smart-theme', JSON.stringify({ ...state, ...payload }));
      return {
        ...state,
        ...payload,
      };
    },
  },
};
export default SettingModel;
