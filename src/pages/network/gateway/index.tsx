import { PageHeaderWrapper } from '@ant-design/pro-layout';
import React, { useState, Fragment, useEffect } from 'react';
import { Divider, Button, Card, Table, message, Popconfirm } from 'antd';
import { GatewayItem } from './data.d';
import styles from '@/utils/table.less';
// import Search from './search';

import Save from './save';
import { Dispatch, ConnectState } from '@/models/connect';
import { ColumnProps, PaginationConfig, SorterResult } from 'antd/es/table';
import encodeQueryParam from '@/utils/encodeParam';
import { connect } from 'dva';
import apis from '@/services';

interface Props {
  gateway: any;
  dispatch: Dispatch;
  loading: boolean;
}
interface State {
  data: any;
  searchParam: any;
  saveVisible: boolean;
  currentItem: Partial<GatewayItem>;
  providerList: any[];
  networkList: any;
}

const Gateway: React.FC<Props> = props => {
  const {
    dispatch,
    gateway: { result },
  } = props;
  const initState: State = {
    data: props.gateway,
    searchParam: {},
    saveVisible: false,
    currentItem: {},
    providerList: [],
    networkList: [],
  };

  const [saveVisible, setSaveVisible] = useState(initState.saveVisible);
  const [searchParam, setSearchParam] = useState(initState.searchParam);
  const [currentItem, setCurrentItem] = useState(initState.currentItem);
  const [providerList, setProviderList] = useState(initState.providerList);
  const [networkList, setNetworkList] = useState(initState.networkList);

  const handleSearch = (params?: any) => {
    dispatch({
      type: 'gateway/query',
      payload: encodeQueryParam(params),
    });
    setSearchParam(params);
  };

  useEffect(() => {
    handleSearch(searchParam);
    apis.gateway
      .providers()
      .then(response => {
        setProviderList(response.result);
      })
      .catch(() => {});

    apis.network
      .list()
      .then(response => {
        setNetworkList(response.result);
      })
      .catch(() => {});
  }, []);

  const startUp = (record: any) => {
    apis.gateway
      .startUp(record.id)
      .then(response => {
        if (response) {
          handleSearch();
          message.success('????????????');
        }
      })
      .catch(() => {});
  };

  const paused = (record: any) => {
    apis.gateway
      .pause(record.id)
      .then(response => {
        if (response) {
          handleSearch();
          message.success('????????????');
        }
      })
      .catch(() => {});
  };

  const shutdown = (record: any) => {
    apis.gateway
      .shutdown(record.id)
      .then(response => {
        if (response) {
          handleSearch();
          message.success('????????????');
        }
      })
      .catch(() => {});
  };

  const removeItem = (record: any) => {
    apis.gateway
      .remove(record.id)
      .then(response => {
        if (response) {
          handleSearch();
          message.success('????????????');
        }
      })
      .catch(() => {});
  };

  const saveItem = (data: any) => {
    dispatch({
      type: 'gateway/insert',
      payload: data,
      callback: response => {
        if (response) {
          setSaveVisible(false);
          message.success('????????????');
          handleSearch();
        }
      },
    });
  };

  const onTableChange = (
    pagination: PaginationConfig,
    filters: any,
    sorter: SorterResult<GatewayItem>,
  ) => {
    handleSearch({
      pageIndex: Number(pagination.current) - 1,
      pageSize: pagination.pageSize,
      terms: searchParam.terms,
      sorts: sorter,
    });
  };

  const columns: ColumnProps<GatewayItem>[] = [
    {
      title: '??????',
      dataIndex: 'name',
    },
    {
      title: '??????',
      dataIndex: 'provider',
      render: text => {
        const temp = providerList.find((item: any) => item.id === text);
        return temp ? temp.name : text;
      },
    },
    {
      title: '????????????',
      dataIndex: 'networkId',
      render: text => {
        const temp = networkList.find((item: any) => item.id === text);
        return temp ? temp.type?.name : text;
      },
    },
    {
      title: '??????',
      dataIndex: 'state',
      render: text => text?.text,
    },
    {
      title: '??????',
      width: '250px',
      align: 'center',
      render: (text, record) => (
        <Fragment>
          <a
            onClick={() => {
              setCurrentItem(record);
              setSaveVisible(true);
            }}
          >
            ??????
          </a>
          <Divider type="vertical" />
          {record.state && record.state.value === 'disabled' && (
            <>
              <a
                onClick={() => {
                  startUp(record);
                }}
              >
                ??????
              </a>
              <Divider type="vertical" />
              <Popconfirm title="???????????????" onConfirm={() => removeItem(record)}>
                <a>??????</a>
              </Popconfirm>
            </>
          )}
          {record.state && record.state.value === 'enabled' && (
            <>
              <a
                onClick={() => {
                  paused(record);
                }}
              >
                ??????
              </a>
              <Divider type="vertical" />
              <a
                onClick={() => {
                  shutdown(record);
                }}
              >
                ??????
              </a>
            </>
          )}
          {record.state && record.state.value === 'paused' && (
            <a
              onClick={() => {
                startUp(record);
              }}
            >
              ??????
            </a>
          )}
        </Fragment>
      ),
    },
  ];

  return (
    <PageHeaderWrapper title="????????????">
      <Card bordered={false}>
        <div className={styles.tableList}>
          <div>
            {/* <Search search={(params: any) => {
                            // setSearchParam({ pageSize: 10, terms: params });
                            // handleSearch({ terms: params, pageSize: 10 })
                        }} /> */}
          </div>
          <div className={styles.tableListOperator}>
            <Button
              icon="plus"
              type="primary"
              onClick={() => {
                setSaveVisible(true);
              }}
            >
              ??????
            </Button>
          </div>
          <div className={styles.StandardTable}>
            <Table
              loading={props.loading}
              dataSource={result.data}
              columns={columns}
              rowKey="id"
              onChange={onTableChange}
              pagination={false}
            />
          </div>
        </div>
      </Card>
      {saveVisible && (
        <Save
          save={(item: any) => {
            saveItem(item);
          }}
          close={() => {
            setCurrentItem({});
            setSaveVisible(false);
          }}
          data={currentItem}
        />
      )}
    </PageHeaderWrapper>
  );
};

export default connect(({ gateway, loading }: ConnectState) => ({
  gateway,
  loading: loading.models.gateway,
}))(Gateway);
