import React from 'react'
import { ForgetPasswdPanel } from 'src/components/password'
import imgLogo from 'src/assets/logo.png'
import { Link } from 'react-router-dom'
import './forgetPassword.css'

export default class ForgetPassword extends React.Component<{}> {
  componentDidMount() {
    const height = document.documentElement.clientHeight + 'px'
    this.forgetPasswdContainer.style.height = height
  }

  render() {
    return (
      <div styleName="passwd-forget" ref={(div) => { this.forgetPasswdContainer = div }}>
        <div styleName="passwd-forget-inner">
          <Link to="/">
            <img src={imgLogo} styleName="logo" width="201" height="49" />
          </Link>
          <ForgetPasswdPanel />
        </div>
      </div>
    )
  }
}
