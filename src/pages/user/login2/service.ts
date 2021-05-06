import { defer, from } from "rxjs";
import request from "@/utils/request";
import { map } from "rxjs/operators";
import BaseService from "@/services/crud";
import  globalConfig from '../../../../config/globalConfig';
class Service extends BaseService<any>{
    public captchaConfig = () => defer(
        () => from(request(`/${globalConfig.apiPrefix}/authorize/captcha/config`, {
            method: 'GET',
            errorHandler: () => {
                // 未开启验证码 不显示验证码
            }
        })).pipe(
            map(resp => resp?.result),
        ));

    public getCaptcha = () => defer(
        () => from(request(`/${globalConfig.apiPrefix}/authorize/captcha/image?width=130&height=40`, {
            method: 'GET',
        })).pipe(
            map(resp => resp.result)
        ));
}

export default Service;
