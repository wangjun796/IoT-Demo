import ProLayout, {
  MenuDataItem,
  SettingDrawer,
  BasicLayoutProps as ProLayoutProps,
  Settings,
  SettingDrawer,
} from '@ant-design/pro-layout';
import { Breadcrumb } from 'antd';
import React, { useEffect } from 'react';
import { Link } from 'umi';
import { Dispatch } from 'redux';
import { connect } from 'dva';
import { Result, Button } from 'antd';
import Authorized from '@/utils/Authorized';
import RightContent from '@/components/GlobalHeader/RightContent';
import { ConnectState } from '@/models/connect';
import { isAntDesignPro, getAuthorityFromRouter } from '@/utils/utils'; //import logo from '../assets/logo.svg';

import logo from '../assets/IOTX.svg'; // import dmtLogo from '../assets/dmt-logo.jpg';

import dmtLogo from '../assets/dmtLogo.jpg';
import MenuFont from '../components/MenuFont';
import Icon from '@ant-design/icons';
import withRouter from 'umi/withRouter';
import Container from '@/pages/script-demo/Example'; // import PubSub from 'pubsub-js';

const noMatch = (
  <Result
    status="403"
    title="403"
    subTitle="Sorry, you are not authorized to access this page."
    extra={
      <Button type="primary">
        <Link to="/user/login">Go Login</Link>
      </Button>
    }
  />
);
export interface BasicLayoutProps extends ProLayoutProps {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
  route: ProLayoutProps['route'] & {
    authority: string[];
  };
  settings: Settings;
  dispatch: Dispatch;
}
export type BasicLayoutContext = { [K in 'location']: BasicLayoutProps[K] } & {
  breadcrumbNameMap: {
    [path: string]: MenuDataItem;
  };
};
/**icon: item.icon?<Icon type={item.icon} name={item.icon} >:<MenuFont type={item.iconfont} />,
 * use Authorized check all menu item
 */
// const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
//   const version = localStorage.getItem('system-version');
//   let tenant = localStorage.getItem('tenants-admin');
//   // tenant = 'true';
//   if (tenant === 'true') {
//     return menuList.filter(j => j.tenant).filter(i => i.tenant.indexOf('admin') > -1).map(item => {
//       const localItem: any = {
//         ...item,
//         //icon: item.icon?<Icon type={item.icon} />:<MenuFont type={item.iconfont} />,
//         icon: <MenuFont type={item.iconfont} />,
//         children: item.children ? menuDataRender(item.children) : []
//       };
//       return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//     });
//   } else if (tenant === 'false') {
//     return menuList.filter(j => j.tenant).filter(i => i.tenant.indexOf('member') > -1).map(item => {
//       const localItem: any = {
//         ...item,
//         //icon: item.icon?<Icon type={item.icon} />:<MenuFont type={item.iconfont} />,
//         icon: <MenuFont type={item.iconfont} />,
//         children: item.children ? menuDataRender(item.children) : []
//       };
//       return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//     });
//   }
//   return menuList.map(item => {
//     const localItem: any = {
//       ...item,
//       icon: <MenuFont type={item.iconfont} />,
//       children: item.children ? menuDataRender(item.children) : []
//     };
//     return Authorized.check(item.authority, localItem, null) as MenuDataItem;
//   });
// };

const defaultFooterDom = <div />;

const footerRender: BasicLayoutProps['footerRender'] = () => {
  // if (!isAntDesignPro()) {
  //   return defaultFooterDom;
  // }
  return (
    <>
      {defaultFooterDom}
      <div
        style={{
          padding: '0px 24px 24px',
          textAlign: 'center',
        }}
      >
        <a href="http://www.dmt.com.cn/" target="_blank" rel="noopener noreferrer">
          <img src={dmtLogo} width="200px" alt="dmt logo" />
        </a>
      </div>
    </>
  );
};

const BasicLayout: React.FC<BasicLayoutProps> = (props) => {
  //BasicLayoutProps通过conectmodel映射过来
  const {
    dispatch,
    children,
    settings,
    location = {
      pathname: '/',
    },
  } = props;
  let iconOption = settings.iconOption ? settings.iconOption : 0;
  useEffect(() => {
    // mydebug(logo);
    if (dispatch) {
      dispatch({
        type: 'user/fetchCurrent',
      });
    }
  }, []); // useEffect(() => {
  //   if (dispatch) {
  //     dispatch({
  //       type: 'global/changeLayoutCollapsed',
  //       payload:true,
  //     });
  //   }
  // }, []);

  useEffect(() => {
    if (dispatch) {
      dispatch({
        type: 'settings/settingData',
        payload: { ...settings },
      });
    }
  }, []);

  const menuDataRender = (menuList: MenuDataItem[]): MenuDataItem[] => {
    const version = localStorage.getItem('system-version');
    let tenant = localStorage.getItem('tenants-admin'); // tenant = 'true';

    if (tenant === 'true') {
      return menuList
        .filter((j) => j.tenant)
        .filter((i) => i.tenant.indexOf('admin') > -1)
        .map((item) => {
          const localItem: any = {
            ...item,
            //icon: item.icon?<Icon type={item.icon} />:<MenuFont type={item.iconfont} />,
            icon: <MenuFont type={item.iconfont} />,
            children: item.children ? menuDataRender(item.children) : [],
          };
          return Authorized.check(item.authority, localItem, null) as MenuDataItem;
        });
    } else if (tenant === 'false') {
      return menuList
        .filter((j) => j.tenant)
        .filter((i) => i.tenant.indexOf('member') > -1)
        .map((item) => {
          const localItem: any = {
            ...item,
            //icon: item.icon?<Icon type={item.icon} />:<MenuFont type={item.iconfont} />,
            icon: <MenuFont type={item.iconfont} />,
            children: item.children ? menuDataRender(item.children) : [],
          };
          return Authorized.check(item.authority, localItem, null) as MenuDataItem;
        });
    }

    return menuList.map((item) => {
      const localItem: any =
        iconOption > 0
          ? {
              ...item,
              icon: <MenuFont type={item.iconfont} />,
              children: item.children ? menuDataRender(item.children) : [],
            }
          : { ...item, children: item.children ? menuDataRender(item.children) : [] };
      return Authorized.check(item.authority, localItem, null) as MenuDataItem;
    });
  };

  const handleMenuCollapse = (payload: boolean): void => {
    if (dispatch) {
      dispatch({
        type: 'global/changeLayoutCollapsed',
        payload,
      });
    }
  }; // get children authority

  const disableScale = () => {
    document.addEventListener('touchstart', function (event) {
      if (event.touches.length > 1) {
        event.preventDefault();
      }
    });
    var lastTouchEnd = 0;
    document.addEventListener(
      'touchend',
      function (event) {
        var now = new Date().getTime();

        if (now - lastTouchEnd <= 300) {
          event.preventDefault();
        }

        lastTouchEnd = now;
      },
      false
    );
  };

  const authorized = getAuthorityFromRouter(props.route.routes, location.pathname || '/') || {
    authority: undefined,
  };
  Breadcrumb.defaultProps.separator = '>';
  return (
    <>
      <>
        <ProLayout // logo={logo}
          style={{
            background: 'blue',
          }}
          navTheme={settings.navTheme}
          headerTheme={settings.navTheme}
          logo={settings.titleIcon || logo}
          menuHeaderRender={(logoDom, titleDom) => (
            <Link to="/system/config">
              {logoDom}
              {titleDom}
            </Link>
          )} //menuHeaderRender={false}
          //设置collapse默认状态为什么不生效？目前通过effect实现
          onCollapse={handleMenuCollapse}
          menuItemRender={(menuItemProps, defaultDom) => {
            if (menuItemProps.isUrl || menuItemProps.children || !menuItemProps.path) {
              return defaultDom;
            }

            return <Link to={menuItemProps.path}>{defaultDom}</Link>;
          }} //菜单项渲染，但不生效??
          itemRender={(route, params, routes, paths) => {
            const first = routes.indexOf(route) === 0;
            return first ? (
              <Link to={paths.join('/')}>{route.breadcrumbName + ''}</Link>
            ) : (
              <span>{route.breadcrumbName + ''}</span>
            );
          }} //自定义面包屑的数据
          breadcrumbRender={(routers = []) => [
            {
              path: '/',
              breadcrumbName: '首页',
            },
            ...routers,
          ]}
          // footerRender={footerRender}
          menuDataRender={menuDataRender} // menuDataRender={()=>menuData}
          rightContentRender={() => <RightContent />}
          {...props}
          {...settings}
        >
          <Authorized authority={authorized!.authority} noMatch={noMatch}>
            {children}
          </Authorized>
        </ProLayout>
        {/* <SettingDrawer
           settings={settings}
           onSettingChange={config =>
             dispatch({
               type: 'settings/changeSetting',
               payload: config,
             })
           }
         /> */}
      </>
    </>
  );
};

let layoutContainer = connect(({ global, settings }: ConnectState) => ({
  collapsed: global.collapsed,
  settings,
}))(BasicLayout); // layoutContainer.componentDidMount = () =>{
//   disableScale();
// }

export default withRouter(layoutContainer);
