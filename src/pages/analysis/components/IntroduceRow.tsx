import React, { useEffect, useState } from 'react';
import { Col, Icon, Row, Spin, Tooltip } from 'antd';
import { FormattedMessage } from 'umi-plugin-react/locale';
import Charts, { Gauge } from './Charts';
import numeral from 'numeral';
import { IVisitData } from '../data.d';
import GaugeColor from './Charts/GaugeColor/index';
import apis from '@/services';
import moment from 'moment';
import { getWebsocket } from '@/layouts/GlobalWebSocket';
import Trend from './Trend';


const { ChartCard, MiniArea, MiniBar, Field, WaterWave } = Charts;
// import { ChartCard, Field, MiniArea, MiniBar, MiniProgress } from 'ant-design-pro/lib/Charts';
interface State {
  cpu: number;
  memoryMax: number;
  memoryUsed: number;
  messageData: any[];
  sameDay: number;
  month: number;
  metadata: any;
  eventData: any[];
}

const topColResponsiveProps = {
  xs: 24,
  sm: 12,
  md: 12,
  lg: 12,
  xl: 6,
  style: { marginBottom: 32 },//添加margin-bottom属性，和gutter保持一致
};

const IntroduceRow = ({ loading, visitData }: { loading: boolean; visitData: IVisitData[] }) => {
  const initState: State = {
    cpu: 60,
    memoryMax: 32*1024,
    memoryUsed: 8*1024,
    messageData: [],
    sameDay: 0,
    month: 0,
    metadata: {},
    eventData: [],
  };

  const [cpu, setCpu] = useState(initState.cpu);
  const [memoryMax, setMemoryMax] = useState(initState.memoryMax);
  const [memoryUsed, setMemoryUsed] = useState(initState.memoryUsed);
  const [sameDay, setSameDay] = useState(initState.sameDay);
  const [month, setMonth] = useState(initState.month);
  const [deviceOnline, setDeviceOnline] = useState(initState.month);
  const [deviceCount, setDeviceCount] = useState(initState.month);
  const [deviceNotActive, setDeviceNotActive] = useState(initState.month);
  const [messageData] = useState(initState.messageData);
  const [deviceCountSpinning, setDeviceCountSpinning] = useState(true);
  const [deviceMessageSpinning, setDeviceMessageSpinning] = useState(true);

  const calculationDate = () => {
    const dd = new Date();
    dd.setDate(dd.getDate() - 30);
    const y = dd.getFullYear();
    const m = (dd.getMonth() + 1) < 10 ? `0${dd.getMonth() + 1}` : (dd.getMonth() + 1);
    const d = dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate();
    return `${y}-${m}-${d} 00:00:00`;
  };

  const deviceMessage = () => {
    const list = [
      {
        'dashboard': 'device',
        'object': 'message',
        'measurement': 'quantity',
        'dimension': 'agg',
        'group': 'sameDay',
        'params': {
          'time': '1d',
          'format': 'yyyy-MM-dd',
        },
      },
      {
        'dashboard': 'device',
        'object': 'message',
        'measurement': 'quantity',
        'dimension': 'agg',
        'group': 'sameMonth',
        'params': {
          'limit': 30,
          'time': '1d',
          'format': 'yyyy-MM-dd',
          'from': calculationDate(),
          'to': moment(new Date()).add(1, 'days').format('YYYY-MM-DD') + ' 00:00:00'
        },
      },
      {
        'dashboard': 'device',
        'object': 'message',
        'measurement': 'quantity',
        'dimension': 'agg',
        'group': 'month',
        'params': {
          'time': '1M',
          'format': 'yyyy-MM-dd',
          'from': calculationDate(),
          'to': moment(new Date()).add(1, 'days').format('YYYY-MM-DD') + ' 00:00:00'
        },
      },
    ];
    apis.analysis.getMulti(list)
      .then((response: any) => {
        const tempResult = response?.result;
        mydebug(JSON.stringify(response));
        if (response.status === 200) {
          tempResult.forEach((item: any) => {
            switch (item.group) {
              case 'sameDay':
                setSameDay(item.data.value);
                break;
              case 'month':
                setMonth(item.data.value);
                break;
              case 'sameMonth':
                messageData.push(
                  {
                    'x': moment(new Date(item.data.timeString)).format('YYYY-MM-DD'),
                    'y': Number(item.data.value),
                  });
                break;
              default:
                break;
            }
          });
        }
        setDeviceMessageSpinning(false);
      });
  };

  const deviceStatus = () => {
    const list = [
      // 设备状态信息-在线
      {
        'dashboard': 'device',
        'object': 'status',
        'measurement': 'record',
        'dimension': 'current',
        'group': 'deviceOnline',
        'params': {
          'state': 'online',
        },
      },// 设备状态信息-总数
      {
        'dashboard': 'device',
        'object': 'status',
        'measurement': 'record',
        'dimension': 'current',
        'group': 'deviceCount',
      },// 设备状态信息-未激活
      {
        'dashboard': 'device',
        'object': 'status',
        'measurement': 'record',
        'dimension': 'current',
        'group': 'deviceNotActive',
        'params': {
          'state': 'notActive',
        },
      },// 设备状态信息-历史在线
      {
        'dashboard': 'device',
        'object': 'status',
        'measurement': 'record',
        'dimension': 'aggOnline',
        'group': 'aggOnline',
        'params': {
          'limit': 20,
          'time': '1d',
          'format': 'yyyy-MM-dd',
        },
      },
    ];
    apis.analysis.getMulti(list)
      .then((response: any) => {
        const tempResult = response?.result;
        mydebug(JSON.stringify(response));
        if (response.status === 200) {
          tempResult.forEach((item: any) => {
            switch (item.group) {
              case 'aggOnline':
                visitData.push(
                  {
                    'x': moment(new Date(item.data.timeString)).format('YYYY-MM-DD'),
                    'y': Number(item.data.value),
                  });
                break;
              case 'deviceOnline':
                setDeviceOnline(item.data.value);
                break;
              case 'deviceCount':
                setDeviceCount(item.data.value);
                break;
              case 'deviceNotActive':
                setDeviceNotActive(item.data.value);
                break;
              default:
                break;
            }
          });
        }
        setDeviceCountSpinning(false);
      });
  };

  useEffect(() => {
    deviceStatus();
    deviceMessage();

    let tempCup = getWebsocket(
      `home-page-statistics-cpu-realTime`,
      `/dashboard/systemMonitor/cpu/usage/realTime`,
      {
        params: {
          'history': 1,
        },
      },
    ).subscribe(
      (resp: any) => {
        const { payload } = resp;
        setCpu(payload.value);
      },
    );

    let tempJvm = getWebsocket(
      `home-page-statistics-jvm-realTime`,
      `/dashboard/jvmMonitor/memory/info/realTime`,
      {
        params: {
          'history': 1,
        },
      },
    ).subscribe(
      (resp: any) => {
        const { payload } = resp;
        setMemoryMax(payload.value.max);
        setMemoryUsed(payload.value.used);
      },
    );

    return () => {
      tempCup && tempCup.unsubscribe();
      tempJvm && tempJvm.unsubscribe();
    };
  }, []);

  return (
    <Row gutter={ {xs: 8, sm: 16, md: 24, lg: 32} }>

      <Col {...topColResponsiveProps} order={3}>
        <Spin spinning={deviceMessageSpinning}>
          <ChartCard
            // actions={[<a>操作一</a>,<a>操作二</a>] }
            bordered={true}
            loading={loading}
            title="今日设备消息量"
            action={
              <Tooltip
                title='刷新'
              >
                <Icon type="sync" onClick={() => {
                  setDeviceMessageSpinning(true);
                  deviceMessage();
                }} />
              </Tooltip>
            }

            total={numeral(sameDay).format('0,0')}
            footer={
              <Field
                label="当月设备消息量"
                value={numeral(month).format('0,0')}
              />
            }
            contentHeight={46}
          >
            {/* <span>
              周同比
              <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>
                12%
              </Trend>
            </span>
            <span style={{ marginLeft: 16 }}>
              日环比
              <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>
                11%
              </Trend>
            </span> */}
            <MiniArea color="#975FE4" data={messageData} />
            {/* <span>"testChildren"</span> */}
          </ChartCard>
        </Spin>
      </Col>

      <Col {...topColResponsiveProps} order={4}>
        <Spin spinning={deviceCountSpinning}>
          <ChartCard
            bordered={false}
            title='当前在线'
            action={
              <Tooltip
                title='刷新'
              >
                <Icon type="sync" onClick={() => {
                  setDeviceCountSpinning(true);
                  deviceStatus();
                }} />
              </Tooltip>
            }
            total={numeral(deviceOnline).format('0,0')}
            footer={
              <div style={{ whiteSpace: 'nowrap', overflow: 'hidden' }}>
                <Field style={{ marginRight: 40, float: 'left' }}
                  label={
                    <FormattedMessage id="analysis.analysis.device-total" defaultMessage="设备总量" />
                  }
                  value={numeral(deviceCount).format('0,0')}
                />
                <Field
                  label={
                    <FormattedMessage id="analysis.analysis.device-activation" defaultMessage="未激活设备" />
                  }
                  value={numeral(deviceNotActive).format('0,0')}
                />
              </div>
            }
            contentHeight={46}
          >
            {/* <span>
              周同比
              <Trend flag="up" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>
                12%
              </Trend>
            </span>
            <span style={{ marginLeft: 16 }}>
              日环比
              <Trend flag="down" style={{ marginLeft: 8, color: 'rgba(0,0,0,.85)' }}>
                11%
              </Trend>
            </span> */}
            <MiniBar data={visitData} />
          </ChartCard>
        </Spin>
      </Col>

      <Col {...topColResponsiveProps} order={2}>
        <ChartCard
          loading={loading}
          style={{ textAlign: 'center',verticalAlign:'middle',overflow:'visible' }}
          bordered={false}
          title=''
          contentHeight={120}
        >
          {/* <GaugeColor height={169} percent={cpu} /> */}
          <WaterWave height={150} title="CPU使用率" color='DodgerBlue' percent={cpu} style={{ position: 'relative',marginTop:'10px' }} />
        </ChartCard>
      </Col>

      <Col {...topColResponsiveProps} order={1}>
        <ChartCard
          loading={loading}
          bordered={false}
          title='JVM内存'
          contentHeight={120}
        >
          {/* <GaugeColor height={169} percent={memoryUsed} /> */}
          {/* memoryUsed 使用内存，单位M */}
          <Gauge height={169} percent={memoryUsed} memoryMax={memoryMax} />
        </ChartCard>
      </Col>
    </Row>
  );
};

export default IntroduceRow;
