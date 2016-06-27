/// <reference path="../typings/browser.d.ts" />
import {createStore,applyMiddleware } from "redux"
import { routerMiddleware, push } from 'react-router-redux'
import { Router, Route, browserHistory } from 'react-router'
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
                id: 2, pid: 1, title: '一般', href: '/index/general'
            },
            {
                id: 3, pid: 1, title: '表格', href: '/index/table'
            },
            {
                id: 4, pid: 2, title: '一般', href: '/index/general'
            },
            {
                id: 5, pid: 2, title: '表格', href: '/index/table'
            },
            {
                id: 6, pid: 2, title: '一般', href: '/index/general'
            },
            {
                id: 7, pid: 3, title: '表格', href: '/index/table'
            },
            {
                id: 8, pid: 3, title: '一般', href: '/index/general'
            },
            {
                id: 9, pid: 3, title: '表格', href: '/index/table'
            }
        ]
    }
};
const middleware = routerMiddleware(browserHistory)

let store = createStore(
    (state, action) => {
        applyMiddleware(middleware);
        switch (action.type) {
            case 'sidebar-open':
                let r = _.cloneDeep(state);
                //console.log("state:"+(state.sidebar.parent as any[]).filter(x=>x.id==action.id)[0].open);
                //console.log("r:"+(r.sidebar.parent as any[]).filter(x=>x.id==action.id)[0].open);
                let prant = (r.sidebar.parent as any[]).filter(x => x.id == action.id)[0];
                prant.open = !prant.open;
                //console.log("stateed:" + (state.sidebar.parent as any[]).filter(x => x.id == action.id)[0].open);
                //console.log("red:" + (r.sidebar.parent as any[]).filter(x => x.id == action.id)[0].open);
                return r;
            case 'sidebar-active':
                let r2 = _.cloneDeep(state);
                r2.sidebar.active=action.id;
                return r2;
            case 'url':
            console.log('页面跳转：'+action.url);
                store.dispatch(push(action.url))
                return state;
            default:
                return state;
        };        
    },
    defaultState);
export {store}