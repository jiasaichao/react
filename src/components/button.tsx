/// <reference path="../../typings/browser.d.ts" />

// A '.tsx' file enables JSX support in the TypeScript compiler, 
// for more information see the following page on the TypeScript wiki:
// https://github.com/Microsoft/TypeScript/wiki/JSX
/**按钮*/
import {Common, Global} from "../utils/common";
/**当前状态*/
enum CurrentState {
    /**正常*/
    Normal = 1,
    /**选中*/
    Active,
    /**鼠标移上去*/
    Mouse
}
interface IButtonState {
    state: CurrentState;
}
interface IButtonProps extends React.Props<Button> {
    state?: CurrentState;
    color?: IColorState;
    /**样式*/
    style?: CSSProperties;
    onClick?: () => void;
    /**跳转链接地址，如果有此项则onClick则不会生效，如果做跳转有做其他事情则都写在onClick里*/
    href?: string
}
/**
 * 基本按钮
 */
class Button extends React.Component<IButtonProps, IButtonState> {
    constructor(props) {
        super(props);
        let state = this.props.state || CurrentState.Normal;
        
        this.state = { state: state };
    }
    render() {
        let click = () => { };
        if (typeof (this.props.href) != 'undefined') {
            click = () => {
                window.location.href = this.props.href;
            }
        }
        else {
            click = this.props.onClick;
        }
        let style = Common.prepareStyles({
            textDecoration: "none",
            display: "flex",
            alignItems:"center"
        });
        if (this.props.color){
            switch (this.state.state) {
                case CurrentState.Normal:
                    style.merge(this.props.color.Normal);
                    break;
                case CurrentState.Mouse:
                    style.merge(this.props.color.Mouse);
                    break;
                case CurrentState.Active:
                    style.merge(this.props.color.Active);
                    break;
            }
        }
        style.merge(this.props.style);

        return <a href="javascript:;" onClick={click } onMouseOver={this._handleMouseOver.bind(this) } onMouseOut={this._handleMouseOut.bind(this) }  style={style.o}>{this.props.children}</a>;
    }
    _handleMouseOver() {
        if (this.state.state!==CurrentState.Active) {
            this.setState({
            state: CurrentState.Mouse
        });
        }
        
    }
    _handleMouseOut() {
        if (this.state.state!==CurrentState.Active) {
            this.setState({
            state: CurrentState.Normal
        });
        }
    }
}
interface IButtonSubmitProps extends React.Props<ButtonSubmit> {
    /**样式*/
    style?: CSSProperties;
    onClick?: () => void;
    href?: string;
}
/**
 * 提交按钮，就是加了提交按钮的颜色
 */
class ButtonSubmit extends React.Component<IButtonSubmitProps, {}>{
    render() {
        return (
            <Button color={Global.colors.butonSubmit} href={this.props.href} onClick={this.props.onClick } style={this.props.style}>{this.props.children}</Button>  
        );
    }
}
/**
 * 关闭按钮，按钮中加了一个x关闭，点击后加入自定义事件
 */
class ButtonClose extends React.Component<{ /**点击事件*/handleOnClick: () => void }, {}>{
    render() {
        
        let styles = {
            normal: { color: '#cccccc', background: 'transparent' },
            mouse: { color: '#808080', background: 'transparent' },
            style: Global.styles.create()
        }
        styles.style.merge(Global.styles.absolute('15px','15px'));
        return (
            <div><Button style={styles.style.o} onClick={this.props.handleOnClick} color={{ Normal: styles.normal, Mouse: styles.mouse, Active: styles.normal }}><span className='icon-corss'></span></Button></div>
            );
    }
}
export {Button}
export {ButtonSubmit}
export {ButtonClose}