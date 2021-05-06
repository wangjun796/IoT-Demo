/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:24:47
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-04 14:06:06
 */
import { Icon } from "antd";
const url = require('./menu.js');
const url2 = require('./myIconfont.js');

const MenuFont = Icon.createFromIconfontCN({
    scriptUrl: [url,url2]
})
export default MenuFont;
