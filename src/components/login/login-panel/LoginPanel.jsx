// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'
import { withRouter, Link } from 'react-router-dom'
import { message } from 'antd'

import './loginPanel.css'
import imgQ from './ico_q.png'

@inject('authStore')
@withRouter
@observer
export default class LoginPanel extends React.Component {
  handleSubmit = async (e) => {
    e.preventDefault()
    try {
      await this.props.authStore.login()
      message.success('登录成功')
      this.props.history.replace('/')
    } catch (err) {
      if (err.response) {
        const status = err.response.status
        if (status === 401 || status === 404) {
          message.error('用户名或密码错误')
        }
      } else {
        console.error('login err', err)
      }
    }
  }

  render() {
    const { authStore } = this.props
    const wrongInfo = false
    const { username, password } = authStore
    return (
      <div styleName="loginPanel-container">
        <header styleName="loginPanel-header">
          <div styleName="header-title">用户登录</div>
          <div styleName="header-pwd">
            <Link to="/forget-pwd">忘记密码</Link>
            <img styleName="ico-q" src={imgQ} />
          </div>
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
              <Link to="/register/1"><button styleName="registerBtn" type="button">注册账号&nbsp;<i styleName="ico-arrow" /></button></Link>
            </div>
          </form>
        </div>
      </div>
    )
  }
}
