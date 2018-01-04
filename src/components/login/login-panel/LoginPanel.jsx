// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import './loginPanel.css'
import imgQ from './ico_q.png'

@inject('authStore')
@withRouter
@observer
export default class LoginPanel extends React.Component {
  handleSubmit = (e) => {
    e.preventDefault()
    this.props.authStore.login().then(() => {
      this.props.history.replace('/')
    })
  }

  render() {
    const { authStore } = this.props
    const wrongInfo = true
    const { username, password } = authStore
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
          <form styleName="loginForm" onSubmit={this.handleSubmit}>
            <div styleName="userIpt-wrapper">
              <input
                styleName="loginForm-ipt"
                value={username}
                onChange={(e) => { authStore.setUsername(e.target.value) }}
                placeholder="手机/邮箱"
              />
            </div>
            <div styleName="pwdIpt-wrapper">
              <input
                type="password"
                styleName="loginForm-ipt"
                value={password}
                onChange={(e) => { authStore.setPassword(e.target.value) }}
                placeholder="密码"
              />
            </div>
            <div>
              <button styleName="loginBtn" type="submit">登 录</button>
              <button styleName="registerBtn">注册账号&nbsp;<i styleName="ico-arrow" /></button>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
