/// <reference path="../../typings/browser.d.ts" />
import {Common, Global} from "../utils/common";
import {Header, Button, Sidebar, SidebarItem, SidebarItems, NavigationBar, NavigationBarItem} from "../components/index";
import { Provider, connect} from 'react-redux';
interface IMainLayout extends React.Props<MainLayout> {
    sidebar: any[];
}
class MainLayout extends React.Component<IMainLayout, any>{
    render() {
        let s = this.props.sidebar.map((value) => {
            let si = (value['items'] as any[]).map((items) => {
                return <SidebarItem lable={items.title}  key={items.id} href={items.href}></SidebarItem>;
            });
            return <SidebarItems lable={value.title} key={value.id}>{si}</SidebarItems>
        });
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
                <Header>
                    <Button color={Global.colors.header} style={{ height: "100%", padding: "0 8px" }}>退出</Button>
                    </Header>
                <div style= {{ display: "flex", flex: '1' }} >
                    <div style= {{ width: "235px", display: 'flex', flexDirection: 'column' }}>
                        <Sidebar>
                            {
                                s
/*<SidebarItems lable="用户界面功能" key={1}>
                                <SidebarItem lable="按钮"  key={11}></SidebarItem>
                                <SidebarItem lable="一般" href='#/index/general'  key={12}></SidebarItem>
                                <SidebarItem lable="表格" href='#/index/table'  key={13}></SidebarItem>
                            </SidebarItems>
                                <SidebarItems lable="首页2"  key={2}>
                                    <SidebarItem lable="首页111"  key={21}></SidebarItem>
                                    <SidebarItem lable="首页111"  key={22}></SidebarItem>
                                    <SidebarItem lable="首页111"  key={23}></SidebarItem>
                                    <SidebarItem lable="首页111"  key={24}></SidebarItem>
                                </SidebarItems>
                                <SidebarItems lable="首页3"  key={3}>
                                    <SidebarItem lable="首页111"  key={25}></SidebarItem>
                                    <SidebarItem lable="首页111"  key={26}></SidebarItem>
                                    <SidebarItem lable="首页111"  key={27}></SidebarItem>
                                </SidebarItems>*/}
                            </Sidebar>
                        </div>
                    <div style={{ flex: "1" }}>
                        <header style={Global.styles.create(Global.styles.czjz).o}>
                        <NavigationBar>
                            <NavigationBarItem lable="首页"></NavigationBarItem>
                            </NavigationBar>
                            </header>
                            {this.props.children}
                        </div>
                    </div>
                </div>
        )
    }
}
let mapStateToProps = (state) => {
    return state;
}

export default connect(mapStateToProps)(MainLayout);