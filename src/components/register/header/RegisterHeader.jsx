import React from 'react'
import { Link } from 'react-router-dom'
import './registerHeader.css'
import imgLogo from 'src/assets/logo.png'

export default class RegisterHeader extends React.Component<{}> {
  render() {
    return (
      <header styleName="header">
        <div styleName="left">
          <Link to="/">
            <img src={imgLogo} />
          </Link>
          <span styleName="title">| 用户注册</span>
        </div>
        <div styleName="right">
          <span styleName="login">已有账号，<Link to="/login" styleName="btn-link">点击登录</Link></span>
          <span styleName="separator" />
          <Link styleName="btn-link" to="/">返回首页</Link>
        </div>
      </header>
    )
  }
}
