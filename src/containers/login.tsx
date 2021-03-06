﻿/// <reference path="../../typings/browser.d.ts" />
import {Common, Global} from "../utils/common";
import {Button, ButtonSubmit} from "../components/button";
import {Alert} from "../components/alert";
import { Provider, connect} from 'react-redux';
let SL = Global.styles;
let CL = Global.colors;
class Login extends React.Component<any, any> {
    render() {
        let styles = {
            input:{ background: '#dde3ec', height: 43, color: '#8290a3', border: '1px solid #dde3ec',marginTop:10,width:'100%',paddingLeft:10 }
        }
        return (
            <div style={SL.create({
                height: '100%', background: Global.colors.mainBackground
            }).merge(SL.spjzcolumn).o}>
                <div style={SL.create({ marginTop: 100, background: '#fff', width: 400, padding: '10px 30px' }).merge(SL.spjzcolumn).o}>
                    <h2 style={{ color: CL.mainActive, fontSize: 28, margin: '20px 0 25p 0', lineHeight: '50px' }}>登录</h2>
                    <Alert.Close show={true} type='success'>警告111</Alert.Close>
                    <input placeholder='Username' style={styles.input} />
                    <input placeholder='Password' style={styles.input} />
                    <ButtonSubmit style={{ padding: '10px 20px', marginTop: 10 }} onClick={this.Submit}>登录</ButtonSubmit>
                </div>
            </div>
        );
    }
    Submit() {
        window.location.href = "#index";
        //alert("提交成功")
    }
}
let mapStateToProps = (state) => {
    return {
        state
    }
}

export default connect(mapStateToProps)(Login);