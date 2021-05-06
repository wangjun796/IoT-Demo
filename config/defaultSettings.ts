/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:24:03
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-17 12:27:41
 */
import { MenuTheme } from 'antd/es/menu/MenuContext';
import logo from '@/assets/IOTX.svg';

export type ContentWidth = 'Fluid' | 'Fixed';

export interface DefaultSettings {
  /**
   * theme for nav menu
   */
  navTheme: MenuTheme;
  /**
   * primary color of ant design
   */
  primaryColor: string;
  /**
   * nav menu position: `sidemenu` or `topmenu`
   */
  layout: 'sidemenu' | 'topmenu' | 'side' | 'top';
  /**
   * layout of content: `Fluid` or `Fixed`, only works when layout is topmenu
   */
  contentWidth: ContentWidth;
  /**
   * sticky header
   */
  fixedHeader: boolean;
  /**
   * auto hide header
   */
  autoHideHeader: boolean;
  /**
   * sticky siderbar
   */
  fixSiderbar: boolean;
  menu: { locale: boolean };
  title: string;
  pwa: boolean;
  iconfontUrl: string;
  colorWeak: boolean;
  //LOGO
  titleIcon: string;
  defaultCollapsed?: boolean;
  iconOption:number;//选择icon方案，使用icon iconfont1 iconfont2 。。。。
  headerHeight?:number;
  splitMenus?:boolean;
}

export default {
  iconOption: 1,
  // titleIcon: logo,
  title:"IoT",
  navTheme: 'dark',
  // 拂晓蓝
  primaryColor: '#F5222D',
  layout: "sidemenu",
  contentWidth: "Fluid",
  fixedHeader: true,
  fixSiderbar: true,
  pwa: true,
  iconfontUrl: "",
  "menu": {
    "locale": true
  },
  headerHeight: 48,
  splitMenus: false
} as DefaultSettings;
