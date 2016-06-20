/// <reference path="../typings/browser.d.ts" />
import {createStore} from "redux"
let store = createStore(
    (state, action) => {
        switch (action.type) {
            case 'INCR':
                return { counter: state.counter + action.by };
            default:
                return state;
        }
    },
    {
        sidebar: [
            {
                id: 1, title: '用户界面功能',
                items: [
                    {
                        id: 11, title: '按钮',href:''
                    },
                    {
                        id: 12, title: '一般', href: '#/index/general'
                    },
                    {
                        id: 13, title: '表格', href: '#/index/table'
                    }
                ]
            },
            {
                id: 2, title: '首页2',
                items: [
                    {
                        id: 21, title: '按钮', href: ''
                    },
                    {
                        id: 22, title: '一般', href: ''
                    },
                    {
                        id: 23, title: '表格', href: ''
                    }
                ]
            },
            {
                id: 3, title: '首页3',
                items: [
                    {
                        id: 31, title: '按钮', href: ''
                    },
                    {
                        id: 32, title: '一般', href: ''
                    },
                    {
                        id: 33, title: '表格', href: ''
                    }
                ]
            }
        ]
    });
export {store}