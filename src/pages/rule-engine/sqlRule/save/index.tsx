import React, { useEffect, useState } from 'react';
import { Button, Col, Drawer, Form, Input, Row, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { SqlRule } from '../data';
import Action from '@/pages/rule-engine/sqlRule/save/actions';
import 'ace-builds';
import 'ace-builds/webpack-resolver';
import AceEditor from 'react-ace';
import 'ace-builds/src-noconflict/mode-sql';
import 'ace-builds/src-noconflict/mode-mysql';
import 'ace-builds/src-noconflict/ext-language_tools';
import 'ace-builds/src-noconflict/ext-searchbox';
import 'ace-builds/src-noconflict/theme-eclipse';

interface Props extends FormComponentProps {
  close: Function;
  save: Function;
  data: Partial<SqlRule>;
}

interface State {
  script?: string;
  actions: any[];
  whenErrorThen: any[];
  sqlRuleType: string;
}

const Save: React.FC<Props> = props => {
  const {
    form: { getFieldDecorator },
    form,
  } = props;

  const initState: State = {
    script: props.data?.sql,
    actions: props.data.actions ? props.data.actions : [{ _id: 0 }],
    whenErrorThen: props.data.whenErrorThen ? props.data.whenErrorThen : [{ _id: 0 }],
    sqlRuleType: props.data.type ? props.data.type : '',
  };

  const [actions, setActions] = useState(initState.actions);
  const [whenErrorThen, setWhenErrorThen] = useState(initState.whenErrorThen);
  const [sqlRuleType, setSqlRuleType] = useState(initState.sqlRuleType);

  const submitData = () => {
    form.validateFields((err, fileValue) => {
      if (err) return;
      const { id } = props.data;

      const data = fileValue;
      let sqlRule = {
        name: data.name,
        type: data.type,
        cron: data.cron,
        sql: props.data.sql,
        actions: actions,
        whenErrorThen: whenErrorThen,
      };

      let ruleInstance = {
        name: data.name,
        modelMeta: JSON.stringify(sqlRule),
        modelType: 'sql_rule',
        modelVersion: 0,
      };
      props.save({
        id,
        ...ruleInstance,
      });
    });
  };

  const renderSqlRuleType = () => {
    switch (sqlRuleType) {
      case 'timer':
        return (
          <Col span={12}>
            <Form.Item label="cron?????????">
              {getFieldDecorator('cron', {
                rules: [{ required: true, message: 'cron?????????' }],
                initialValue: props.data?.cron,
              })(<Input placeholder="??????cron?????????"/>)}
            </Form.Item>
          </Col>
        );
      default:
        return null;
    }
  };

  useEffect(() => {

  }, []);

  return (
    <Drawer
      visible
      width={900}
      onClose={() => props.close()}
      title={`${props.data?.id ? '??????' : '??????'}????????????`}
    >
      <Form labelCol={{ span: 6 }} wrapperCol={{ span: 18 }} style={{ paddingBottom: 20 }} key='sqlRule_form'>
        <Row>
          <Col span={12}>
            <Form.Item label="??????">
              {getFieldDecorator('name', {
                rules: [
                  {required: true, message: '???????????????'},
                  {max: 200, message: '???????????????200?????????'}
                ],
                initialValue: props.data?.name,
              })(<Input placeholder="???????????????"/>)}
            </Form.Item>
          </Col>
          <Col span={12}>
            <Form.Item label="??????">
              {getFieldDecorator('type', {
                rules: [{ required: true, message: '??????' }],
                initialValue: props.data?.type,
              })(<Select placeholder="???????????????" onChange={(value: string) => {
                setSqlRuleType(value);
              }}>
                <Select.Option value="timer" key='timer'>??????</Select.Option>
                <Select.Option value="realTime" key='realTime'>??????</Select.Option>
              </Select>)}
            </Form.Item>
          </Col>
          {renderSqlRuleType()}

          <Col span={24}>
            <Form.Item label="SQL" labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
              <AceEditor
                mode='mysql'
                theme="eclipse"
                name="app_code_editor"
                fontSize={14}
                showPrintMargin
                showGutter
                onChange={value => {
                  props.data.sql = value;
                }}
                value={props.data.sql}
                wrapEnabled
                highlightActiveLine  //???????????????
                enableSnippets  //???????????????
                style={{ width: '100%', height: 300 }}
                setOptions={{
                  enableBasicAutocompletion: true,   //??????????????????????????????
                  enableLiveAutocompletion: true,   //?????????????????????????????? ?????????????????????????????????
                  enableSnippets: true,  //???????????????
                  showLineNumbers: true,
                  tabSize: 2,
                }}
              />
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="????????????" labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
              {actions.map((item: any, index: number) => (
                  <Action save={(data: any) => {
                    actions.splice(index, 1, data);
                  }} remove={(value: any) => {
                    actions.splice(value, 1);
                    setActions([...actions]);
                  }} position={index} action={item}/>
                ),
              )}
              <Button icon="plus" type="link"
                      onClick={() => {
                        setActions([...actions, { _id: Math.round(Math.random() * 100000) }]);
                      }}
              >
                ????????????
              </Button>
            </Form.Item>
          </Col>
          <Col span={24}>
            <Form.Item label="??????????????????" labelCol={{ span: 3 }} wrapperCol={{ span: 21 }}>
              {whenErrorThen.map((item: any, index: number) => (
                  <Action save={(data: any) => {
                    whenErrorThen.splice(index, 1, data);
                  }} remove={(value: any) => {
                    whenErrorThen.splice(value, 1);
                    setWhenErrorThen([...whenErrorThen]);
                  }} position={index} action={item}/>
                ),
              )}
              <Button icon="plus" type="link"
                      onClick={() => {
                        setWhenErrorThen([...whenErrorThen, { _id: Math.round(Math.random() * 100000) }]);
                      }}
              >
                ????????????
              </Button>
            </Form.Item>
          </Col>
        </Row>
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
          style={{ marginRight: 8 }}
        >
          ??????
        </Button>
        <Button
          onClick={() => {
            submitData();
          }}
          type="primary"
        >
          ??????
        </Button>
      </div>
    </Drawer>
  );
};
export default Form.create<Props>()(Save);
