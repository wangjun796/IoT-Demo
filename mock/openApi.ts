/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-03-09 10:00:33
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-09 11:30:26
 */
import mockjs from 'mockjs';
import { Request, Response } from 'express';
function getFakeData(req: Request, res: Response) {
  alert('mock data');
  console.log('mock data');
  res.json({
    "result":false
  });
}
export default {
  // 'GET  /apis/authorize/captcha/config': getFakeData,
  // 'GET  /apis/authorize/captcha/config': {
  //   "result":false
  // },
};
