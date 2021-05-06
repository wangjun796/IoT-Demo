/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:31:40
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-24 13:45:37
 */
import React from "react";
import UserTenant from "@/pages/system/tenant/userIndex";
import Detail from "@/pages/system/tenant/detail";
import Analysis from "@/pages/analysis";

interface Props {
}

class Tenant extends React.Component<Props> {
  constructor(props:any){
    super(props);
    mydebug("Tenant counstructor called");
    mydebug(props);
  }

  render() {
    mydebug("Tenant render called");
    const render = () => {

      const tenant = localStorage.getItem('hsweb-autz');
      try {

        let tenantsList: any[] = JSON.parse(tenant as string).user.tenants;

       /* if (tenantsList.length > 0) {
          alert(tenantsList.length );
          return tenantsList.map((item: any) => {

            if (item.mainTenant && item.adminMember) {
            alert(4);
              return <Detail location={
                {
                  pathname: `/apis/tenant/detail/${item.tenantId}`,
                  search: '',
                  hash: "",
                  query: {},
                  state: undefined,
                }
              }/>
            } else {
              alert(6);
              return <Analysis/>
            }
          })
        }
        else*/
        {
          return <UserTenant/>
        }
      } catch (error) {
        return false;
      }
    };
    return render();
  }
}

export default Tenant;
