import React from 'react'
import { Icon } from 'antd'
import { Link } from 'react-router-dom'
import imgLogo from 'src/assets/logo.png'
import './adminHeader.css'

export default class Sidebar extends React.Component {
  render() {
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
        </nav>
      </header>
    )
  }
}
