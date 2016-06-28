/// <reference path="../typings/browser.d.ts" />
import { Provider } from 'react-redux';
import { IndexRoute, Router, Route, hashHistory, browserHistory } from 'react-router';
import { syncHistoryWithStore, routerReducer} from 'react-router-redux'
import App from "./app";
import Button from "./containers/button";
import Login from "./containers/login";
import MainLayout from "./containers/mainlayout";
import General from "./containers/general";
import TableView from "./containers/tableview";
//import Modeules from './controller/index';
//import {BaseStore} from './redux/store/BaseStore';
//import URL_CONFIG from './routersConfig';
//const store = BaseStore();
import {store} from './store';
const history = syncHistoryWithStore(hashHistory, store);
//store.subscribe(()=>{console.log('改变了')})
let appRootComponent = (
    <Provider store = {store}>
         <Router history={history}>
        <Route path="/" component={App}>
            <IndexRoute component={Login} />
            <Route path="/index" component={MainLayout}>
                <IndexRoute component={Button} />
                <Route path='general' component={General} />
                <Route path='table' component={TableView} />
                </Route>
            </Route>
             </Router>
        </Provider>
)

export default appRootComponent;
