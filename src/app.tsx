/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:24:26
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-10 16:13:13
 */
// import { message } from 'antd';
// import { extend } from 'umi-request'
// import { Toast } from 'antd-mobile'

import { getLocale, setLocale } from 'umi-plugin-react/locale';
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
}
function errorHandler(error:any) {
  // 请求已发送但服务端返回状态码非 2xx 的响应
  let errMsg;
  if (error.response) {
    const { status, statusText } = error.response
    errMsg = codeMessage[status] || statusText
    // Toast.error(errortext, 2)
    // 请求初始化时出错或者没有响应返回的异常
  } else {
    errMsg = error.message || error.errDesc || '系统异常'
    // Toast.info(msg, 2)
  }
  // alert(JSON.stringify(error))
  alert(errMsg);

  console.error(errMsg);
  throw error
}
export const dva = {
  config: {
    onError(err: ErrorEvent) {
      err.preventDefault();
      errorHandler(err);
    },
    initialState: {
      settings: {
        //titleIcon: logo, title:"IoT", defaultCollapsed: true, iconOption: 1,layout:'topmenu'
        iconOption: 1,
        title:"IoT",
        navTheme: "dark",
        primaryColor: "#1890ff",
        layout: "sidemenu",
        contentWidth: "Fluid",
        fixedHeader: true,
        fixSiderbar: true,
        pwa: false,
        iconfontUrl: "",
        "menu": {
          "locale": true
        },
        headerHeight: 48,
        splitMenus: false
      },
    },
  },
  plugins: [
    // require('dva-logger')(),
  ],
};
// localStorage.setItem('umi_locale', 'zh-CN');
// setLocale('zh-TW');
