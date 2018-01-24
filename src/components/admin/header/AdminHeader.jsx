import React from 'react'
import { Icon } from 'antd'
import { Link, withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

import imgLogo from 'src/assets/logo.png'
import './adminHeader.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

@withRouter
@inject('userStore', 'authStore')
@observer
export default class Sidebar extends React.Component {
  handleLogoutClick = () => {
    this.props.authStore.logout()
    this.props.history.replace('/')
  }

  render() {
    const { userStore } = this.props
    const avatar = (userStore.user && userStore.user.avatar) ? userStore.user.avatar : defaultAvatar
    return (
      <header styleName="header">
        <div styleName="logo-block">
          <Link to="/admin"><img src={imgLogo} alt="logo" /></Link>
          <button>
            {/* <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} /> */}
            <Icon type="menu-unfold" style={{ fontSize: '22px', color: '#3091e6' }} />
          </button>
        </div>
        <nav styleName="nav">
          <ul styleName="navbar">
            <Link to="/" styleName="nav-home-wrapper">
              <Icon styleName="nav-home" type="home" />
            </Link>
            <Link styleName="navbar-li" to="/">找需求</Link>
            <Link styleName="navbar-li" to="/">找老师</Link>
            <Link styleName="navbar-li" to="/">找学生</Link>
            <Link styleName="navbar-li" to="/">找团队</Link>
          </ul>
          <div styleName="header-right">
            <div styleName="header-profile">
              <img styleName="header-avatar" src={avatar} />
              {userStore.user && userStore.user.realName && <div styleName="header-username">{userStore.user.realName}</div>}
            </div>
            <div styleName="header-logout" onClick={this.handleLogoutClick}>退出登录</div>
          </div>
        </nav>
      </header>
    )
  }
}
