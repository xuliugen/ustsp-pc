// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './header.css'
import logo from 'src/assets/logo.png'
import avatar from 'src/assets/avatar1.png'

class Header extends React.PureComponent<{}> {
  render() {
    let isLogin = false
    return (
      <header styleName="header">
        <div styleName="header-inner">
          <a href="/"><img src={logo} /></a>
          <nav styleName="header-nav">
            <Link styleName="header-navItem" to="/">首页</Link>
            <Link styleName="header-navItem" to="/">人才</Link>
            <Link styleName="header-navItem" to="/">项目</Link>
            <Link styleName="header-navItem" to="/">知识产权</Link>
          </nav>
          {isLogin ? (
            <div styleName="header-right">
              <div styleName="header-profile">
                <img styleName="header-avatar" src={avatar} />
                <div styleName="header-username">张老师</div>
              </div>
              <span styleName="separator" />
              <div styleName="header-logout">登出</div>
            </div>
          ) : (
            <div styleName="header-right">
              <Link styleName="header-login" to="/login">登录</Link>
              <span styleName="separator" />
              <Link styleName="header-register" to="/register">注册</Link>
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default Header
