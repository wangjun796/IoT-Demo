const items = [
  {
    title: '通用',
    key: 'start',
    items: [
      {
        id: '2',
        type: 'node',
        size: '72*72',
        shape: 'flow-circle',

        src:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAiIGhlaWdodD0iODAiIAogICAgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiAKICAgIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIj4KICAgIDxkZWZzPgogICAgICAgIDxjaXJjbGUgaWQ9ImIiIGN4PSIzNiIgY3k9IjM2IiByPSIzNiIvPgogICAgICAgIDxmaWx0ZXIgeD0iLTkuNyUiIHk9Ii02LjklIiB3aWR0aD0iMTE5LjQlIiBoZWlnaHQ9IjExOS40JSIgZmlsdGVyVW5pdHM9Im9iamVjdEJvdW5kaW5nQm94IiBpZD0iYSI+CiAgICAgICAgICAgIDxmZU9mZnNldCBkeT0iMiIgaW49IlNvdXJjZUFscGhhIiByZXN1bHQ9InNoYWRvd09mZnNldE91dGVyMSIvPgogICAgICAgICAgICA8ZmVHYXVzc2lhbkJsdXIgc3RkRGV2aWF0aW9uPSIyIiBpbj0ic2hhZG93T2Zmc2V0T3V0ZXIxIiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29tcG9zaXRlIGluPSJzaGFkb3dCbHVyT3V0ZXIxIiBpbjI9IlNvdXJjZUFscGhhIiBvcGVyYXRvcj0ib3V0IiByZXN1bHQ9InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICAgICAgPGZlQ29sb3JNYXRyaXggdmFsdWVzPSIwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwLjA0IDAiIGluPSJzaGFkb3dCbHVyT3V0ZXIxIi8+CiAgICAgICAgPC9maWx0ZXI+CiAgICA8L2RlZnM+CiAgICA8ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPgogICAgICAgIDxnIHRyYW5zZm9ybT0idHJhbnNsYXRlKDQgMikiPgogICAgICAgICAgICA8dXNlIGZpbGw9IiMwMDAiIGZpbHRlcj0idXJsKCNhKSIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICAgICAgPHVzZSBmaWxsLW9wYWNpdHk9Ii45MiIgZmlsbD0iI0ZGRjJFOCIgeGxpbms6aHJlZj0iI2IiLz4KICAgICAgICAgICAgPGNpcmNsZSBzdHJva2U9IiNGRkMwNjkiIGN4PSIzNiIgY3k9IjM2IiByPSIzNS41Ii8+CiAgICAgICAgPC9nPgogICAgICAgIDx0ZXh0IGZvbnQtZmFtaWx5PSJQaW5nRmFuZ1NDLVJlZ3VsYXIsIFBpbmdGYW5nIFNDIiBmb250LXNpemU9IjEyIiBmaWxsPSIjMDAwIiBmaWxsLW9wYWNpdHk9Ii42NSIgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx0c3BhbiB4PSIxOCIgeT0iNDEiPuWumuaXtuWZqDwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=',
        model: {
          color: '#dfa170',
          shape: 'capsule',
          label: '定时器',
          executor: 'timer',
          style: {
            fill: '#dfa170', // 填充背景
          },
          // size: [720, 720],
        },

      },
      {
        id: '6',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM5IiB5PSIyOSI+6YCaICAg55+lPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '通  知',
          executor: 'notifier',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      // {
      //     "id": "3",
      //     "type": "node",
      //     "size": "120*48",
      //     "shape": "flow-rect",
      //     "src": "data:image/svg+xml;base64," +
      //     "PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+U3ByaW5nIEV2ZW50PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg=="
      //     ,
      //     "model": {
      //         "color": "#1890FF",
      //         "label": "Spring Event",
      //         "executor": "spring-event"
      //     }
      // },
      {
        id: '3',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          '' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjMwIiB5PSIyOSI+5raI5oGv572R5YWzPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '消息网关',
          executor: 'message-gateway',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      {
        id: '4',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM5IiB5PSIyOSI+6LevICAg55SxPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '路由',
          executor: 'route',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
    ],
  },
  {
    title: '设备相关',
    key: 'device',
    items: [
      // {
      //     "id": "3",
      //     "type": "node",
      //     "size": "120*48",
      //     "shape": "flow-rect",
      //     "src": "data:image/svg+xml;base64," +
      //         "PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI0IiB5PSIyOSI+5o6l5pS26K6+5aSH5raI5oGvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg=="
      //     ,
      //     "model": {
      //         "color": "#1890FF",
      //         "label": "接收设备消息",
      //         "executor": "device-message-consumer"
      //     }
      // },
      {
        id: '3',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+5pON5L2c6K6+5aSHPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '操作设备',
          executor: 'device-operation',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
    ],
  },
  {
    title: '输入输出',
    key: 'io',
    items: [
      {
        id: '4',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+TVFUVOWuouaIt+errzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=',
        model: {
          color: '#1890FF',
          label: 'MQTT客户端',
          executor: 'mqtt-client',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      {
        id: '4',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+Q29BUOWuouaIt+errzwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=',
        model: {
          color: '#1890FF',
          label: 'CoAP客户端',
          executor: 'coap-client',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      {
        id: '4',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+VENQ5a6i5oi356uvPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: 'TCP客户端',
          executor: 'tcp-client',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      // {
      //     "id": "6",
      //     "type": "node",
      //     "size": "120*48",
      //     "shape": "flow-rect",
      //     "src": "data:image/svg+xml;base64," +
      //         "PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+VURQ5pSv5oyBPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg=="
      //     ,
      //     "model": {
      //         "color": "#1890FF",
      //         "label": "UDP支持",
      //         "executor": "udp-support"
      //     }
      // },
      {
        id: '7',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI2IiB5PSIyOSI+d2Vic29ja2V0PC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: 'websocket',
          executor: 'websocket-client',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },

      {
        id: '7',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjI5IiB5PSIyOSI+SFRUUOivt+axgjwvdHNwYW4+CiAgICAgICAgPC90ZXh0PgogICAgPC9nPgo8L3N2Zz4=',
        model: {
          color: '#1890FF',
          label: 'HTTP请求',
          executor: 'http-client',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      {
        id: '6',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,' +
          'PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjY2RlZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjMyIiB5PSIyOSI+5omn6KGMU1FMPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '执行SQL',
          executor: 'sql',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
    ],
  },
  {
    title: '转换',
    key: 'mapping',
    items: [
      {
        id: '4',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM1IiB5PSIyOSI+CiAgICAgICAgICAgICAgICDlrZfmrrXovazmjaIKICAgICAgICAgICAgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==',
        model: {
          color: '#1890FF',
          label: '字段转换',
          executor: 'data-mapping',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
      {
        id: '5',
        type: 'node',
        size: '120*48',
        shape: 'flow-rect',
        src:
          'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjRTZGN0ZGIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM1IiB5PSIyOSI+CiAgICAgICAgICAgICAgIOWKqOaAgeiEmuacrAogICAgICAgICAgICA8L3RzcGFuPgogICAgICAgIDwvdGV4dD4KICAgIDwvZz4KPC9zdmc+',
        model: {
          color: '#1890FF',
          label: '动态脚本',
          executor: 'script',
          style: {
            fill: '#1890FF', // 填充背景
          },
        },
      },
    ],
  },
  // {
  //     "title": "通知",
  //     "key": "send",
  //     "items": [
  //         {
  //             "id": "6",
  //             "type": "node",
  //             "size": "120*48",
  //             "shape": "flow-rect",//b3e7ff
  //             "src": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjYjNlN2ZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM1IiB5PSIyOSI+CiAgICAgICAgICAgICAgICDpgq7ku7bpgJrnn6UKICAgICAgICAgICAgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==",
  //             "model": {
  //                 "color": "#1890FF",
  //                 "label": "邮件通知",
  //                 "executor": "email-sender"
  //             }
  //         },
  //         {
  //             "id": "6",
  //             "type": "node",
  //             "size": "120*48",
  //             "shape": "flow-rect",//b3e7ff
  //             "src": "data:image/svg+xml;base64," +
  //                 "PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjYjNlN2ZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM1IiB5PSIyOSI+CiAgICAgICAgICAgICAgICDnn63kv6HpgJrnn6UKICAgICAgICAgICAgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg=="
  //                 ,
  //             "model": {
  //                 "color": "#1890FF",
  //                 "label": "短信通知",
  //                 "executor": "sms-sender"
  //             }
  //         }
  //     ]
  // },
  // {
  //     "title": "控制",
  //     "key": "restrict",
  //     "items": [{
  //         "id": "6",
  //         "type": "node",
  //         "size": "120*48",
  //         "shape": "flow-rect",
  //         "src": "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTI4IiBoZWlnaHQ9IjU2IiAKICAgIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgCiAgICB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+CiAgICA8ZGVmcz4KICAgICAgICA8cmVjdCBpZD0iYiIgeD0iMCIgeT0iMCIgd2lkdGg9IjEyMCIgaGVpZ2h0PSI0OCIgcng9IjQiLz4KICAgICAgICA8ZmlsdGVyIHg9Ii04LjglIiB5PSItMTAuNCUiIHdpZHRoPSIxMTcuNSUiIGhlaWdodD0iMTI5LjIlIiBmaWx0ZXJVbml0cz0ib2JqZWN0Qm91bmRpbmdCb3giIGlkPSJhIj4KICAgICAgICAgICAgPGZlT2Zmc2V0IGR5PSIyIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+CiAgICAgICAgICAgIDxmZUdhdXNzaWFuQmx1ciBzdGREZXZpYXRpb249IjIiIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb21wb3NpdGUgaW49InNoYWRvd0JsdXJPdXRlcjEiIGluMj0iU291cmNlQWxwaGEiIG9wZXJhdG9yPSJvdXQiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIvPgogICAgICAgICAgICA8ZmVDb2xvck1hdHJpeCB2YWx1ZXM9IjAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAgMCAwIDAuMDQgMCIgaW49InNoYWRvd0JsdXJPdXRlcjEiLz4KICAgICAgICA8L2ZpbHRlcj4KICAgIDwvZGVmcz4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPGcgdHJhbnNmb3JtPSJ0cmFuc2xhdGUoNCAyKSI+CiAgICAgICAgICAgIDx1c2UgZmlsbD0iIzAwMCIgZmlsdGVyPSJ1cmwoI2EpIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8dXNlIGZpbGwtb3BhY2l0eT0iLjkyIiBmaWxsPSIjOWFkZmZmIiB4bGluazpocmVmPSIjYiIvPgogICAgICAgICAgICA8cmVjdCBzdHJva2U9IiMxODkwRkYiIHg9Ii41IiB5PSIuNSIgd2lkdGg9IjExOSIgaGVpZ2h0PSI0NyIgcng9IjQiLz4KICAgICAgICA8L2c+CiAgICAgICAgPHRleHQgZm9udC1mYW1pbHk9IlBpbmdGYW5nU0MtUmVndWxhciwgUGluZ0ZhbmcgU0MiIGZvbnQtc2l6ZT0iMTIiIGZpbGw9IiMwMDAiIGZpbGwtb3BhY2l0eT0iLjY1IiB0cmFuc2Zvcm09InRyYW5zbGF0ZSg0IDIpIj4KICAgICAgICAgICAgPHRzcGFuIHg9IjM1IiB5PSIyOSI+CiAgICAgICAgICAgICAgICDkuovku7bpmZDmtYEKICAgICAgICAgICAgPC90c3Bhbj4KICAgICAgICA8L3RleHQ+CiAgICA8L2c+Cjwvc3ZnPg==",
  //         "model": {
  //             "color": "#1890FF",
  //             "label": "限流",
  //             "executor": "event-restrict"
  //         }
  //     }]
  // }
];

export default items;
