import { PageHeaderWrapper } from "@ant-design/pro-layout"
import React, { useEffect, useState } from "react"
import { Avatar, Button, Card, Divider,List, message, Popconfirm, Radio, Spin, Tag } from "antd";
import { PlusOutlined } from "@ant-design/icons";
import moment from "moment";
import { ListData } from "@/services/response";
import { router } from "umi";
import defaultImg from '@/assets/default.png';
import { TenantItem } from "./data";
import styles from './index.less';
import Service from "./service";
import Save from "./save";
import { PaginationConfig } from "antd/lib/pagination";
import encodeQueryParam from "@/utils/encodeParam";

const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;


const ListContent = ({
  data: { members, state, createTime },
}: {
  data: TenantItem;
}) => (
    <div className={styles.listContent}>
      <div className={styles.listContentItem}>
        <span>状态</span>
        <p><Tag color={state.value === 'enabled' ? '#87d068' : '#F50'}>{state.text}</Tag></p>
      </div>
      <div className={styles.listContentItem}>
        <span>成员数</span>
        <p><Tag color="#87d068">{members}</Tag></p>
      </div>
      <div className={styles.listContentItem}>
        <span>创建时间</span>
        <p>{moment(createTime).format('YYYY-MM-DD HH:mm')}</p>
      </div>
    </div>
  );


const UserTenant = () => {

  const service = new Service('tenant');
  const [loading, setLoading] = useState<boolean>(false);
  const [tloading, setTloading] = useState<boolean>(false);
  const [visible, setVisible] = useState<boolean>(false);
  const [current, setCurrent] = useState<Partial<TenantItem>>({});
  const [list, setList] = useState<ListData<TenantItem>>();
  const [searchParam, setSearchParam] = useState({});


  const handleSearch = (params: any) => {
    setTloading(true);
    setSearchParam(params);
    service.list(params).subscribe(data => {
      setList(data);
      setTloading(false);
    });
  };

  useEffect(() => {
    handleSearch({})
  }, []);


  const paginationProps: PaginationConfig = {
    showQuickJumper: true,
    pageSize: 5,
    hideOnSinglePage:false,
    total: list?.total || 0,
    onChange: page => handleSearch({ pageIndex: page - 1, pageSize: 5 }),
  };

  const extraContent = (
    <div className={styles.extraContent}>
      <RadioGroup defaultValue=""  buttonStyle="solid" onChange={(e) => handleSearch(encodeQueryParam({ terms: { state: e.target.value } }))}>
        <RadioButton value="">全部</RadioButton>
        <RadioButton value="enabled">正常</RadioButton>
        <RadioButton value="disabled">禁用</RadioButton>
      </RadioGroup>
      {/* <Search className={styles.extraContentSearch} placeholder="请输入" onSearch={() => ({})} /> */}
    </div>
  );

  const saveItem = (data: any) => {
    setLoading(true);
    service.create(data).subscribe(
      (res) => {
        if (res) {
          message.success('保存成功');
          setLoading(false);
          setVisible(false);
          setCurrent({});
          handleSearch(searchParam);
        }
      }, () => {
        message.error('保存失败');
      });
  };

  const changeState = (item: any, state: string) => {
    setLoading(true);
    const data = item;
    data.state = state;
    service.update(data).subscribe(() => {
      setLoading(false);
      message.success('操作成功');
      handleSearch(searchParam);
    });
  };

const removeTenant = (id: string) => {
//setLoading(true);
  //  apis.tenant.remove(id).then(res => {
   service.remove(id).subscribe(() => {
      // setLoading(false);
      message.success('操作成功');
      handleSearch(searchParam);
    }
    )
  };

  return (
    <PageHeaderWrapper>
      <Spin spinning={tloading}>
        <div className={styles.standardList}>
          <Card
            className={styles.listCard} size='small'
            bordered={false}
            title="租户列表"
            style={{ marginTop: 24 }}
            bodyStyle={{ padding: '0 32px 40px 32px' }}
            extra={extraContent}
          >
            <Button
              type="dashed"
              style={{ width: '100%', marginBottom: 8 }}
              onClick={() => {
                setVisible(true);
                setCurrent({});
              }}
            >
              <PlusOutlined />
              添加
            </Button>

            <List
              bordered={true}
              size="large"
              rowKey="id"
              split={true}
              pagination={paginationProps}
              dataSource={list?.data}
              renderItem={(item: TenantItem) => (
                <List.Item

                  actions={[
                    <a onClick={e => {
                      e.preventDefault();
                      router.push(`/system/tenant/detail/${item.id}`)
                    }}>查看</a>,

                    <>
                      {
                        item.state.value === 'enabled' ?
                          (
                            <span>
                            <Popconfirm title="确认禁用此租户？"
                              onConfirm={() => {
                                changeState(item, 'disabled');
                              }}>
                              <a key="edit">
                                禁用
                              </a>
                            </Popconfirm>
                            <Divider type="vertical"></Divider>
                            {/* &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; */}
                            &#12288;&#12288;
                            </span>
                            ) :
                          (
                           <span>
                            <Popconfirm title="确认启用此租户？"
                              onConfirm={() => {
                                changeState(item, 'enabled');
                              }}>
                              <a key="edit">
                                启用
                              </a>
                            </Popconfirm>
                              <Divider type="vertical"></Divider>
                             <Popconfirm
							                title="确认删除？"
							                onConfirm={() => {
							                  removeTenant(item.id);
							                }}
							              >
							                <a>删除</a>
							              </Popconfirm>
							            </span>
                          )
                      }
                    </>,
                  ]}
                >

                  <List.Item.Meta
                    avatar={<Avatar src={item.photo || defaultImg} shape="circle" size="large" />}
                    title={<a>{item.name}</a>}

                  />
                  <ListContent data={item} />
                </List.Item>
              )}
            />
          </Card>
        </div>
      </Spin>

      {visible && (
        // <Spin spinning={loading}>
          <Save
            spinning={loading}
            close={() => {
              setVisible(false)
            }}
            save={(item: any) => saveItem(item)}
            data={current}
          />
        // </Spin>
      )}
    </PageHeaderWrapper>
  )
};
export default UserTenant;
