import { Button, Checkbox, Drawer, Form, Input, Select, Table, message, Divider } from 'antd';
import React, { Fragment, useState, useEffect } from 'react';
import apis from '@/services';
import { DimensionsItem, DimensionType } from '@/pages/system/dimensions/data';
import { groupBy, cloneDeep } from 'lodash';
import { FormComponentProps } from 'antd/es/form';
import styles from './index.less';
import DataAccess from './DataAccess';
import encodeQueryParam from '@/utils/encodeParam';
import { SearchOutlined } from '@ant-design/icons';

interface Props extends FormComponentProps {
  close: Function;
  target?: any;
  targetType?: string;
  type?: string;
  height?: string;
  showTarget?: boolean
}

interface State {
  dataAccessVisible: boolean;
  permissionList: any[];
  checkPermission: any;
  permissionType: string;
  searchText: string;
  dimensionList: any[];
  targetAutz: any[];
  tempAccess: any[];
}
const Authorization: React.FC<Props> = props => {
  const initState: State = {
    dataAccessVisible: false,
    permissionList: [],
    checkPermission: {},
    permissionType: props.targetType === 'tenant' ? 'tenant' : 'all',
    searchText: '',
    dimensionList: [],
    targetAutz: [],
    tempAccess: [],
  };
  const [permissionList, setPermissionList] = useState(initState.permissionList);
  const [dataAccessVisible, setDataAccessVisible] = useState(initState.dataAccessVisible);
  const [checkPermission, setCheckPermission] = useState(initState.checkPermission);
  const [permissionType, setPermissionType] = useState(initState.permissionType);
  const [searchText, setSearchText] = useState(initState.searchText);
  const [dimensionList, setDimensionList] = useState(initState.dimensionList);
  const [targetAutz, setTargetAutz] = useState(initState.targetAutz);
  const [tempAccess, setTempAccess] = useState(initState.tempAccess);

  const {
    form: { getFieldDecorator, setFieldsValue, getFieldValue },
    // form,
  } = props;

  const getDimensions = () => {
    apis.dimensions.typeList().then(e => {
      if (e && e.status === 200) {
        apis.dimensions.treeList().then(d => {
          if (d.status === 200) {
            const tempList = d.result.map((dr: DimensionsItem) => {
              const type = e.result.find((t: DimensionType) => t.id === dr.typeId);
              if (type) {
                const typeName = type.name;
                return { typeName, ...dr };
              }
              return dr;
            });
            setDimensionList(tempList);
          }
        });
      }
    });
  };

  useEffect(() => {
    apis.permission
      .listNoPaging()
      .then(response => {
        if (response.status === 200) {
          const temp: any[] = response.result;
          const list = temp.filter(item => (item.actions || []).length > 0);
          setPermissionList(list);
        }
      })
      .catch(() => { });
    if (props.target.id) {
      apis.authorization
        .list(
          encodeQueryParam({
            paging: false,
            terms: {
              dimensionTarget: props.target.id,
            },
          }),
        )
        .then(response => {
          if (response.status === 200) {
            // const { result } = response;
            // const resultTemp = result.map((item: any) => ({ id: item.permisseion, ...item }))
            setTargetAutz(response.result);
          }
        })
        .catch(() => { });
    }

    // apis.authorization.autzDetail({ type: props.targetType, id: props.targetId }).then(response => {
    //   console.log(response, 'response');
    // })
    getDimensions();
  }, []);

  const saveDataAccess = (data: any) => {
    // ???????????????????????????
    const temp = tempAccess.filter(i => i.permissionId !== data.permissionId);
    // ????????????
    setTempAccess([...temp, data]);
    // ????????????
    // ?????????Map
    const tempMap = new Map();
    const key = new Set();
    // ?????????????????????
    const { fieldAccess } = data;

    // eslint-disable-next-line no-restricted-syntax
    for (const item of fieldAccess) {
      // eslint-disable-next-line no-restricted-syntax
      for (const action of item.action) {
        key.add(action);
      }
    }

    // ??????Map
    Array.from(key).forEach(i => tempMap.set(i, []));
    // ??????

    // eslint-disable-next-line no-restricted-syntax
    for (const item of fieldAccess) {
      // eslint-disable-next-line no-restricted-syntax
      for (const action of item.action) {
        const tem = tempMap.get(action);
        tempMap.set(action, [...tem, item.name]);
      }
    }

    // ??????????????????
    const tempFiledAccess = [...tempMap.keys()].map(action => ({
      action,
      type: 'DENY_FIELDS',
      describe: '?????????????????????',
      config: {
        fields: tempMap.get(action),
      },
    }));

    // ????????????
    const { dataAccess } = data;

    const tempDataMap = new Map();

    const dataKey = new Set();

    // eslint-disable-next-line no-restricted-syntax
    for (const item of dataAccess) {
      // eslint-disable-next-line no-restricted-syntax
      for (const type of item.action) {
        dataKey.add(type);
      }
    }
    //
    Array.from(dataKey).forEach(i => tempDataMap.set(i, []));
    // ??????
    // eslint-disable-next-line no-restricted-syntax
    for (const item of dataAccess) {
      // eslint-disable-next-line no-restricted-syntax
      for (const action of item.action) {
        const temp1 = tempDataMap.get(action);
        tempDataMap.set(action, [...temp1, item.type]);
      }
    }

    // ??????????????????
    const tempDataAccess = [...tempDataMap.keys()].map(action => ({
      action,
      type: 'DIMENSION_SCOPE',
      config: {
        scopeType: tempDataMap.get(action).join(','),
        children: true,
      },
    }));

    // ????????????

    let item: any = {};
    const update = targetAutz.find(i => i.permission === data.permissionId);
    if (update) {
      item = update;
      item.dataAccesses = [...tempFiledAccess, ...tempDataAccess];
    } else {
      item = {
        permission: data.permissionId,
        dimensionType: props.targetType,
        dimensionTypeName: '??????',
        dimensionTarget: props.target.id,
        dimensionTargetName: props.target.name,
        state: 1,
        dataAccesses: [...tempFiledAccess, ...tempDataAccess],
        merge: 10,
      };
    }

    // ????????????????????????????????????????????????

    // ????????????????????????
    const tempAutz = targetAutz.filter(i => i.permission !== data.permissionId);
    // console.log(tempAutz, item, data, '???????????????');
    setTargetAutz([...tempAutz, item]);
    message.success('????????????');
    // autzSetting(data)
    // TODO ??????????????????????????????
  };

  const autzSetting = () => {
    // ???????????????????????????????????????????????????????????????????????????????????????2324892??????
    // const { permissions } = form.getFieldsValue();
    // const tempAutz: any[] = [];
    // for (const key in permissions) {
    //   if (permissions.hasOwnProperty(key)) {
    //     const element = permissions[key];
    //     if (element) {
    //       const access = tempAccess.find(i => i.permissionId === key);
    //       tempAutz.push({ id: key, actions: element, ...access });
    //     }
    //   }
    // }
    // const resultTemp = targetAutz.map((item: any) => ({ id: item.permisseion, ...item }));
    const autzData = targetAutz.map(i => ({ id: i.permission, actions: i.actions }));
    apis.authorization
      .saveAutz({
        targetId: props.target.id,
        targetType: props.targetType,
        permissionList: autzData, // ??????2324892?????? ???tempAutz?????????targetAutz
      })
      .then(response => {
        if (response.status === 200) {
          message.success('????????????');
        }
      })
      .catch(() => { });
    // console.log({
    //   targetId: props.targetId,
    //   targetType: props.targetType,
    //   permissionList: tempAutz
    // }, 'auzt');
    // console.log(authorization, 'logs');
    // let tempAutz = {
    //   targetId: authorization.autz.dimensionTarget,
    //   targetType: 'user',
    //   permisionList: [

    //   ]
    // }
    // let tempAutz = {
    //   permission: authorization.id,
    //   dimensionType: props.targetType,
    //   dimensionTypeName: '??????',
    //   dimensionTarget: props.targetId,
    //   dimensionTargetName: '?????????',
    //   state: 1,
    //   actions: (authorization.actions || []).map((i: any) => i.action),
    //   id: 'test',
    //   merge: true,
    //   dataAccesses: (authorization.fieldAccess || []).map((i: any) => {
    //     return {
    //       action: i.name,
    //       type: 'DENY_FIELDS',
    //       describe: '??????????????????',
    //       config: {

    //       }
    //     }
    //   })
    // }
  };


  const renderAccess = () => (
    <div>
      <Form style={{ paddingBottom: 20 }}>

      {!props.showTarget && <Form.Item label="???????????????"
      // style={props.showTarget ? { display: 'none' } : {}}
      >
          {getFieldDecorator('targetId', {
            rules: [{ required: true }],
            initialValue: props.target.id ? props.target.name : '',
          })(
            <Select mode="multiple" disabled={!!props.target.id}>
              {Array.from(new Set<string>(dimensionList.filter((item: any) => item.typeName).map((item: any) => item.typeName))).map(
                type => {
                  const typeData = groupBy(dimensionList, item => item.typeName)[type];
                  return (
                    <Select.OptGroup label={type} key={type}>
                      {typeData.map((e: any) => (
                        <Select.Option value={e.id} key={e.id}>
                          {e.name}
                        </Select.Option>
                      ))}
                    </Select.OptGroup>
                  );
                },
              )}
            </Select>,
          )}
        </Form.Item>}


        <Form.Item label="????????????">
          <Input.Group compact style={{ marginBottom: '10px' }}>
            <Select
              style={{ width: '15%' }}
              defaultValue={props.targetType === 'tenant' ? 'tenant' : 'all'}
              onChange={(value: string) => setPermissionType(value)}
              disabled={props.targetType === 'tenant'}
            >
              <Select.Option value="all">??????</Select.Option>
              <Select.Option value="default">??????</Select.Option>
              <Select.Option value="system">??????</Select.Option>
              <Select.Option value="business">????????????</Select.Option>
              <Select.Option value="open-api">OpenAPI</Select.Option>
              <Select.Option value="tenant">?????????</Select.Option>
            </Select>
            <Input.Search
              // addonAfter={<SearchOutlined />}
              // prefix={<SearchOutlined />}
              style={{ width: '85%' }}
              allowClear
              placeholder="?????????????????????"
              onChange={event => {
                setSearchText(event.target.value);
              }}
            />
            {/* <Button type="primary" style={{ width: '5%' }}><Icon type='search' /></Button> */}
          </Input.Group>
          <Table
            rowKey="id"
            style={{ height: props.height || '65vh', overflow: 'auto' }}
            pagination={false}
            columns={[
              {
                dataIndex: 'name',
                title: '????????????',
                width: 150,
              },
              {
                dataIndex: 'actions',
                title: '????????????',
                render: (text: { action: string; name: string }[], record: any) => {
                  const { id } = record;

                  const tempText = Object.assign([], text || []);
                  const temp = targetAutz.find(item => item.permission === id) || {};
                  return (
                    <div className={styles.permissionForm}>
                      <Form.Item>
                        {getFieldDecorator(`permissions.${id}`, {
                          initialValue: temp.actions,
                        })(
                          <Checkbox.Group
                            onChange={e => {
                              if (!temp.permission) {
                                targetAutz.push({
                                  id: record.id,
                                  permission: record.id,
                                  actions: e,
                                });
                                setTargetAutz(cloneDeep([...targetAutz]));
                              } else {
                                temp.actions = e;
                                const t = targetAutz.filter(i => i.permission !== id);
                                setTargetAutz(cloneDeep([temp, ...t]));
                              }
                            }}
                            options={tempText.map((e: { action: string; name: string }) => ({
                              label: e.name,
                              value: e.action,
                            }))}
                          />,
                        )}
                      </Form.Item>
                    </div>
                  );
                },
              },
              {
                dataIndex: 'properties',
                title: '??????',
                width: 180,
                render: (text, record: any) => {
                  const autz = targetAutz.find(item => item.permission === record.id);
                  return (
                    <Fragment>
                      {getFieldValue(`permissions.${record.id}`) &&
                        getFieldValue(`permissions.${record.id}`).length === record.actions.length ? (
                          <a
                            onClick={() => {
                              const temp = targetAutz.filter(item => item.permission !== record.id);
                              setTargetAutz(cloneDeep(temp));
                              setFieldsValue({ [`permissions.${record.id}`]: [] });
                            }}
                          >
                            ????????????
                          </a>
                        ) : (
                          <a
                            onClick={() => {
                              setFieldsValue({
                                [`permissions.${record.id}`]: record.actions.map(
                                  (i: any) => i.action,
                                ),
                              });
                              if (autz) {
                                const temp = targetAutz.filter(item => item.permission !== record.id);
                                autz.actions = record.actions.map((i: any) => i.action);
                                setTargetAutz(cloneDeep([...temp, autz]));
                              } else {
                                targetAutz.push({
                                  id: record.id,
                                  permission: record.id,
                                  actions: record.actions.map((i: any) => i.action),
                                });
                                setTargetAutz(cloneDeep(targetAutz));
                              }
                            }}
                          >
                            ??????
                          </a>
                        )}

                      {((text && text.supportDataAccessTypes) || []).some(
                        (i: string) => i === 'DENY_FIELDS',
                      ) && (
                          <>
                            {/* <Divider type="vertical" />

                            <a
                              onClick={() => {
                                setDataAccessVisible(true);
                                setCheckPermission({ ...record, autz });
                              }}
                            >
                              ????????????
                          </a> */}
                          </>
                        )}
                    </Fragment>
                  );
                },
              },
            ]}
            dataSource={
              // eslint-disable-next-line no-nested-ternary
              permissionType !== 'all'
                ? searchText.length > 0
                  ? JSON.parse(JSON.stringify(permissionList))
                    .filter((item: any) => ((item.properties || {}).type || []).includes(permissionType))
                    .filter((item: any) => item.name.indexOf(searchText) > -1)
                  : JSON.parse(JSON.stringify(permissionList)).filter(
                    (item: any) => ((item.properties || {}).type || []).includes(permissionType),
                  )
                : searchText.length > 0
                  ? JSON.parse(JSON.stringify(permissionList)).filter(
                    (item: any) => item.name.indexOf(searchText) > -1,
                  )
                  : permissionList
            }
          />
        </Form.Item>
      </Form>
      <div
        style={{
          position: 'absolute',
          right: 0,
          bottom: 0,
          width: '100%',
          borderTop: '1px solid #e9e9e9',
          padding: '10px 16px',
          background: '#fff',
          textAlign: 'right',
        }}
      >
        {
          props.type !== 'simple' ? (
            <div>
              <Button
                onClick={() => {
                  props.close();
                }}
                style={{ marginRight: 8 }}
              >
                ??????
          </Button>
              <Button
                onClick={() => {
                  autzSetting();
                }}
                type="primary"
              >
                ??????
          </Button>
            </div>
          ) : (
              <div>
                <Button
                  onClick={() => {
                    autzSetting();
                  }}
                  type="primary"
                >
                  ??????????????????
        </Button>
              </div>
            )
        }

      </div>
      {dataAccessVisible && (
        <DataAccess
          checkPermission={checkPermission}
          close={() => setDataAccessVisible(false)}
          save={(item: any) => {
            saveDataAccess(item);
          }}
        />
      )}
    </div>
  )


  const renderRoot = () =>
    props.type !== 'simple' ? (
      <Drawer title="??????" visible width="50VW" onClose={() => props.close()}>
        {renderAccess()}
      </Drawer>
    ) : renderAccess();


  return (
    renderRoot()
  );
};
export default Form.create<Props>()(Authorization);
