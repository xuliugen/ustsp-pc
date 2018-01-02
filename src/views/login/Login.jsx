// @flow
import React from 'react'
import './login.css'
import { LoginPanel } from 'components/login'
import imgLogo from 'src/assets/logo.png'
import { Link } from 'react-router-dom'

export default class Login extends React.Component<Object> {
  componentDidMount() {
    const height = document.documentElement.clientHeight + 'px'
    this.loginContainer.style.height = height
  }

  render() {
    return (
      <div styleName="login" ref={(div) => { this.loginContainer = div }}>
        <Link to="/">
          <img src={imgLogo} width="201" height="49" />
        </Link>
        <LoginPanel />
      </div>
    )
  }
}
