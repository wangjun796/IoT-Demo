import { Effect } from 'dva';
import { Reducer } from 'react';
import apis from '@/services';
import { SimpleResponse } from '@/utils/common';

export interface SystemLoggerModelState {
    result: any,
}

export interface SystemLoggerModelType {
    namespace: string;
    state: SystemLoggerModelState;
    effects: {
        query: Effect;
        queryById: Effect;
        insert: Effect;
        remove: Effect;
    };
    reducers: {
        save: Reducer<any, any>;
    }
}

const SystemLoggerModel: SystemLoggerModelType = {
    namespace: 'systemLogger',
    state: {
        result: {},
    },
    effects: {
        *query({ payload, callback }, { call, put }) {
            const response: SimpleResponse = yield call(apis.systemLogger.list, payload);
            yield put({
                type: 'save',
                payload: response.result,
            });
        },
        *queryById({ payload, callback }, { call }) {
            const response: SimpleResponse = yield call(apis.systemLogger.list, payload);
            callback(response);
        },
        *insert({ payload, callback }, { call }) {
            const response: SimpleResponse = yield call(apis.systemLogger.saveOrUpdate, payload);
            callback(response);
        },
        *remove({ payload, callback }, { call, put }) {
            const response: SimpleResponse = yield call(apis.systemLogger.remove, payload);
            callback(response);
        }
    },
    reducers: {
        save(state, action) {
            return {
                ...state,
                result: { ...action.payload },
            }
        }
    }
};

export default SystemLoggerModel;
