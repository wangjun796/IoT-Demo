/*
 * @Description:
 * @version: 1.0
 * @Company: DMT
 * @Author: wangj
 * @Date: 2021-01-08 16:25:00
 * @LastEditor: wangj
 * @LastEditTime: 2021-03-17 09:32:08
 */
import { getAccessToken } from "@/utils/authority";
import { Observable } from "rxjs";
import { } from "rxjs/operators";
import { message, notification } from "antd";
import {EMPTY} from "@/../config/globalConfig"
import globalConfig from "@/../config/globalConfig"

let ws: WebSocket | undefined;
let count = 0;
const subs = {};
let timer: any = {};
const initWebSocket = () => {
    clearInterval(timer);
    const wsUrl = `${document.location.protocol.replace('http', 'ws')}//${document.location.host}/${globalConfig.apiPrefix}/messaging/${getAccessToken()}?:X_Access_Token=${getAccessToken()}`;
    if (!ws && count < 5) {
        try {
            count += 1;
            ws = new WebSocket(wsUrl);
            ws.onclose = () => {
                ws = undefined;
                setTimeout(initWebSocket, 5000 * count);//auto connect, retry not more than 5 times
            }
            ws.onmessage = (msg: any) => {

                const data = JSON.parse(msg.data);
                if (data.type === 'error') {
                    notification.error({ key: 'wserr', message: data.message });
                }
                if (subs[data.requestId]) {
                    if (data.type === 'complete') {
                        subs[data.requestId].forEach((element: any) => {
                            element.complete();
                        });;
                    } else if (data.type === 'result') {
                        subs[data.requestId].forEach((element: any) => {
                            element.next(data)
                        });;
                    }
                }
            }
        } catch (error) {
            setTimeout(initWebSocket, 5000 * count);
        }
    }
    timer = setInterval(() => {
        try {
            (ws?.readyState === 1)? ws?.send(JSON.stringify({ "type": "ping" })) : EMPTY();
        } catch (error) {
            console.error(error, '发送心跳错误');
        }
    }, globalConfig?.keepalive);
    return ws;
}
// readyState == 1 indicates that the connection is established and communication is possible.
const getWebsocket = (id: string, topic: string, parameter: any): Observable<any> =>
    new Observable<any>(subscriber => {
        if (!subs[id]) {
            subs[id] = [];
        }
        subs[id].push({
            next: (val: any) => {
                subscriber.next(val);
            },
            complete: () => {
                subscriber.complete();
            },
            error:() => {
                subscriber?.error?.apply(subscriber);
            }
            // error: function(){
            //     subscriber?.error?.apply(subscriber,...arguments);
            // }
        });//没有直接关联observer，而是在ws onmessage中全局处理next
        const msg = JSON.stringify({ id, topic, parameter, type: 'sub' });
        const thisWs = initWebSocket();
        const tempQueue: any[] = [];

        if (thisWs) {
            try {
                if (thisWs.readyState === 1) {
                    thisWs.send(msg);//ws maybe reconnect ,must send 'sub' ervery new subscribe
                } else {
                    tempQueue.push(msg);
                }

                if (tempQueue.length > 0 && thisWs.readyState === 1) {
                    tempQueue.forEach((i: any, index: number) => {
                        thisWs.send(i);
                        tempQueue.splice(index, 1);
                    });
                }
            } catch (error) {
                initWebSocket();
                message.error({ key: 'ws', content: 'websocket服务连接失败' });
            }
        }

        return () => {
            const unsub = JSON.stringify({ id, type: "unsub" });
            delete subs[id];
            if (thisWs) {
                thisWs.send(unsub);
            }
        }
    });
export { getWebsocket, initWebSocket };
