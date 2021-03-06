import React, { useEffect, useState } from 'react';
import { Card, Col, DatePicker, Space, Radio, Row, Tabs,Slider} from 'antd';
import styles from '../style.less';
import apis from '@/services';
import moment from 'moment';
import { Axis, Chart, Geom, Legend, Tooltip } from "bizcharts";
const { RangePicker } = DatePicker;
import DataSet from '@antv/data-set';

import IconFont from '@/components/MenuFont'
import { MessageOutlined} from '@ant-design/icons';

const { TabPane } = Tabs;

export interface State {
  gatewayDataList: any[];
  ticksDataList: any[];
  currentTime: string;
  time: string;
  selectionTime: string
}

const SalesCard = ({ loading }: { loading: boolean; }) => {
  let gatewayMonitor: (from: string, to: string, time: string) => void;
  const initState: State = {
    gatewayDataList: [],
    ticksDataList: [],
    currentTime: '',
    time: '',
    selectionTime: '',
  };

  const [gatewayData, setGatewayData] = useState(initState.gatewayDataList);
  const [ticksDataList, setTicksDataList] = useState(initState.ticksDataList);
  const [time, setTime] = useState(initState.time);
  const [selectionTime, setSelectionTime] = useState(initState.selectionTime);

  const calculationDate = (val: number) => {
    const dd = new Date();
    dd.setDate(dd.getDate() - val);//getDate geturns the day of the month for the specified date according to local time.'The setDate() method sets the day of the Date object relative to the beginning of the currently set month.
    return `${dd.getFullYear()}-${(dd.getMonth() + 1) < 10 ? `0${dd.getMonth() + 1}` : (dd.getMonth() + 1)}-${dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate()} ${dd.getHours() < 10 ? `0${dd.getHours()}` : dd.getHours()}:${dd.getMinutes() < 10 ? `0${dd.getMinutes()}` : dd.getMinutes()}:${dd.getSeconds() < 10 ? `0${dd.getSeconds()}` : dd.getSeconds()}`;
  };

  const timeMap = {// time interval for display data(CollectionCapacity = 60)
    '1h': '1m',
    '1d': '24m',
    '7d': '168m',
    '30d': '12h',
  };

  useEffect(() => {
    const da = new Date();
    da.setHours(da.getHours() - 1);
    gatewayMonitor(formatData(da), calculationDate(0), '1m');
    setSelectionTime(calculationDate(0));
    setTime('1m');
  }, []);

  gatewayMonitor = (from: string, to: string, time: string) => {

    let formatData = '';

    if (time === '1m') {
      formatData = 'HH???mm???';
    } else if (time === '12h') {
      formatData = 'MM???dd???HH???';
    } else {
      formatData = 'MM???dd???HH???mm???';
    }
    const list = [
      {
        'dashboard': 'gatewayMonitor',
        'object': 'deviceGateway',
        'measurement': 'received_message',
        'dimension': 'agg',
        'group': 'sameDay',
        'params': {
          'time': time || '1m',
          'limit': 60,
          'format': formatData,
          'from': from,
          'to': to,
        },
      },
    ];

    apis.analysis.getMulti(list)
      .then((response: any) => {
        const tempResult = response?.result;
        mydebug(response);
        if (response.status === 200) {
          const dataList: any[] = [];
          const ticksList: any[] = [];
          tempResult.forEach((item: any) => {
            dataList.push({
              year: item.data.timeString,
              value: item.data.value,
              type: '?????????'
            });
            if (item.data.timestamp % 4 === 0 && item.data.timestamp !== 0) {
              ticksList.push(item.data.timeString);
            }
          });
          mydebug("ticksList:")
          mydebug(ticksList)
          mydebug("datasList:")
          mydebug(dataList)
          setTicksDataList(ticksList);
          setGatewayData(dataList);
        }
      });
  };

  function deviceTime(e: any) {
    const value = e.target.value;
    setTime(timeMap[value]);
    const dd = new Date(selectionTime);
    let to = moment(selectionTime).format('YYYY-MM-DD HH:mm:ss');
    let from = to;
    if (value === '1h') {
      dd.setHours(dd.getHours() - 1);
      from = moment(selectionTime).subtract(1, 'hours').format('YYYY-MM-DD HH:mm:ss');
    } else if (value === '1d') {
      dd.setDate(dd.getDate() - 1);
      from = moment(selectionTime).subtract(1, 'days').format('YYYY-MM-DD HH:mm:ss');
    } else if (value === '7d') {
      dd.setDate(dd.getDate() - 7);
      from = moment(selectionTime).subtract(7, 'days').format('YYYY-MM-DD HH:mm:ss');

    } else if (value === '30d') {
      dd.setDate(dd.getDate() - 30);
      from = moment(selectionTime).subtract(30, 'days').format('YYYY-MM-DD HH:mm:ss');
    }
    gatewayMonitor(from, to, timeMap[value]);
    // gatewayMonitor(formatData(dd), formatData(new Date()), timeMap[value]);
  }

  const formatData = (value: string) => {
    const dd = new Date(value);
    return `${dd.getFullYear()}-${(dd.getMonth() + 1) < 10 ? `0${dd.getMonth() + 1}` : (dd.getMonth() + 1)}-${dd.getDate() < 10 ? `0${dd.getDate()}` : dd.getDate()} ${dd.getHours() < 10 ? `0${dd.getHours()}` : dd.getHours()}:${dd.getMinutes() < 10 ? `0${dd.getMinutes()}` : dd.getMinutes()}:${dd.getSeconds() < 10 ? `0${dd.getSeconds()}` : dd.getSeconds()}`;
  };
  const ds = new DataSet({
    state: {
      start: 0,
      end: 1,
    },
  });
  const handleSliderChange = e => {
    console.log(e);
    const { startRadio, endRadio } = e;
    ds.setState('start', startRadio);
    ds.setState('end', endRadio);
  };

  function setEndTime(value: any) {
    setSelectionTime(value);
    const dd = new Date(value);
    if (time === '1m') {
      dd.setHours(dd.getHours() - 1);
    } else if (time === '24m') {
      dd.setDate(dd.getDate() - 1);
    } else if (time === '168m') {
      dd.setDate(dd.getDate() - 7);
    } else if (time === '12h') {
      dd.setDate(dd.getDate() - 30);
    }
    //dd--starting time   value--ending time time--sample interval ((ending - starting) / interval = 60)
    gatewayMonitor(formatData(dd), formatData(value), time);
  }
  const defaultLine = {
      stroke: 'dddddd',
      fill: '#ffffff',
      lineDash: [1, 2, 1],
      lineWidth: 1
  }

  return (
    <Card loading={loading} bordered={false} bodyStyle={{ padding: 0 }}>
      <div className={styles.salesCard}>
        <Tabs
          // tabBarGutter={20}
          tabBarExtraContent={
            <div className={styles.salesExtraWrap}>
              <div className={styles.salesExtra}>
                <Radio.Group defaultValue="30d" buttonStyle="solid" onChange={deviceTime}>
                  <Radio.Button value="1h">
                    1??????
                  </Radio.Button>
                  <Radio.Button value="1d">
                    1???
                  </Radio.Button>
                  <Radio.Button value="7d">
                    7???
                  </Radio.Button>
                  <Radio.Button value="30d">
                    30???
                  </Radio.Button>
                </Radio.Group>
              </div>
              <DatePicker showTime defaultValue={moment(new Date(), 'YYYY-MM-DD HH:mm:ss')}
                placeholder="????????????" onOk={setEndTime} format="YYYY-MM-DD HH:mm:ss" />
            </div>

          }
          size="large"
          // tabBarStyle={{ marginBottom: 24 }}
        >
          <TabPane
          tab={
            <span>
              {/* <IconFont type='icon-tongzhiguanli' /> */}
              <MessageOutlined style={{ fontSize: '18px', color: '#08c' }} />
              ????????????
            </span>
          }
          key="sales">
            <Row>
              <Col>
                <div className={styles.salesBar}>
                  <Chart
                    height={400}
                    data={gatewayData}
                    scale={{
                      value: { min: 0 ,nice:true, alias:'?????????'},
                      year: {
                        range: [0, 1],
                        ticks: ticksDataList,
                        alias:'??????',
                      },
                    }}
                    forceFit
                  >
                    <Axis name="year" title
                    // title={{
                    //   autoRotate: true,
                    //   offset: 20,
                    //   textStyle: {
                    //     fontSize: '12',
                    //     textAlign: 'center',
                    //     fill: '#999',
                    //     fontWeight: 'bold',
                    //     rotate: 220,
                    //   },
                    //   position: 'end',
                    // }}
                      />
                    <Axis name="value" title label={{
                      formatter: val => parseFloat(val).toLocaleString()
                    }} />
                    {/* <Legend title={true}/> */}
                    <Tooltip enterable={true} follow={true}/>
                    <Geom type="line" position="year*value*type" size={2} color={["value","#1890ff-#8890ff"]}
                      tooltip={[
                        "year*value*type",
                        (year, value, type) => ({
                          title: year,
                          name: type,
                          value: parseFloat(value).toLocaleString()
                        })
                      ]}
                    />
                    <Geom
                      type="area" color={["value","#1890ff-#8890ff"]}
                      // active={[true, {
                      //   highlight: false, // true ???????????? highlight ???????????????????????????????????????
                      //     style: {
                      //     fill: 'green'
                      //   } // ????????? shape ?????????
                      //   }]}
                      position="year*value*type"
                      shape={'circle'}
                      tooltip={[
                        "year*value*type",
                        (year, value, type) => ({
                          title: year,
                          name: type,
                          value: parseFloat(value).toLocaleString()
                        })
                      ]}
                    />
                  </Chart>
                  {/* <Slider
                    data={gatewayData}
                    padding={60}
                    xAxis="year"
                    yAxis="value"
                    onChange={handleSliderChange}
                  /> */}
                </div>
              </Col>
            </Row>
          </TabPane>

        </Tabs>
      </div>
    </Card>
  );
};

export default SalesCard;
