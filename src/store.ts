/// <reference path="../typings/browser.d.ts" />
import {createStore} from "redux"
var defaultState = {
    sidebar: {
        active: 1,
        parent: [
            {
                id: 1, title: '用户界面功能', open: true
            },
            {
                id: 2, title: '首页2'
            },
            {
                id: 3, title: '首页3'
            }
        ],
        child: [
            {
                id: 1, pid: 1, title: '按钮', href: ''
            },
            {
                id: 2, pid: 1, title: '一般', href: '#/index/general'
            },
            {
                id: 3, pid: 1, title: '表格', href: '#/index/table'
            },
            {
                id: 4, pid: 2, title: '一般', href: '#/index/general'
            },
            {
                id: 5, pid: 2, title: '表格', href: '#/index/table'
            },
            {
                id: 6, pid: 2, title: '一般', href: '#/index/general'
            },
            {
                id: 7, pid: 3, title: '表格', href: '#/index/table'
            },
            {
                id: 8, pid: 3, title: '一般', href: '#/index/general'
            },
            {
                id: 9, pid: 3, title: '表格', href: '#/index/table'
            }
        ]
    }
};
let store = createStore(
    (state, action) => {
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    defaultState);
export {store}