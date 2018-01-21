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
          <div />
        </nav>
      </header>
    )
  }
}
