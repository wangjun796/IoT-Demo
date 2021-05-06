//该文件没有使用？？
// import { zip, from, defer } from "rxjs";
// import { map, shareReplay } from "rxjs/operators";
// // import { getAccessToken } from "@/utils/authority";
// // import { ajax } from "rxjs/ajax";
// import request from "umi-request";
// import  globalConfig from '../../config/globalConfig';

// // const auth$ = ajax({
// //     url: '/${globalConfig.apiPrefix}/authorize/me',
// //     method: 'GET',
// //     headers: {
// //         'X-Access-Token': getAccessToken()
// //     }
// // });
// const auth$ = defer(() => from(request(`/${globalConfig.apiPrefix}/authorize/me`, {
//     method: 'GET',
// })));

// const systemInfo$ = defer(() => from(request('/${globalConfig.apiPrefix}/system/config/front', { method: 'GET' })))
// // const systemInfo$ = ajax({
// //     url: '/${globalConfig.apiPrefix}/system/config/front',
// //     method: 'GET',
// //     headers: {
// //         'X-Access-Token': getAccessToken()
// //     }
// // });

// export const root$ = zip(auth$, systemInfo$)
//     .pipe(
//         map(([auth, systemInfo]) => ({ auth, systemInfo })),
//         shareReplay(1));
