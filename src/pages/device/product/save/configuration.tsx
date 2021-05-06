import React, {useEffect, useState} from 'react';
import {FormComponentProps} from 'antd/lib/form';
import Form from 'antd/es/form';
import {Button, Card, Col, Drawer, Input, Modal, Row, Select} from 'antd';
import {DeviceProduct} from "@/pages/device/product/data";

interface Props extends FormComponentProps {
  data?: Partial<DeviceProduct>;
  configuration?: any;
  close: Function;
  save: (data: Partial<DeviceProduct>) => void;
}

interface State {
  protocolSupports: any[];
  protocolTransports: any[];
  organizationList: any[];
  configForm: any[];
  configName: string;
}

const Configuration: React.FC<Props> = props => {
  const initState: State = {
    protocolSupports: [],
    protocolTransports: [],
    organizationList: [],
    configName: '',
    configForm: [],
  };

  const {getFieldDecorator} = props.form;
  // 配置名称
  const [configName, setConfigName] = useState(initState.configName);
  // 配置表单
  const [configForm, setConfigForm] = useState(initState.configForm);

  const parseConfig = (configData: any[]) => {
    const config = configData.map(item => {
      const label = item.name;
      const key = `configuration.${item.property}`;
      const componentType = item.type.id;
      let component = null;
      const options = {
        initialValue: props.data?.configuration ? props.data?.configuration[item.property] : undefined,
      };

      if (componentType !== 'enum') {
        component = componentType === 'password' ? <Input.Password/> : <Input type={'text'}/>;
      } else {
        const o = item.type.elements;
        component = (
          <Select>
            {(o || []).map((e: any) => (
              <Select.Option key={e.value} value={e.value}>
                {e.text}
              </Select.Option>
            ))}
          </Select>
        );
      }
      return {
        label,
        key,
        styles: {
          xl: {span: 8},
          lg: {span: 8},
          md: {span: 12},
          sm: {span: 24},
        },
        options,
        component,
      };
    });
    setConfigForm(config);
  };

  useEffect(() => {
    setConfigName(props.configuration.name);
    parseConfig(props.configuration.properties)
  }, []);


  const saveData = () => {
    const {form} = props;
    form.validateFields((err, fileValue) => {
      if (err) return;
      props.save(fileValue);
    });
  };

  return (
    <Drawer
      title='编辑配置'
      visible
      width={500}
      onClose={() => props.close()}
      closable
    >
      <Form labelCol={{span: 6}} wrapperCol={{span: 18}}>
        {configName && (
          <Card title={configName} style={{marginBottom: 20}} bordered={false}>
            <Row gutter={16}>
              {configForm.map(item => (
                <Col key={item.key}>
                  <Form.Item label={item.label}>
                    {getFieldDecorator(item.key, item.options)(item.component)}
                  </Form.Item>
                </Col>
              ))}
            </Row>
          </Card>
        )}
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
          关闭
        </Button>
        <Button
          onClick={() => {
            saveData();
          }}
          type="primary"
        >
          保存
        </Button>
      </div>
    </Drawer>
  );
};

export default Form.create<Props>()(Configuration);
