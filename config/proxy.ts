/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:24:04
 * @LastEditor: wangj
 * @LastEditTime: 2021-04-28 16:57:49
 */
/**
 * 在生产环境 代理是无法生效的，所以这里没有生产环境的配置
 * The agent cannot take effect in the production environment
 * so there is no configuration of the production environment
 * For details, please see
 * https://pro.ant.design/docs/deploy
 */
import globalConfig from "../config/globalConfig"
const { MOCK } = process.env;
const apiPrefix = '/'+globalConfig.apiPrefix;
const repalcePrefix = '^/'+globalConfig.apiPrefix;
const rewrite = {
  ['^/'+globalConfig.apiPrefix]:''
}
const target = 'http://10.10.27.131:8848/'
export default {
  dev: {
    [apiPrefix]: {
      target: target,
      ws: 'ws://127.0.0.1:8848/',
      changeOrigin: true,
      pathRewrite: rewrite,
    },
  },
  pre: {
    [apiPrefix]: {
      target: target,
      ws: 'ws://127.0.0.1:8848/',
      changeOrigin: true,
      pathRewrite: rewrite,
    },
  },
};
