// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'
import { Badge } from 'antd'

import './header.css'
import logo from 'src/assets/logo.png'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

@inject('userStore', 'authStore', 'searchStore', 'msgStore')
@observer
class Header extends React.Component {
  componentDidMount() {
    this.props.msgStore.dispatchGetCounts()
  }
  render() {
    const { userStore, authStore, searchStore, msgStore } = this.props
    const avatar = (userStore.user && userStore.user.avatar) ? userStore.user.avatar : defaultAvatar
    return (
      <header styleName="header">
        <div styleName="header-inner">
          <Link to="/"><img src={logo} /></Link>
          <nav styleName="header-nav">
            <Link styleName="header-navItem" to="/">首页</Link>
            <Link styleName="header-navItem" to="/search" onClick={() => { searchStore.setType('talent') }}>人才</Link>
            <Link styleName="header-navItem" to="/search" onClick={() => { searchStore.setType('project') }}>项目</Link>
            <Link styleName="header-navItem" to="/search" onClick={() => { searchStore.setType('ip') }}>知识产权</Link>
          </nav>
          {userStore.isLogin ? (
            <div styleName="header-right">
              <Link to="/admin" styleName="header-profile">
                <Badge dot={msgStore.hasMsg}>
                  <img styleName="header-avatar" src={avatar} />
                </Badge>
                {userStore.user && userStore.user.realName && <div styleName="header-username">{userStore.user.realName}</div>}
              </Link>
              <span styleName="separator" />
              <div styleName="header-logout" onClick={() => { authStore.logout() }}>登出</div>
            </div>
          ) : (
            <div styleName="header-right">
              <Link styleName="header-login" to="/login">登录</Link>
              <span styleName="separator" />
              <Link styleName="header-register" to="/register/1">注册</Link>
            </div>
          )}
        </div>
      </header>
    )
  }
}

export default Header
