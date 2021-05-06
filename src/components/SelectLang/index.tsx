/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:24:54
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-10 16:15:11
 */
import { Icon, Menu } from 'antd';
import { getLocale, setLocale } from 'umi-plugin-react/locale';
import { ClickParam } from 'antd/es/menu';
import React from 'react';
import classNames from 'classnames';
import HeaderDropdown from '../HeaderDropdown';
import styles from './index.less';

interface SelectLangProps {
  className?: string;
}

const SelectLang: React.FC<SelectLangProps> = props => {
  const { className } = props;
  const selectedLang = getLocale();

  const changeLang = ({ key }: ClickParam): void =>{
    // alert(key);
    setLocale(key);
  }
  // const changeLang = ()=>{
  //   const locale = getLocale();
  //   if (!locale || locale === 'zh-CN') {
  //     setLocale('en-US');
  //   } else {
  //     setLocale('zh-CN');
  //   }
  // };

  const locales = ['zh-CN', 'zh-TW', 'en-US', 'pt-BR'];
  const languageLabels = {
    'zh-CN': '简体中文',
    'zh-TW': '繁体中文',
    'en-US': 'English',
    'pt-BR': 'Português',
  };

  const languageIcons = {
    'zh-CN': '🇨🇳',
    'zh-TW': '🇭🇰',
    'en-US': '🇺🇸',
    'pt-BR': '🇧🇷',
  };
  const langMenu = (
    <Menu className={styles.menu} selectedKeys={[selectedLang]} onClick={changeLang}>
      {locales.map(locale => (
        <Menu.Item key={locale}>
          <span role="img" aria-label={languageLabels[locale]}>
            {languageIcons[locale]}
          </span>{' '}
          {languageLabels[locale]}
        </Menu.Item>
      ))}
    </Menu>
  );
  return (
    <HeaderDropdown overlay={langMenu} placement="bottomRight">
      <span className={classNames(styles.dropDown, className)}>
        <Icon type="global" title="语言" />
      </span>
    </HeaderDropdown>
  );
};

export default SelectLang;
