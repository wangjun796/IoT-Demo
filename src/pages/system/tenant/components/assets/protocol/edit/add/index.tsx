import { Form, Drawer, Select, Divider, Button, message } from "antd";
import React, { useState, useEffect } from "react";
import { ListData } from "@/services/response";
import Service from "@/pages/system/tenant/service";
import encodeQueryParam from "@/utils/encodeParam";
import { FormComponentProps } from "antd/es/form";
import SearchForm from "@/components/SearchForm";
import ProTable from "@/pages/system/permission/component/ProTable";

interface Props extends FormComponentProps {
    close: Function
    data: any
    user: any
}
const Add = (props: Props) => {
    const service = new Service('tenant');

    const [list, setList] = useState<ListData<any>>();
    const [loading, setLoading] = useState<boolean>(true);
    const [userList, setUserList] = useState();
    const { data } = props;
    const [checkedUserList, setCheckedUserList] = useState<string[]>(props.user ? [props.user] : []);
    const [selectedAssetsId, setSelectedAssetsId] = useState<string[]>([]);

    const initSearch = {
        terms: {
            id$assets: JSON.stringify({
                tenantId: data?.id,
                assetType: 'protocol',
                not: true,
            })
        },
        pageIndex: 0,
        pageSize: 10,
    }
    const [searchParam, setSearchParam] = useState<any>(initSearch);

    const handleSearch = (params: any) => {
        const tempParam = { ...searchParam, ...params, };
        const defaultItem = searchParam.terms;
        const tempTerms = params?.terms;
        const terms = tempTerms ? { ...defaultItem, ...tempTerms } : initSearch;
        let tempSearch = {};
        if (tempTerms) {
            tempParam.terms = terms;
            tempSearch = tempParam
        } else {
            tempSearch = initSearch
        }
        setSearchParam(tempSearch);
        service.assets.protocol(encodeQueryParam(tempSearch)).subscribe(resp => {
            setList(resp);
            setLoading(false);
        });
    }
    useEffect(() => {
        handleSearch(searchParam);
        service.member.query(data.id, {}).subscribe(resp => {
            setUserList(resp.data);
        });
    }, []);

    const bind = () => {
        setLoading(true);
        const bindData: any[] = []
        if (checkedUserList.includes("*")) {
            (userList || []).forEach((user: any) => bindData.push({
                userId: user.userId,
                assetType: 'protocol',
                assetIdList: selectedAssetsId,
                allPermission: true,
            }))
        } else {
            checkedUserList.forEach(id => bindData.push({
                userId: id,
                assetType: 'protocol',
                assetIdList: selectedAssetsId,
                allPermission: true,
            }));
        }
        service.assets.bind(data.id, bindData).subscribe(() => {
            setLoading(false);
            message.success('????????????')
            props.close();
        });
        setLoading(false);
        // validateFields((error) => {
        //     if (!error) {
        //         checkedUserList.forEach(id => bindData.push({
        //             userId: id,
        //             assetType: 'protocol',
        //             assetIdList: selectedAssetsId,
        //             allPermission: true,
        //         }));
        //         // if (checkedUserList.length === 0) {
        //         //     message.error('???????????????');
        //         //     setLoading(false);
        //         // } else {
        //         service.assets.bind(data.id, bindData).subscribe(() => {
        //             setLoading(false);
        //             message.success('????????????')
        //             props.close();
        //         });
        //         // }
        //     }
        //     setLoading(false);

        // });

    }
    const rowSelection = {
        onChange: (selectedRowKeys: any[], selectedRows: any[]) => {
            // selectedAssetsId = selectedRowKeys;
            setSelectedAssetsId(selectedRowKeys);
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
        }];
    const [selectMode, setSelectMode] = useState<'tags' | 'default'>('tags');
    const [checked, setChecked] = useState(checkedUserList);
    return (
        <Drawer
            title="????????????"
            visible
            width='70VW'
            onClose={() => props.close()}
        >
            <Form layout="horizontal">

                <Form.Item label="????????????"
                    labelCol={{ xl: 2, xs: 4, lg: 3, md: 3 }}
                    wrapperCol={{ xl: 22, xs: 20, lg: 21, md: 21 }}
                >
                    <Select
                        value={checked}
                        allowClear
                        mode={selectMode}
                        placeholder="????????????"
                        onInputKeyDown={(e) => {
                            e.preventDefault()
                        }}
                        onChange={(value: string[]) => {
                            setCheckedUserList(value);
                            if (value.includes('*')) {
                                setSelectMode('default');
                                setChecked(['*']);
                            } else {
                                setChecked(value);
                                setSelectMode('tags');
                            }
                        }}
                        style={{ width: '100%', marginBottom: 10 }}
                    >
                        <Select.Option value="*">????????????</Select.Option>
                        {(userList || []).map((item: any) => <Select.Option key={item.id}
                            value={item.userId}>{item.name}</Select.Option>)}
                    </Select>
                </Form.Item>
            </Form>
            <Divider />
            <SearchForm
                search={(searchData: any) => {
                    setLoading(true)
                    handleSearch({ terms: searchData });
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
            <ProTable
                loading={loading}
                rowKey="id"
                rowSelection={rowSelection}
                columns={columns}
                dataSource={list?.data || []}
                onSearch={(params: any) => {
                    setLoading(true);
                    handleSearch(params)
                }}
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
                    style={{ marginRight: 8 }}
                >
                    ??????
                </Button>
                <Button
                    onClick={() => {
                        bind()
                    }}
                    disabled={selectedAssetsId.length === 0}
                    type="primary"
                >
                    {selectedAssetsId.length === 0 ? '??????' : `??????${selectedAssetsId.length}???`}
                </Button>
            </div>
        </Drawer>
    )
}
export default Form.create<Props>()(Add);
