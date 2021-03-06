import {Drawer, Button, message} from "antd";
import React, {useState, useEffect, Fragment} from "react";
import Service from "@/pages/system/tenant/service";
import {ListData} from "@/services/response";
import encodeQueryParam from "@/utils/encodeParam";
import SearchForm from "@/components/SearchForm";
import ProTable from "@/pages/system/permission/component/ProTable";
import Add from "./add";
import User from "./user";

interface Props {
  close: Function;
  data: any;
  user: any
}

const Edit = (props: Props) => {
  const service = new Service('tenant');

  const [list, setList] = useState<ListData<any>>();
  const [add, setAdd] = useState<boolean>(false);
  const [cat, setCat] = useState<boolean>(false);
  const [asset, setAsset] = useState();
  const [selected, setSelected] = useState<any[]>([]);
  const {data} = props;

  const initSearch = {
    terms: {
      id$assets: JSON.stringify({
        tenantId: data?.id,
        assetType: 'protocol',
        memberId: props.user,
        // not: true,
      })
    },
    pageIndex: 0,
    pageSize: 10,
  };
  const [searchParam, setSearchParam] = useState<any>(initSearch);

  const handleSearch = (params: any) => {
    const tempParam = {...searchParam, ...params,};
    const defaultItem = searchParam.terms;
    const tempTerms = params?.terms;
    const terms = tempTerms ? {...defaultItem, ...tempTerms} : initSearch;
    let tempSearch: {};

    if (tempTerms) {
      tempParam.terms = terms;
      tempSearch = tempParam
    } else {
      tempSearch = initSearch
    }
    setSearchParam(tempSearch);
    service.assets.protocol(encodeQueryParam(tempSearch)).subscribe(resp => {
      setList(resp);
    })
  };

  useEffect(() => {
    handleSearch(searchParam)
  }, []);
  const rowSelection = {
    onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
      setSelected(selectedRows);
    },
    getCheckboxProps: (record: any) => ({
      name: record.name,
    }),
  };
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id',
    }, {
      title: '??????',
      dataIndex: 'name'
    }, {
      title: '??????',
      render: (_: string, record: any) => (
        <Fragment>
          <a onClick={() => {
            setAsset(record);
            setCat(true);
          }}>??????</a>
        </Fragment>
      )
    }];
  const unbind = () => {
    service.assets.unbind(data.id, [{
      assetIdList: selected.map(item => item.id),
      assetType: 'protocol'
    }]).subscribe(() => {
      message.success('????????????');
      handleSearch(searchParam);
      setSelected([]);
    })
  };

  return (
    <Drawer
      title="??????????????????"
      visible
      width='75VW'
      onClose={() => props.close()}
    >

      <SearchForm
        search={(params: any) => {
          handleSearch({terms: params});
        }}
        formItems={[
          {
            label: "ID",
            key: "id$LIKE",
            type: 'string'
          },
          {
            label: "??????",
            key: "name$LIKE",
            type: 'string'
          }
        ]}
      />
      <Button
        type="primary"
        style={{marginBottom: 10}}
        onClick={() => setAdd(true)}>??????</Button>
      {
        selected.length > 0 && (
          <Button
            type="danger"
            style={{marginBottom: 10, marginLeft: 10}}
            onClick={() => {
              unbind()
            }}>
            {`??????${selected.length}???`}
          </Button>
        )
      }
      <ProTable
        rowKey="id"
        rowSelection={rowSelection}
        columns={columns}
        dataSource={list?.data || []}
        onSearch={(searchData: any) => handleSearch(searchData)}
        paginationConfig={list || {}}
      />
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
        <Button
          onClick={() => {
            props.close();
          }}
          style={{marginRight: 8}}
        >
          ??????
        </Button>
      </div>
      {add && (
        <Add
          user={props.user}
          data={data}
          close={() => {
            setAdd(false);
            handleSearch(searchParam);
          }}/>
      )}
      {cat && <User asset={asset} close={() => {
        setCat(false);
        handleSearch(searchParam);
      }}/>}
    </Drawer>
  )
};
export default Edit;
