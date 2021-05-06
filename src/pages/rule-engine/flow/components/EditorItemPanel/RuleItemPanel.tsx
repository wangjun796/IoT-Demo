/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:30:03
 * @LastEditor: wangj
 * @LastEditTime: 2021-04-01 16:28:20
 */
import { ItemPanel, Item } from 'gg-editor';

import { Collapse } from 'antd';
import React, { useState, useEffect } from 'react';
import styles from './index.less';
import items from './item';
import apis from '@/services';

const { Panel } = Collapse;

interface Props {}

interface State {
  supportNode: string[];
}

const RuleItemPanel: React.FC<Props> = () => {
  const initState: State = {
    supportNode: [],
  };

  const [supportNode, setSupportNode] = useState(initState.supportNode);

  useEffect(() => {
    apis.ruleEngine.nodeList().then(response => {
      if (response) {
        setSupportNode(response.result);
      }
    });
  }, []);

  // const temps = items.forEach(type => {
  //   type.items.forEach(item => supportNode.some(i => i === item.model.executor ? item : null))
  // }
  // );

  const renderItems = () =>
    // const temp = items.filter(data => {
    //   data.items = data.items.filter(item => supportNode.indexOf(item.model.executor) !== -1);
    //   return data.items.length > 0;
    // });
    // console.log(temp, supportNode, 'items');
    items.map(
      type =>
        type.items.length > 0 &&
        type.items.filter(it => supportNode.indexOf(it.model.executor) !== -1).length > 0 && (
          <Panel header={type.title} key={type.key} >
            <div style={{ textAlign: 'center' }}>
              {type.items.length > 0 &&
                type.items.map(
                  item =>
                    supportNode.findIndex(i => i === item.model.executor) > -1 && (
                      <Item
                        type={item.type}
                        size={item.size}
                        style={{background:'Green'}}
                        shape={item.shape}
                        model={item.model}
                        src={item.src}
                        key={item.model.executor}
                      >
                        {/* <img src={item.src} draggable={true} ></img> */}
                      </Item>
                    ),
                )}
            </div>
          </Panel>
        ),
    );

  return (
    <ItemPanel className={styles.itemPanel}>
      <Collapse accordion={false} bordered={false}  defaultActiveKey={['start']} >
        {renderItems()}
      </Collapse>
    </ItemPanel>
  );
};

export default RuleItemPanel;
