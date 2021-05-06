import { Reducer } from 'redux';
import { Subscription, Effect } from 'dva';

import { NoticeIconData } from '@/components/NoticeIcon';
import { queryNotices } from '@/services/user';
import { ConnectState } from './connect.d';
import { readNotice, readNotices } from '@/pages/account/notification/service';
import encodeQueryParam from '@/utils/encodeParam';
import globalConfig from '../../config/globalConfig'

export interface NoticeItem extends NoticeIconData {
  id: string;
  type: string;
  state: any;
  message: string;
  dataId: string;
  notifyTime: number | string;
  subscribeId: string;
  subscriber: string;
  subscriberType: string;
  topicName: any;
  topicProvider: string;
}

export interface GlobalModelState {
  collapsed: boolean;
  notices: NoticeItem[];
}

export interface GlobalModelType {
  namespace: 'global';
  state: GlobalModelState;
  effects: {
    fetchNotices: Effect;
    clearNotices: Effect;
    changeNoticeReadState: Effect;
  };
  reducers: {
    changeLayoutCollapsed: Reducer<GlobalModelState>;
    saveNotices: Reducer<GlobalModelState>;
    saveClearedNotices: Reducer<GlobalModelState>;
  };
  subscriptions: { setup: Subscription ,listener: Subscription};
}

const GlobalModel: GlobalModelType = {
  namespace: 'global',

  state: {
    collapsed: true,
    notices: [],
  },

  effects: {
    *fetchNotices({ payload }, { call, put, select }) {
      const resp = yield call(queryNotices, payload);
      const data = resp.result.data;
      yield put({
        type: 'saveNotices',
        payload: data,
      });
      const unreadCount: number = yield select(
        (state: ConnectState) =>
          state.global.notices.filter(item => item.state.value === 'unread').length
      );
      yield put({
        type: 'user/changeNotifyCount',
        payload: {
          totalCount: resp.result.total,
          unreadCount: resp.result.total,
          // totalCount: 44,
          // unreadCount: 88,

        },
      });
    },
    *clearNotices({ payload }, { call, put, select }) {
      const resp = yield call(readNotices, payload);
      if (resp) {
        const all = yield call(queryNotices, encodeQueryParam({
          terms: { state: 'unread' }
        }));
        yield put({
          type: 'saveClearedNotices',
          payload: {
            notices: all.result.data,
          },
        });
        const count: number = yield select((state: ConnectState) => state.global.notices.length);
        const unreadCount: number = yield select(
          (state: ConnectState) => state.global.notices.filter(item => !item.read).length,
        );

        yield put({
          type: 'user/changeNotifyCount',
          payload: {
            // totalCount: count,
            totalCount: 0 || all.result.total,
            unreadCount: 0 || all.result.total,
            // unreadCount,
          },
        });

        yield put({
          type: 'fetchNotices',
          payload: encodeQueryParam({
            terms: { state: 'unread' }
          })
        })
      }
    },
    *changeNoticeReadState({ payload }, { call, put, select }) {
      const reps = yield call(readNotice, payload);
      if (reps) {
        yield put({
          type: 'fetchNotices',
          payload: encodeQueryParam({
            terms: { state: 'unread' }
          }),
        })
      }
      // if (reps) {
      // const notices: NoticeItem[] = yield select((state: ConnectState) =>
      //   state.global.notices.map(item => {
      //     const notice = { ...item };
      //     if (notice.id === payload) {
      //       notice.read = true;
      //       notice.state = { text: '已读', value: 'read' };
      //     }
      //     return notice;
      //   }),
      // );
      // yield put({
      //   type: 'saveNotices',
      //   payload: notices,
      // });
      // yield put({
      //   type: 'user/changeNotifyCount',
      //   payload: {
      //     totalCount: notices.length,
      //     unreadCount: notices.filter(item => !item.read).length,
      //   },
      // });
      // }
    },
  },

  reducers: {
    changeLayoutCollapsed(state = { notices: [], collapsed: true }, { payload }): GlobalModelState {
      return {
        ...state,
        collapsed: payload,
      };
    },
    saveNotices(state, { payload }): GlobalModelState {
      return {
        collapsed: false,
        ...state,
        notices: payload,
      };
    },
    saveClearedNotices(state = { notices: [], collapsed: true }, { payload }): GlobalModelState {
      return {
        collapsed: false,
        ...state,
        // notices: state.notices.filter((item): boolean => item.type !== payload),
        notices: state.notices,
      };
    },
  },

  subscriptions: {
    setup({ history }): void {
      //ga enabled by plugin ??
      if (typeof window.ga === 'undefined') {
        (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
          (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
          m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
          })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

          ga('create', 'UA-190645825-1', 'auto');
          // ga('send', 'pageview');
      }

      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      history.listen(({ pathname, search }): void => {
        if (typeof window.ga !== 'undefined') {
          window.ga('send', 'pageview', pathname + search);
        }
      });
    },

    listener(){
    //   document.addEventListener('touchstart', function(event){
    //     if(event.touches.length > 1){
    //       alert("pinch "); // detected
    //       window.location.reload();// detected
    //       try {
    //         event.preventDefault(); // FAIL FAIL FAIL FAILLLLLLLL ???????????
    //         return false;
    //       }catch(eee) {
    //       }
    //     }
    //     else {
    //       alert("pinch not");//detected
    //     }
    // })

    //c1  Ctrl+鼠标滚轮缩放
    document.addEventListener('DOMMouseScroll', function (event:Event) {
      alert("DOMMouseScroll!");
      //监测滚轮事件中是否按下了Ctrl键
      if (event.ctrlKey) {
        event.preventDefault();
      }
    })

    // //c2  键盘快捷键缩放
    // document.addEventListener('keydown', function (event:Event) {
    //   alert("keydown!");
    //   //按下Ctrl 以及以下任意一键：+ - 或 0
    //   if (event.ctrlKey && (event.key === 'Equal' || event.key === 'Minus' || event.key === 'Digit0')) {
    //     event.preventDefault();
    //   }
    // })
    },
  },
};

export default GlobalModel;
