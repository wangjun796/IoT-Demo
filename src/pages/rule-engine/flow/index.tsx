/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:30:17
 * @LastEditor: wangj
 * @LastEditTime: 2021-04-02 10:53:14
 */
import { Col, Row, Drawer } from 'antd';
import GGEditor, { Flow } from 'gg-editor';

import React from 'react';
import { FlowContextMenu } from './components/EditorContextMenu';
import { FlowDetailPanel } from './components/EditorDetailPanel';
import { RuleItemPanel } from './components/EditorItemPanel';
import { FlowToolbar } from './components/EditorToolbar';
import styles from './index.less';
import EditorConsole from './components/EditorConsole';
import SaveFlow from './SaveFlow';

interface Props {
  close: Function;
  data?: any;
  save: Function;
}

// interface State {
// modelData: any;
// }
const RuleFlow: React.FC<Props> = props => {
  // const initState: State = {
  //     modelData: props.data
  // }
  // const [modelData] = useState(initState.modelData);

  const saveModel = (item: any) => {
    const flowData = window.editor.getData();
    props.save({
      ...item,
      modelMeta: JSON.stringify({ ...item, ...flowData }),
      modelType: 'antv.g6',
    });
  };
  const renderTitle = () => {
    const action = props.data.option;
    switch (action) {
      case 'update':
        return '编辑规则模型';
      case 'copy':
        return '复制规则模型';
      default:
        return '新增规则模型';
    }
  };
  return (
    <Drawer
      title={renderTitle()}
      width="80vw"
      placement="right"
      visible
      onClose={() => props.close()}
    >
      <GGEditor className={styles.editor}>
        <Row type="flex" className={styles.editorHd}>
          <Col span={24}>
            <FlowToolbar />
          </Col>
        </Row>
        <Row type="flex" className={styles.editorBd}>
          <Col span={4} className={styles.editorSidebar}>
            <RuleItemPanel />
          </Col>
          <Col span={16} className={styles.editorContent}>
            <Flow
              // onClick={() => { message.success('点击1') }}
              // graph={{edgeDefaultShape: 'flow-polyline-round'}}
              noEndEdge={false}
              className={styles.flow}
              data={props.data}
              align={{
                line: {
                    stroke: 'green',
                    lineWidth: 0.5,
                }}}
              />
          </Col>
          <Col span={4} className={styles.editorSidebar}>
            <FlowDetailPanel
              data={props.data}
              save={(item: any) => {
                saveModel(item);
              }}
            />
            {/* <EditorMinimap /> */}

            <SaveFlow
            // 不能注释掉。页面不显示，。只用于加载Flow方法，此处只使用了保存方法。
            />
          </Col>
        </Row>
        <Col span={24}>
          <EditorConsole />
        </Col>
        <FlowContextMenu />
      </GGEditor>
    </Drawer>
  );
};
export default RuleFlow;
