/// <reference path="../../typings/browser.d.ts" />
import {Common, Global} from "../utils/common";
import {Button} from "./button";
interface IPSidebar extends React.Props<Sidebar> {
}
interface ISSidebar {
    /**选中项key*/
    active?: number,
}
class Sidebar extends React.Component<IPSidebar, ISSidebar>{
    // static defaultProps = { maxId: 0 }
    maxId = 0;
    constructor(props: IPSidebar) {
        super(props);
        this.state = { active: 0 };
    }
    render() {
        let self = this;
        var children = this.props.children;
        let childrenElements = React.Children.map(children, function (el: React.ReactElement<IPSidebarItems>, index) {
            if ((el.type as any).name === "SidebarItems") {
                let i = React.cloneElement(el, { key: el.key, lable: el.props.lable });
                return i;
            }
        });
        return <div style={{ height: "100%",flex:'1', background: Global.colors.bgSidebar, fontSize:'14px' }}>
                <ul>
                    {childrenElements}
                </ul>
            </div>;
    }
}

interface IPSidebarItems extends React.Props<SidebarItems> {
    lable: string;
}
interface ISSidebarItems {
    /**是否展开*/
    open?: boolean,
}
class SidebarItems extends React.Component<IPSidebarItems, ISSidebarItems>{
    /**高度*/
    height = -1;
    constructor(props) {
        super(props);
        this.state = { open: false };
    }
    render() {
        
        let styles = {
            children: Common.prepareStyles({
                transition: "height .3s",
                display: "block",
                overflow:"hidden"
            })
        };
        let chevronName: string;
        let self = this;
        let children = this.props.children;

        let childrenElements = React.Children.map(children, function (el: React.ReactElement<ISidebarItem>, index) {
            if ((el.type as any).name === "SidebarItem") {
                return <SidebarItem lable={el.props.lable} key={el.key } href={el.props.href}>
                    </SidebarItem>;
            }
        });
        if (this.state.open) {
            if (this.height !== -1) {
                styles.children.merge({ height: this.height });
            }
            //styles.children.merge({ height: (this.refs["aaaac"] as Element).clientHeight });
            chevronName = "icon-chevron-down";
        }
        else {
            if (this.height !== -1) {
                styles.children.merge({ height: 0 });
            }
            chevronName = "icon-chevron-left";
        }
        /**子元素*/
        let i: JSX.Element;
        if (childrenElements) {
            i = <ul style={styles.children.o} ref="aaaac">{childrenElements}</ul>;
        }
        return <li style={{ borderBottom:"1px solid #3D4957" }}>
                    <Button onClick={this.handleOnClick.bind(this)} color={Global.colors.sidebar} style={{ height: 41, paddingLeft: Global.padding, justifyContent: "space-between" }}>
                    {this.props.lable}
                    <span style={{ fontSize: "14px", color: "#fff", marginRight: 20 }} className={chevronName}></span>
                    </Button>
                    {i}
                </li>
    }
    componentDidMount() {
        this.height = (this.refs["aaaac"] as Element).clientHeight;
        this.setState({ open: this.state.open });
    }
    handleOnClick() {
        this.setState({ open: !this.state.open });
    }
}

interface ISidebarItem extends React.Props<SidebarItem> {
    lable: string;
    href?: string;
}
class SidebarItem extends React.Component<ISidebarItem, {}>{
    render() {
        return <li>
            <Button color={Global.colors.sidebar} href={this.props.href} style={{ height: 31, paddingLeft: 43 }}>{this.props.lable}</Button>
            </li>
    }
}

export {Sidebar}
export {SidebarItems}
export {SidebarItem}