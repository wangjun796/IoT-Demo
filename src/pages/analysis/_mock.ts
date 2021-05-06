import moment from 'moment';
import { IVisitData, IRadarData, IAnalysisData } from './data';

// mock data
const visitData: IVisitData[] = [];
const beginDay = new Date().getTime();

const fakeY = [7, 5, 4, 2, 4, 7, 5, 6, 5, 9, 6, 3, 1, 5, 3, 6, 5];
for (let i = 0; i < fakeY.length; i += 1) {
  visitData.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY[i],
  });
}

const visitData2 = [];
const fakeY2 = [1, 6, 4, 8, 3, 7, 2];
for (let i = 0; i < fakeY2.length; i += 1) {
  visitData2.push({
    x: moment(new Date(beginDay + 1000 * 60 * 60 * 24 * i)).format('YYYY-MM-DD'),
    y: fakeY2[i],
  });
}

const salesData = [];
for (let i = 0; i < 12; i += 1) {
  salesData.push({
    x: `${i + 1}月`,
    y: Math.floor(Math.random() * 1000) + 200,
  });
}
const searchData = [];
for (let i = 0; i < 50; i += 1) {
  searchData.push({
    index: i + 1,
    keyword: `搜索关键词-${i}`,
    count: Math.floor(Math.random() * 1000),
    range: Math.floor(Math.random() * 100),
    status: Math.floor((Math.random() * 10) % 2),
  });
}
const salesTypeData = [
  {
    x: '家用电器',
    y: 4544,
  },
  {
    x: '食用酒水',
    y: 3321,
  },
  {
    x: '个护健康',
    y: 3113,
  },
  {
    x: '服饰箱包',
    y: 2341,
  },
  {
    x: '母婴产品',
    y: 1231,
  },
  {
    x: '其他',
    y: 1231,
  },
];

const salesTypeDataOnline = [
  {
    x: '家用电器',
    y: 244,
  },
  {
    x: '食用酒水',
    y: 321,
  },
  {
    x: '个护健康',
    y: 311,
  },
  {
    x: '服饰箱包',
    y: 41,
  },
  {
    x: '母婴产品',
    y: 121,
  },
  {
    x: '其他',
    y: 111,
  },
];

const salesTypeDataOffline = [
  {
    x: '家用电器',
    y: 99,
  },
  {
    x: '食用酒水',
    y: 188,
  },
  {
    x: '个护健康',
    y: 344,
  },
  {
    x: '服饰箱包',
    y: 255,
  },
  {
    x: '其他',
    y: 65,
  },
];

const offlineData = [];
for (let i = 0; i < 10; i += 1) {
  offlineData.push({
    name: `Stores ${i}`,
    cvr: Math.ceil(Math.random() * 9) / 10,
  });
}
const offlineChartData = [];
for (let i = 0; i < 20; i += 1) {
  offlineChartData.push({
    x: new Date().getTime() + 1000 * 60 * 30 * i,
    y1: Math.floor(Math.random() * 100) + 10,
    y2: Math.floor(Math.random() * 100) + 10,
  });
}

const radarOriginData = [
  {
    name: '个人',
    ref: 10,
    koubei: 8,
    output: 4,
    contribute: 5,
    hot: 7,
  },
  {
    name: '团队',
    ref: 3,
    koubei: 9,
    output: 6,
    contribute: 3,
    hot: 1,
  },
  {
    name: '部门',
    ref: 4,
    koubei: 1,
    output: 6,
    contribute: 5,
    hot: 7,
  },
];

const radarData: IRadarData[] = [];
const radarTitleMap = {
  ref: '引用',
  koubei: '口碑',
  output: '产量',
  contribute: '贡献',
  hot: '热度',
};
radarOriginData.forEach(item => {
  Object.keys(item).forEach(key => {
    if (key !== 'name') {
      radarData.push({
        name: item.name,
        label: radarTitleMap[key],
        value: item[key],
      });
    }
  });
});

const getFakeChartData: IAnalysisData = {
  visitData,
  visitData2,
  salesData,
  searchData,
  offlineData,
  offlineChartData,
  salesTypeData,
  salesTypeDataOnline,
  salesTypeDataOffline,
  radarData,
};
const getFakeAnalysisData ={"result":[{"group":"sameDay","data":{"value":783000,"timeString":"02月16日00时","timestamp":60}},{"group":"sameDay","data":{"value":4320000,"timeString":"02月16日12时","timestamp":59}},{"group":"sameDay","data":{"value":4320000,"timeString":"02月17日00时","timestamp":58}},{"group":"sameDay","data":{"value":4320002,"timeString":"02月17日12时","timestamp":57}},{"group":"sameDay","data":{"value":4300004,"timeString":"02月18日00时","timestamp":56}},{"group":"sameDay","data":{"value":4320089,"timeString":"02月18日12时","timestamp":55}},{"group":"sameDay","data":{"value":4320004,"timeString":"02月19日00时","timestamp":54}},{"group":"sameDay","data":{"value":4320139,"timeString":"02月19日12时","timestamp":53}},{"group":"sameDay","data":{"value":4320109,"timeString":"02月20日00时","timestamp":52}},{"group":"sameDay","data":{"value":4318285,"timeString":"02月20日12时","timestamp":51}},{"group":"sameDay","data":{"value":4322146,"timeString":"02月21日00时","timestamp":50}},{"group":"sameDay","data":{"value":4315552,"timeString":"02月21日12时","timestamp":49}},{"group":"sameDay","data":{"value":4322227,"timeString":"02月22日00时","timestamp":48}},{"group":"sameDay","data":{"value":1916083,"timeString":"02月22日12时","timestamp":47}},{"group":"sameDay","data":{"value":1088171,"timeString":"02月23日00时","timestamp":46}},{"group":"sameDay","data":{"value":4252125,"timeString":"02月23日12时","timestamp":45}},{"group":"sameDay","data":{"value":4158188,"timeString":"02月24日00时","timestamp":44}},{"group":"sameDay","data":{"value":4218344,"timeString":"02月24日12时","timestamp":43}},{"group":"sameDay","data":{"value":4322121,"timeString":"02月25日00时","timestamp":42}},{"group":"sameDay","data":{"value":4093683,"timeString":"02月25日12时","timestamp":41}},{"group":"sameDay","data":{"value":3861693,"timeString":"02月26日00时","timestamp":40}},{"group":"sameDay","data":{"value":3827563,"timeString":"02月26日12时","timestamp":39}},{"group":"sameDay","data":{"value":3748355,"timeString":"02月27日00时","timestamp":38}},{"group":"sameDay","data":{"value":3905297,"timeString":"02月27日12时","timestamp":37}},{"group":"sameDay","data":{"value":4320041,"timeString":"02月28日00时","timestamp":36}},{"group":"sameDay","data":{"value":4320004,"timeString":"02月28日12时","timestamp":35}},{"group":"sameDay","data":{"value":4320012,"timeString":"03月01日00时","timestamp":34}},{"group":"sameDay","data":{"value":4173000,"timeString":"03月01日12时","timestamp":33}},{"group":"sameDay","data":{"value":3961707,"timeString":"03月02日00时","timestamp":32}},{"group":"sameDay","data":{"value":3774116,"timeString":"03月02日12时","timestamp":31}},{"group":"sameDay","data":{"value":3539911,"timeString":"03月03日00时","timestamp":30}},{"group":"sameDay","data":{"value":4319721,"timeString":"03月03日12时","timestamp":29}},{"group":"sameDay","data":{"value":4363203,"timeString":"03月04日00时","timestamp":28}},{"group":"sameDay","data":{"value":4404546,"timeString":"03月04日12时","timestamp":27}},{"group":"sameDay","data":{"value":4370062,"timeString":"03月05日00时","timestamp":26}},{"group":"sameDay","data":{"value":3935921,"timeString":"03月05日12时","timestamp":25}},{"group":"sameDay","data":{"value":4167577,"timeString":"03月06日00时","timestamp":24}},{"group":"sameDay","data":{"value":3628521,"timeString":"03月06日12时","timestamp":23}},{"group":"sameDay","data":{"value":3309981,"timeString":"03月07日00时","timestamp":22}},{"group":"sameDay","data":{"value":3860063,"timeString":"03月07日12时","timestamp":21}},{"group":"sameDay","data":{"value":4077514,"timeString":"03月08日00时","timestamp":20}},{"group":"sameDay","data":{"value":4449603,"timeString":"03月08日12时","timestamp":19}},{"group":"sameDay","data":{"value":4449488,"timeString":"03月09日00时","timestamp":18}},{"group":"sameDay","data":{"value":4059971,"timeString":"03月09日12时","timestamp":17}},{"group":"sameDay","data":{"value":3871872,"timeString":"03月10日00时","timestamp":16}},{"group":"sameDay","data":{"value":4240616,"timeString":"03月10日12时","timestamp":15}},{"group":"sameDay","data":{"value":4320879,"timeString":"03月11日00时","timestamp":14}},{"group":"sameDay","data":{"value":4322578,"timeString":"03月11日12时","timestamp":13}},{"group":"sameDay","data":{"value":4312146,"timeString":"03月12日00时","timestamp":12}},{"group":"sameDay","data":{"value":4320020,"timeString":"03月12日12时","timestamp":11}},{"group":"sameDay","data":{"value":4320138,"timeString":"03月13日00时","timestamp":10}},{"group":"sameDay","data":{"value":4320011,"timeString":"03月13日12时","timestamp":9}},{"group":"sameDay","data":{"value":4320124,"timeString":"03月14日00时","timestamp":8}},{"group":"sameDay","data":{"value":4320012,"timeString":"03月14日12时","timestamp":7}},{"group":"sameDay","data":{"value":4320032,"timeString":"03月15日00时","timestamp":6}},{"group":"sameDay","data":{"value":4313474,"timeString":"03月15日12时","timestamp":5}},{"group":"sameDay","data":{"value":4320018,"timeString":"03月16日00时","timestamp":4}},{"group":"sameDay","data":{"value":4320035,"timeString":"03月16日12时","timestamp":3}},{"group":"sameDay","data":{"value":4320740,"timeString":"03月17日00时","timestamp":2}},{"group":"sameDay","data":{"value":4320035,"timeString":"03月17日12时","timestamp":1}},{"group":"sameDay","data":{"value":3540002,"timeString":"03月18日00时","timestamp":0}}],"status":200,"code":"success"}

export default {
  'GET  /apis/fake_chart_data': getFakeChartData,
  // 'POST /apis/dashboard/_multi': getFakeAnalysisData,
};
