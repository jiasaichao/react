import {combineReducers} from 'redux';
/**
 * 将路由跳转注定到全局
 */
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'
import sidebar from './sidebarReducer';

/**
 * 合并reducers
 */
const index = combineReducers({
  sidebar,
  routing: routerReducer
})

export default index;