/// <reference path="../../typings/browser.d.ts" />
import {Common, Global,Colors} from "../utils/common";
import {Button} from "./button";
interface IPSidebar extends React.Props<Sidebar> {
    active?:number;
    parent?:any[];
    child?:any[];
    open:(id)=>void;
}
interface ISSidebar {
    /**选中项key*/
    //active?: number,
}
class Sidebar extends React.Component<IPSidebar, ISSidebar>{
    // static defaultProps = { maxId: 0 }
    maxId = 0;
    constructor(props: IPSidebar) {
        super(props);
        //this.state = { active: 0 };
    }
    render() {
        let self = this;
        //let active=this.props.active||this.props.items[0].id;
        let s = this.props.parent.map((value,index) => {
            let active=false;
            let si = _.filter(this.props.child,{pid:value.id}).map((items,itemsIndex) => {
                if (items.id===this.props.active) {
                    active=true;
                }
                return <SidebarItem lable={items.title} active={items.id===this.props.active}  key={items.id} href={items.href}></SidebarItem>;
            });
            return <SidebarItems lable={value.title} active={active} open={value.open} key={value.id} handleOnClick={()=>this.props.open(value.id)}>{si}</SidebarItems>
        });
        // var children = this.props.children;
        // let childrenElements = React.Children.map(children, function (el: React.ReactElement<IPSidebarItems>, index) {
        //     if ((el.type as any).name === "SidebarItems") {
        //         let i = React.cloneElement(el, { key: el.key, lable: el.props.lable });
        //         return i;
        //     }
        // });
        return <div style={{ height: "100%",flex:'1', background: Global.colors.bgSidebar, fontSize:'14px' }}>
                <ul>
                    {s}
                </ul>
            </div>;
    }
}

interface IPSidebarItems extends React.Props<SidebarItems> {
    /**显示的文字 */
    lable: string;
    /**是否展开,默认false*/
    open?:boolean;
    /**是否是选中项，默认false */
    active?:boolean;
    handleOnClick:()=>void;
}
interface ISSidebarItems {
    /**是否展开*/
    open?: boolean;
    /**是否是选中项，默认false */
    active?:boolean;
}
class SidebarItems extends React.Component<IPSidebarItems, ISSidebarItems>{
    /**高度*/
    height = -1;
    constructor(props) {
        super(props);
        this.state = { 
            open: this.props.open||false,
            active:this.props.active||false
             };
    }
    render() {
        let styles = {
            children: Common.prepareStyles({
                transition: "height .3s",
                display: "block",
                overflow:"hidden"
            }),
            showButton:Common.prepareStyles({ height: 41, paddingLeft: Global.padding, justifyContent: "space-between" })
        };
        if (this.state.active) {
        }
        else{
            if (this.state.open) {
            styles.showButton.merge({
                background:Colors.bgSidebarMouse,
                color:Colors.fontSidebarMouse
            });
            }
        }
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
                    <Button onClick={this.props.handleOnClick.bind(this)} state={this.state.active?2:1} color={Global.colors.sidebar} style={styles.showButton.o}>
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
    // handleOnClick() {
    //     this.setState({ open: !this.state.open });
    // }
    // handleActive=()=>{
    //     this.setState({active:true});
    // }
}

interface ISidebarItem extends React.Props<SidebarItem> {
    lable: string;
    href?: string;
    active?:boolean;
}
class SidebarItem extends React.Component<ISidebarItem, {}>{
    render() {
        let href=this.props.href||'javascript:;';
        let styles = {
            style:Common.prepareStyles({ height: 31, paddingLeft: 43 })
        }
        if (this.props.active) {
            styles.style.merge(Global.colors.sidebaritem.Active);
        }
        return (
            <li>
                <Button color={Global.colors.sidebaritem} href={href} style={styles.style.o}>{this.props.lable}</Button>
            </li>
        );
    }
}

export {Sidebar}
// export {SidebarItems}
// export {SidebarItem}