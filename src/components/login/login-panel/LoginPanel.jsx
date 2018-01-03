import React from 'react'
import './loginPanel.css'
import imgQ from './ico_q.png'

export default class LoginPanel extends React.Component<{}> {
  render() {
    const wrongInfo = true
    return (
      <div styleName="loginPanel-container">
        <header styleName="loginPanel-header">
          <div styleName="header-title">用户登录</div>
          <div styleName="header-pwd">忘记密码<img styleName="ico-q" src={imgQ} /></div>
        </header>
        <div styleName="loginForm-wrapper">
          {wrongInfo && (
            <div styleName="login-alert">登陆失败，用户名或密码有误</div>
          )}
          <form styleName="loginForm" onSubmit={(e) => e.preventDefault()}>
            <div styleName="userIpt-wrapper">
              <input styleName="loginForm-ipt" placeholder="用户" />
            </div>
            <div styleName="pwdIpt-wrapper">
              <input type="password" styleName="loginForm-ipt" placeholder="密码" />
            </div>
            <div>
              <button styleName="loginBtn">登 录</button>
              <button styleName="registerBtn">注册账号&nbsp;<i styleName="ico-arrow" /></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
