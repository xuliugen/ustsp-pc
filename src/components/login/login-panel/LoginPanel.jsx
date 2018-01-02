import React from 'react'
import './loginPanel.css'

export default class LoginPanel extends React.Component<{}> {
  render() {
    return (
      <div styleName="loginPanel-container">
        <header styleName="loginPanel-header">
          登录
        </header>
        <form>
          <div>
            <input />
          </div>
          <div>
            <input />
          </div>
          <div>
            <button>登录</button>
            <button>注册<span /></button>
          </div>
        </form>
      </div>
    )
  }
}
