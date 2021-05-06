/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:25:42
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-16 11:29:32
 */
import React from 'react';
import { Card } from 'antd';
import classNames from 'classnames';
import { CardProps } from 'antd/es/card';

import styles from './index.less';
const { Meta } = Card;
type totalType = () => React.ReactNode;

const renderTotal = (total?: number | totalType | React.ReactNode) => {
  if (!total) {
    return;
  }
  let totalDom;
  switch (typeof total) {
    case 'undefined':
      totalDom = null;
      break;
    case 'function':
      totalDom = <div className={styles.total}>{total()}</div>;
      break;
    default:
      totalDom = <div className={styles.total}>{total}</div>;
  }
  return totalDom;
};

export interface IChartCardProps extends CardProps {
  title: React.ReactNode;
  action?: React.ReactNode;
  total?: React.ReactNode | number | (() => React.ReactNode | number);
  footer?: React.ReactNode;
  contentHeight?: number;
  avatar?: React.ReactNode;
  style?: React.CSSProperties;
}

class ChartCard extends React.Component<IChartCardProps> {
  renderContent = () => {
    const { contentHeight, title, avatar, action, total, footer, children, loading } = this.props;
    if (loading) {
      return false;
    }
    return (
      <div className={styles.chartCard}>
        <div
          className={classNames(styles.chartTop, {
            [styles.chartTopMargin]: !children && !footer,
          })}
        >
          <div className={styles.avatar}>{avatar}</div>
          <div className={styles.metaWrap}>
            <div className={styles.meta}>
              <span className={styles.title}>{title}</span>
              <span className={styles.action}>{action}</span>
            </div>
            {renderTotal(total)}
          </div>
        </div>
        {children && (
          <div className={styles.content} style={{ height: contentHeight || 'auto' }}>
            <div className={contentHeight && styles.contentFixed}>{children}</div>
          </div>
        )}
        {footer && (
          <div
            className={classNames(styles.footer, {
              [styles.footerMargin]: !children,
            })}
          >
            {footer}
          </div>
        )}
      </div>
    );
  };

  render() {//TODO:增加鼠标hover悬浮效果
    const {
      loading = false,
      bodyStyle={ padding: '20px 24px 8px 24px' ,background:'#ddd'},
      contentHeight,
      title,
      avatar,
      action,
      total,
      footer,
      children,
      ...rest
    } = this.props;
    return (
      <Card loading={loading} bodyStyle={bodyStyle} hoverable={true} bordered={true} {...rest}>
        {this.renderContent()}
        {/* <Meta title="TEST" description="test" /> */}
      </Card>
    );
  }
}

export default ChartCard;
