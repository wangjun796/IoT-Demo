import React, {useState} from 'react';
import Form, {FormComponentProps} from 'antd/lib/form';
import {Input, Radio, Button, List, Select, Drawer, Col, Row, Icon, AutoComplete, InputNumber} from 'antd';
import styles from '../index.less';
import {Parameter, FunctionMeta} from '../data.d';
import {renderUnit} from '@/pages/device/public';
import Paramter from '../paramter';

interface Props extends FormComponentProps {
  save: Function;
  data: Partial<FunctionMeta>;
  close: Function;
  unitsData: any;
}

interface State {
  editVisible: boolean;
  currentItem: Partial<Parameter>;
  currentTarget: string;
  data: Partial<FunctionMeta>;
  dataType: string;
  outputVisible: boolean;
  inputVisible: boolean;
  enumData: any[];
  outputParameter: Parameter[];
  inputs: Parameter[];
  currentParameter: any;
}

const FunctionDefin: React.FC<Props> = props => {
  const initState: State = {
    data: props.data,
    editVisible: false,
    currentItem: {},
    currentTarget: '',
    dataType: props.data.output?.type || '',
    outputVisible: false,
    inputVisible: false,
    enumData: props.data.output?.elements || [{text: '', value: '', id: 0}],
    outputParameter: props.data.output?.properties || [],
    inputs: [],
    currentParameter: {},
  };

  const {
    form: {getFieldDecorator},
  } = props;
  const [inputs, setInputs] = useState(initState.data.inputs || []);
  const [outputParameter, setOutputParameter] = useState(initState.outputParameter);
  const [dataType, setDataType] = useState(initState.dataType);
  const [enumData, setEnumData] = useState(initState.enumData);
  const [outputVisible, setOutputVisible] = useState(initState.outputVisible);
  const [inputVisible, setInputVisible] = useState(initState.inputVisible);
  const [currentParameter, setCurrentParameter] = useState(initState.currentParameter);

  const saveData = () => {
    const {form} = props;
    // const { id } = props.data;
    form.validateFields((err: any, fieldValue: any) => {
      if (err) return;
      const {
        output: {type},
      } = fieldValue;
      const data = fieldValue;
      if (type === 'object') {
        data.output.properties = outputParameter;
      } else if (type === 'enum') {
        data.valueType.elements = enumData;
      }
      props.save({...data, inputs});
    });
  };

  let dataSource = [{
    text: 'String?????????UTC????????? (??????)',
    value: 'string',
  }, 'yyyy-MM-dd', 'yyyy-MM-dd HH:mm:ss', 'yyyy-MM-dd HH:mm:ss EE', 'yyyy-MM-dd HH:mm:ss zzz'];

  const renderDataType = () => {
    switch (dataType) {
      case 'float':
      case 'double':
        return (
          <div>
            <Form.Item label="????????????" style={{height: 69}}>
              <Col span={11}>
                {getFieldDecorator('output.min', {
                  initialValue: initState.data.output?.min,
                })(<InputNumber style={{width: '100%'}} placeholder="?????????"/>)}
              </Col>
              <Col span={2} push={1}>
                ~
              </Col>
              <Col span={11}>
                <Form.Item>
                  {getFieldDecorator('output.max', {
                    initialValue: initState.data.output?.max,
                  })(<InputNumber style={{width: '100%'}} placeholder="?????????"/>)}
                </Form.Item>
              </Col>
            </Form.Item>

            <Form.Item label="??????">
              {getFieldDecorator('output.step', {
                initialValue: initState.data.output?.step,
              })(<InputNumber style={{width: '100%'}} placeholder="???????????????"/>)}
            </Form.Item>

            <Form.Item label="??????">
              {getFieldDecorator('output.scale', {
                initialValue: initState.data.output?.scale,
              })(<InputNumber min={0} step={1} placeholder="???????????????" style={{width: '100%'}}/>)}
            </Form.Item>

            <Form.Item label="??????">
              {getFieldDecorator('output.unit', {
                initialValue: initState.data.output?.unit,
              })(renderUnit(props.unitsData))}
            </Form.Item>
          </div>
        );
      case 'int':
      case 'long':
        return (
          <div>
            <Form.Item label="????????????" style={{height: 69}}>
              <Col span={11}>
                {getFieldDecorator('output.min', {
                  initialValue: props.data.output?.min,
                })(<InputNumber style={{width: '100%'}} placeholder="?????????"/>)}
              </Col>
              <Col span={2} push={1}>
                ~
              </Col>
              <Col span={11}>
                <Form.Item>
                  {getFieldDecorator('output.max', {
                    initialValue: props.data.output?.max,
                  })(<InputNumber style={{width: '100%'}} placeholder="?????????"/>)}
                </Form.Item>
              </Col>
            </Form.Item>

            <Form.Item label="??????">
              {getFieldDecorator('output.step', {
                initialValue: props.data.output?.step,
              })(<InputNumber style={{width: '100%'}} placeholder="???????????????"/>)}
            </Form.Item>
            <Form.Item label="??????">
              {getFieldDecorator('output.unit', {
                initialValue: props.data.output?.unit,
              })(renderUnit(props.unitsData))}
            </Form.Item>
          </div>
        );
      case 'string':
        return (
          <div>
            <Form.Item label="????????????">
              {getFieldDecorator('output.expands.maxLength', {
                initialValue: props.data.output?.expands?.maxLength,
              })(<Input addonAfter="??????"/>)}
            </Form.Item>
          </div>
        );
      case 'boolean':
        return (
          <div>
            <Form.Item label="?????????" style={{height: 69}}>
              <Col span={11}>
                {getFieldDecorator('output.trueText', {
                  initialValue: initState.data.output?.trueText,
                })(<Input placeholder="trueText"/>)}
              </Col>
              <Col span={2} push={1}>
                ~
              </Col>
              <Col span={11}>
                <Form.Item>
                  {getFieldDecorator('output.trueValue', {
                    initialValue: initState.data.output?.trueValue,
                  })(<Input placeholder="trueValue"/>)}
                </Form.Item>
              </Col>
            </Form.Item>
            <Form.Item style={{height: 69}}>
              <Col span={11}>
                {getFieldDecorator('output.falseText', {
                  initialValue: initState.data.output?.falseText,
                })(<Input placeholder="falseText"/>)}
              </Col>
              <Col span={2} push={1}>
                ~
              </Col>
              <Col span={11}>
                <Form.Item>
                  {getFieldDecorator('output.falseValue', {
                    initialValue: initState.data.output?.falseValue,
                  })(<Input placeholder="falseValue"/>)}
                </Form.Item>
              </Col>
            </Form.Item>
          </div>
        );
      case 'date':
        return (
          <div>
            <Form.Item label="????????????">
              {getFieldDecorator('output.format', {
                initialValue: props.data.output?.format,
              })(
                <AutoComplete dataSource={dataSource} placeholder="???????????????String?????????UTC????????? (??????)"
                              filterOption={(inputValue, option) =>
                                option?.props?.children?.toUpperCase()?.indexOf(inputValue.toUpperCase()) !== -1
                              }
                />,
              )}
            </Form.Item>
          </div>
        );
      case 'array':
        return (
          <div>
            <Form.Item label="????????????">
              {getFieldDecorator('output.elementType', {
                initialValue: props.data.output?.elementType,
              })(
                <Radio.Group>
                  <Radio value="int">int32(?????????)</Radio>
                  <Radio value="float">float(????????????</Radio>
                  <Radio value="double">double(?????????)</Radio>
                  <Radio value="string">text(?????????)</Radio>
                  <Radio value="object">object(?????????)</Radio>
                </Radio.Group>,
              )}
            </Form.Item>
            <Form.Item label="????????????">
              {getFieldDecorator('output.elementNumber', {
                initialValue: props.data.output?.elementNumber,
              })(<Input/>)}
            </Form.Item>
          </div>
        );
      case 'enum':
        return (
          <div>
            <Form.Item label="?????????">
              {enumData.map((item, index) => (
                <Row key={item.id}>
                  <Col span={10}>
                    <Input
                      placeholder="????????????0"
                      value={item.value}
                      onChange={event => {
                        enumData[index].value = event.target.value;
                        setEnumData([...enumData]);
                      }}
                    />
                  </Col>
                  <Col span={1} style={{textAlign: 'center'}}>
                    <Icon type="arrow-right"/>
                  </Col>
                  <Col span={10}>
                    <Input
                      placeholder="????????????????????????"
                      value={item.text}
                      onChange={event => {
                        enumData[index].text = event.target.value;
                        setEnumData([...enumData]);
                      }}
                    />
                  </Col>
                  <Col span={3} style={{textAlign: 'center'}}>
                    {index === 0 ? (
                      (enumData.length - 1) === 0 ? (
                        <Icon type="plus-circle"
                              onClick={() => {
                                setEnumData([...enumData, {id: enumData.length + 1}]);
                              }}
                        />
                      ) : (
                        <Icon type="minus-circle"
                              onClick={() => {
                                enumData.splice(index, 1);
                                setEnumData([...enumData]);
                              }}
                        />
                      )
                    ) : (
                      index === (enumData.length - 1) ? (
                        <Row>
                          <Icon type="plus-circle"
                                onClick={() => {
                                  setEnumData([...enumData, {id: enumData.length + 1}]);
                                }}
                          />
                          <Icon style={{paddingLeft: 10}}
                                type="minus-circle"
                                onClick={() => {
                                  enumData.splice(index, 1);
                                  setEnumData([...enumData]);
                                }}
                          />
                        </Row>
                      ) : (
                        <Icon type="minus-circle"
                              onClick={() => {
                                enumData.splice(index, 1);
                                setEnumData([...enumData]);
                              }}
                        />
                      )
                    )}
                  </Col>
                </Row>
              ))}
            </Form.Item>
          </div>
        );
      case 'object':
        return (
          <Form.Item label="JSON??????">
            {outputParameter.length > 0 && (
              <List
                bordered
                dataSource={outputParameter}
                renderItem={(item: any) => (
                  <List.Item
                    actions={[
                      <Button
                        type="link"
                        onClick={() => {
                          setOutputVisible(true);
                          setCurrentParameter(item);
                        }}
                      >
                        ??????
                      </Button>,
                      <Button
                        type="link"
                        onClick={() => {
                          const index = outputParameter.findIndex((i: any) => i.id === item.id);
                          outputParameter.splice(index, 1);
                          setOutputParameter([...outputParameter]);
                        }}
                      >
                        ??????
                      </Button>,
                    ]}
                  >
                    ???????????????{item.name}
                  </List.Item>
                )}
              />
            )}
            <Button
              type="link"
              onClick={() => {
                setOutputVisible(true);
                setCurrentParameter({});
              }}
            >
              <Icon type="plus"/>
              ????????????
            </Button>
          </Form.Item>
        );
      case 'file':
        return (
          <Form.Item label="????????????">
            {getFieldDecorator('output.fileType', {
              initialValue: '',
            })(
              <Select>
                <Select.Option value="url">URL(??????)</Select.Option>
                <Select.Option value="base64">Base64(Base64??????)</Select.Option>
                <Select.Option value="binary">Binary(?????????)</Select.Option>
              </Select>,
            )}
          </Form.Item>
        );
      /*case 'geoPoint':
        return (
          <div>
            <Form.Item label="????????????">
              {getFieldDecorator('output.latProperty', {
                initialValue: initState.data.output?.latProperty,
              })(<Input placeholder="?????????????????????" />)}
            </Form.Item>
            <Form.Item label="????????????">
              {getFieldDecorator('output.lonProperty', {
                initialValue: initState.data.output?.lonProperty,
              })(<Input placeholder="?????????????????????" />)}
            </Form.Item>
          </div>
        );*/
      case 'password':
        return (
          <div>
            <Form.Item label="????????????">
              {getFieldDecorator('valueType.expands.maxLength', {
                initialValue: initState.data.valueType?.expands?.maxLength,
              })(<Input addonAfter="??????"/>)}
            </Form.Item>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <Drawer
      title="??????????????????"
      placement="right"
      closable={false}
      onClose={() => props.close()}
      visible
      width="30%"
    >
      <Form className={styles.paramterForm}>
        <Form.Item label="????????????">
          {getFieldDecorator('id', {
            rules: [
              {required: true, message: '?????????????????????'},
              {max: 64, message: '?????????????????????64?????????'},
              {pattern: new RegExp(/^[0-9a-zA-Z_\-]+$/, "g"), message: '??????????????????????????????????????????????????????????????????'}
            ],
            initialValue: initState.data.id,
          })(
            <Input
              disabled={!!initState.data.id}
              style={{width: '100%'}}
              placeholder="?????????????????????"
            />,
          )}
        </Form.Item>
        <Form.Item label="????????????">
          {getFieldDecorator('name', {
            rules: [
              {required: true, message: '?????????????????????'},
              {max: 200, message: '?????????????????????200?????????'}
            ],
            initialValue: initState.data.name,
          })(<Input/>)}
        </Form.Item>
        <Form.Item label="????????????">
          {getFieldDecorator('async', {
            rules: [{required: true}],
            initialValue: initState.data.async,
          })(
            <Radio.Group>
              <Radio value>???</Radio>
              <Radio value={false}>???</Radio>
            </Radio.Group>,
          )}
        </Form.Item>
        <Form.Item label="????????????">
          {inputs.length > 0 && (
            <List
              bordered
              dataSource={inputs}
              renderItem={(item: any) => (
                <List.Item
                  actions={[
                    <Button
                      type="link"
                      onClick={() => {
                        setInputVisible(true);
                        setCurrentParameter(item);
                      }}
                    >
                      ??????
                    </Button>,
                    <Button
                      type="link"
                      onClick={() => {
                        const index = inputs.findIndex((i: any) => i.id === item.id);
                        inputs.splice(index, 1);
                        setInputs([...inputs]);
                      }}
                    >
                      ??????
                    </Button>,
                  ]}
                >
                  ???????????????{item.name}
                </List.Item>
              )}
            />
          )}
          <Button type="link" icon="plus" onClick={() => {
            setCurrentParameter({});
            setInputVisible(true);
          }}>
            ????????????
          </Button>
        </Form.Item>
        <Form.Item label="????????????">
          {getFieldDecorator('output.type', {
            initialValue: initState.data.output?.type,
          })(
            <Select
              placeholder="?????????"
              onChange={(value: string) => {
                setDataType(value);
              }}
            >
              <Select.OptGroup label="????????????">
                <Select.Option value="int">int(?????????)</Select.Option>
                <Select.Option value="long">long(????????????)</Select.Option>
                <Select.Option value="double">double(??????????????????)</Select.Option>
                <Select.Option value="float">float(??????????????????)</Select.Option>
                <Select.Option value="string">text(?????????)</Select.Option>
                <Select.Option value="boolean">bool(?????????)</Select.Option>
                <Select.Option value="date">date(?????????)</Select.Option>
              </Select.OptGroup>
              <Select.OptGroup label="????????????">
                <Select.Option value="enum">enum(??????)</Select.Option>
                <Select.Option value="array">array(??????)</Select.Option>
                <Select.Option value="object">object(?????????)</Select.Option>
                <Select.Option value="file">file(??????)</Select.Option>
                <Select.Option value="password">password(??????)</Select.Option>
                <Select.Option value="geoPoint">geoPoint(????????????)</Select.Option>
              </Select.OptGroup>
            </Select>,
          )}
        </Form.Item>
        {renderDataType()}
        <Form.Item label="??????">
          {getFieldDecorator('description', {
            initialValue: initState.data.description,
          })(<Input.TextArea rows={3}/>)}
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
        <Button
          onClick={() => {
            props.close();
          }}
          style={{marginRight: 8}}
        >
          ??????
        </Button>
        <Button
          onClick={() => {
            saveData();
          }}
          type="primary"
        >
          ??????
        </Button>
      </div>
      {outputVisible && (
        <Paramter
          data={currentParameter}
          unitsData={props.unitsData}
          save={item => {
            const temp = outputParameter.filter(i => i.id !== item.id);
            setOutputParameter([...temp, item]);
          }}
          close={() => setOutputVisible(false)}
        />
      )}
      {inputVisible && (
        <Paramter
          unitsData={props.unitsData}
          data={currentParameter}
          save={item => {
            const temp = inputs.filter(i => i.id !== item.id);
            setInputs([...temp, item]);
          }}
          close={() => {
            setCurrentParameter({});
            setInputVisible(false);
          }}
        />
      )}
    </Drawer>
  );
};

export default Form.create<Props>()(FunctionDefin);
