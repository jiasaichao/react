/// <reference path="../../typings/browser.d.ts" />
import {Common, Global} from "../utils/common";
import {Header, Button, Sidebar, NavigationBar, NavigationBarItem} from "../components/index";
import { Provider, connect} from 'react-redux';
interface IMainLayout extends React.Props<MainLayout> {
    sidebar: {
        active?:number;
        parent?:any[];
        child?:any[];
        open:(id)=>{};
    };
}
class MainLayout extends React.Component<IMainLayout, any>{
    render() {
        return (
            <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100%' }}>
                <Header>
                    <Button color={Global.colors.header} style={{ height: "100%", padding: "0 8px" }}>退出</Button>
                    </Header>
                <div style= {{ display: "flex", flex: '1' }} >
                    <div style= {{ width: "235px", display: 'flex', flexDirection: 'column' }}>
                        <Sidebar {...this.props.sidebar}>
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
const mapStateToProps = (state):IMainLayout => {
    return {
        sidebar:state.sidebar
    };
}
const mapDispatchToProps = (dispatch) => ({
    open: (id) => {
        dispatch({ type: 'sidebar-open',id });
    }
});

export default connect(mapStateToProps)(MainLayout);