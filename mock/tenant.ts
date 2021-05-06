/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-03-09 10:00:33
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-26 11:32:55
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
//   'GET  /apis/tenant/detail/_query': {
//     "result":{"pageIndex":0,"pageSize":25,"total":20,"data":[
//  {"tenant":{"id":"e4f6a57f246c097ce895f345667fdef3","name":"123","state":{"text":"�ѽ���","value":"disabled"},"createTime":1598258293646},"members":1,children:[
//   {"tenant":{"id":"e4f6a57f246c097ce895f345667fdef3","name":"123","state":{"text":"�ѽ���","value":"disabled"},"createTime":1598258293646},"members":1},
//   {"tenant":{"id":"8a9b8d17f7ebff7f13da338ff478e7e3","name":"ttt","state":{"text":"����","value":"enabled"},"createTime":1597052679261},"members":1},
//    {"tenant":{"id":"b8a32fba6e78d0ef95ccf4dc26d8e57a","name":"?��?��?????","state":{"text":"����","value":"enabled"},"createTime":1599026985976},"members":1},
//    {"tenant":{"id":"d581291c72e00418ba222e0fa8f7f6a1","name":"iottest","state":{"text":"����","value":"disabled"},"createTime":1595999729613},"members":1},
//    {"tenant":{"id":"aa9487cd67e75cab445733f8d5179dc9","name":"?�̨���?��??","description":"ddd","state":{"text":"����","value":"enabled"},"createTime":1592794290972},"members":0},
//  ]},
// {"tenant":{"id":"8a9b8d17f7ebff7f13da338ff478e7e3","name":"ttt","state":{"text":"����","value":"enabled"},"createTime":1597052679261},"members":1},
//  {"tenant":{"id":"b8a32fba6e78d0ef95ccf4dc26d8e57a","name":"?��?��?????","state":{"text":"����","value":"enabled"},"createTime":1599026985976},"members":1},
//  {"tenant":{"id":"d581291c72e00418ba222e0fa8f7f6a1","name":"iottest","state":{"text":"����","value":"disabled"},"createTime":1595999729613},"members":1},
//  {"tenant":{"id":"aa9487cd67e75cab445733f8d5179dc9","name":"?�̨���?��??","description":"ddd","state":{"text":"����","value":"enabled"},"createTime":1592794290972},"members":0},
//  {"tenant":{"id":"978e99f08c4d7ca2ad6f8706a5264f7f","name":"kkkk","state":{"text":"����","value":"disabled"},"createTime":1592909278357},"members":1},{"tenant":{"id":"a2194e109faafa38a2996d7edbea2d9f","name":"?�̨���33","photo":"http://demo.jetlinks.cn/jetlinks/upload/20200717/1284007989898125312.jpg","description":"?�̨���?��?��5","state":{"text":"����","value":"enabled"},"createTime":1594966342002},"members":1},{"tenant":{"id":"57bb3f2b2c35948159dee129e918323e","name":"aaa","description":"aaaaaaa","state":{"text":"����","value":"enabled"},"createTime":1593588046152},"members":1},{"tenant":{"id":"389290ed136cca6237d31507f13fd5b8","name":"?�̨���?��?��1","photo":"http://demo.jetlinks.cn/jetlinks/upload/20200611/1271030898859454464.png","description":"?�̨���1","state":{"text":"����","value":"enabled"},"createTime":1591687550532},"members":1},{"tenant":{"id":"a2092f4731c6b5c9a01911133cb1e2c6","name":"1","state":{"text":"����","value":"enabled"},"createTime":1600668891355},"members":0},{"tenant":{"id":"9a9dd68f01900d43907fa92fef875175","name":"????1","state":{"text":"����","value":"enabled"},"createTime":1598254041234},"members":1},{"tenant":{"id":"9d2fa907a880dbc2dc2f0971c013a214","name":"?��?��3","state":{"text":"����","value":"enabled"},"createTime":1594344718108},"members":0},{"tenant":{"id":"2aff1665c37dda1dbb3f808efef3e1d1","name":"?��?��2","photo":"http://demo.jetlinks.cn/jetlinks/upload/20200616/1272814157498953728.png","description":"?��?��21","state":{"text":"����","value":"enabled"},"createTime":1591688022520},"members":8},{"tenant":{"id":"86796aade1260eb13043014303b8dab1","name":"xili-yu","state":{"text":"����","value":"disabled"},"createTime":1598273452306},"members":1},{"tenant":{"id":"b7db89abfbdd055c1744ed929ba406fd","name":"5?????��","state":{"text":"����","value":"enabled"},"createTime":1595215841331},"members":1},{"tenant":{"id":"43450f93b9fcd70fbd72a1c23d56c1e1","name":"dev1","state":{"text":"����","value":"disabled"},"createTime":1595147771341},"members":1},{"tenant":{"id":"79b0eeadd40fabfa7deb28187a8f1f3d","name":"pro","description":"eee","state":{"text":"����","value":"enabled"},"createTime":1596007134940},"members":5},{"tenant":{"id":"fbf37c47b28f770b08180ba041927c05","name":"xxxx","state":{"text":"����","value":"enabled"},"createTime":1598260802640},"members":1},{"tenant":{"id":"487fd4c6a5fa2fbf268053991b40946d","name":"test","state":{"text":"����","value":"enabled"},"createTime":1592793729963},"members":1},{"tenant":{"id":"e86cea037cfc50dc86a8056da89a1774","name":"��??��????a?�̨���","state":{"text":"����","value":"enabled"},"createTime":1611713164058},"members":1}]},"status":200,"code":"success"
//   },

 // 'GET  /apis/dimension/_query/tree':[{"id":"a","path":"5NKV","sortIndex":1,"level":1,"typeId":"org","name":"b","describe":"c","children":[{"id":"aaaa","parentId":"a","path":"5NKV-msSp","sortIndex":1,"level":2,"typeId":"org","name":"aaaaa","children":[{"id":"bbbb","parentId":"aaaa","path":"5NKV-msSp-W0xv","sortIndex":1,"level":3,"typeId":"org","name":"bbbb","describe":"bbbbb","children":[{"id":"cccc","parentId":"bbbb","path":"5NKV-msSp-W0xv-sjcd","sortIndex":1,"level":4,"typeId":"org","name":"cccc","describe":"cccc","children":[{"id":"dddd","parentId":"cccc","path":"5NKV-msSp-W0xv-sjcd-jAlY","sortIndex":1,"level":5,"typeId":"org","name":"dddd","describe":"dddd","children":[{"id":"eeee","parentId":"dddd","path":"5NKV-msSp-W0xv-sjcd-jAlY-Q8da","sortIndex":1,"level":6,"typeId":"org","name":"eeee","describe":"eeeee","children":[{"id":"ffff","parentId":"eeee","path":"5NKV-msSp-W0xv-sjcd-jAlY-Q8da-3LKz","sortIndex":1,"level":7,"typeId":"org","name":"ffff","describe":"fffff"}]}]}]},{"id":"1","parentId":"bbbb","path":"5NKV-msSp-W0xv-Vp7i","sortIndex":1,"level":4,"typeId":"org","name":"a","describe":"c"}]}]}]},{"id":"b","path":"b3mf","sortIndex":1,"level":1,"typeId":"org","name":"2","describe":"3","children":[{"id":"aaaa","parentId":"b","path":"5NKV-msSp","sortIndex":1,"level":2,"typeId":"org","name":"aaaaa","children":[{"id":"bbbb","parentId":"aaaa","path":"5NKV-msSp-W0xv","sortIndex":1,"level":3,"typeId":"org","name":"bbbb","describe":"bbbbb","children":[{"id":"cccc","parentId":"bbbb","path":"5NKV-msSp-W0xv-sjcd","sortIndex":1,"level":4,"typeId":"org","name":"cccc","describe":"cccc","children":[{"id":"dddd","parentId":"cccc","path":"5NKV-msSp-W0xv-sjcd-jAlY","sortIndex":1,"level":5,"typeId":"org","name":"dddd","describe":"dddd","children":[{"id":"eeee","parentId":"dddd","path":"5NKV-msSp-W0xv-sjcd-jAlY-Q8da","sortIndex":1,"level":6,"typeId":"org","name":"eeee","describe":"eeeee","children":[{"id":"ffff","parentId":"eeee","path":"5NKV-msSp-W0xv-sjcd-jAlY-Q8da-3LKz","sortIndex":1,"level":7,"typeId":"org","name":"ffff","describe":"fffff"}]}]}]},{"id":"1","parentId":"bbbb","path":"5NKV-msSp-W0xv-Vp7i","sortIndex":1,"level":4,"typeId":"org","name":"a","describe":"c"}]}]}]}]

 //  'POST  /apis/tenant/_create': {
  //   "result":true,"status":200,"code":"success"
  // },
   //'PUT /apis/tenant/{tenantId:.+}/
    //'PUT /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3':{
   //  "result":true,"status":200,"code":"success"
    // },
     //'GET /apis/tenant/{tenantId:.+}':{
  // 'GET /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3':{
    // "result":{"id":"8a9b8d17f7ebff7f13da338ff478e7e3","name":"ttt","description":"ttt","state":{"text":"����","value":"enabled"},"createTime":1593588046152},"status":200,"code":"success"
   //  },
  // 'GET /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3/members/_query':{
   //  "result":{"pageIndex":0,"pageSize":25,"total":1,"data":[{"id":"c93bb6edb41284a3dc01527c4e92a3a1","tenantId":"8a9b8d17f7ebff7f13da338ff478e7e3","userId":"1292758752623964160","name":"ttt","type":"tenantMember","adminMember":true,"mainTenant":true,"createTime":1597052679667,"state":{"text":"?��???","value":"enabled"}}]},"status":200,"code":"success"
   //  },
   // 'POST /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3/members/_unbind':{
   //  "result":true,"status":200,"code":"success"
    // },
  //   'POST /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3/members/_bind':{
  //   "result":true,"status":200,"code":"success"
   //  },
  //   'GET /apis/tenant/{tenantId:.+}/asset/${assetType}/${assetId}/members':{  ???
   //   'GET /apis/tenant/{tenantId:.+}/asset/{assetType:.+}/{assetId:.+}/members':{
  //    //"result":[{"bindId":"391dacff1e0c387066456d8f8a35870c","binding":true,"assetId":"TSM-01L","userId":"1270257750080126976","userName":"?��?��2","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":true},{"id":"save","name":"???","allowed":true},{"id":"delete","name":"??����","allowed":true}]},{"binding":false,"assetId":"TSM-01L","userId":"1288373421479489536","userName":"pro","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1209313220616859648","userName":"lind","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1270664335522279424","userName":"test3","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1270664395530186752","userName":"test4","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1239475775472209920","userName":"7gtest","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1270665478554005504","userName":"test6","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]},{"binding":false,"assetId":"TSM-01L","userId":"1270665533247729664","userName":"test7","assetType":{"text":"?o��?","value":"product"},"permissions":[{"id":"read","name":"?��������","allowed":false},{"id":"save","name":"???","allowed":false},{"id":"delete","name":"??����","allowed":false}]}],"status":200,"code":"success"
   //   "result":0,"status":200,"code":"success"
    //  },
    //   'POST /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3/assets/_unbind':{
    // "result":true,"status":200,"code":"success"
    // },
    // 'POST /apis/tenant/8a9b8d17f7ebff7f13da338ff478e7e3/assets/_bind':{
    // "result":true,"status":200,"code":"success"
    // },
     //'GET /apis/device/instance/_query':{
    // "result":{"pageIndex":0,"pageSize":10,"total":0,"data":[]},"status":200,"code":"success"
    // },
    // 'DELETE /apis/tenant/1372386917729923072': {
 //    "result":true,"status":200,"code":"success"
 //  },

}


