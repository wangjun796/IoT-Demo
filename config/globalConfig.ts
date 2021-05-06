/*
 * @Author: wangj
 * @Date: 2021-01-29 10:13:23
 * @LastEditTime: 2021-03-08 17:08:22
 * @LastEditors: Please set LastEditors
 * @Description: 全局常量都放在这个文件中，通过define来定义常量！
 * @FilePath: \UI\config\globalConfig.ts
 */
const globalConfig = { };
function define(name:string, value:any) {
  Object.defineProperty(globalConfig, name, {
      value:      value,
      enumerable: true,
      writable:     false,
      configurable: false
  });
}

define("apiPrefix", 'apis');
define("dftTheme",{
  'font-size-base': '14px',
  'badge-font-size': '12px',
  'btn-font-size-lg': '@font-size-base',
  'menu-dark-bg': '#00182E',
  'menu-dark-submenu-bg': '#000B14',
  'layout-sider-background': '#00182E',
  'layout-body-background': '#f0f2f5',
})
export const EMPTY = () => {};
define("empty", EMPTY);
define("keepalive", 2000);//心跳间隔
export default globalConfig;

