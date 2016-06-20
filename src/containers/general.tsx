/// <reference path="../../typings/browser.d.ts" />
import {Header, Button, Sidebar, SidebarItem, SidebarItems, NavigationBar, NavigationBarItem, ButtonSubmit, Portlet, Alert} from "../components/index";
export default React.createClass({
    render: function () {
        return (
            <Portlet title='提示'>
                <Alert.Close show={true} type='error'>错误测试测试测试测试测试测试测试</Alert.Close>
                <Alert.Error>错误样式</Alert.Error>
                </Portlet>
        )
    }
})
 