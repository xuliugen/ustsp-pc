import React from 'react'
import PhoneVerification from './phoneVerification/PhoneVerification'
import ModifyPwd from './modifyPwd/ModifyPwd'
import { Form } from 'antd'
import './modifyByPhone.css'

@Form.create()
export default class ModifyByPhone extends React.Component {
  constructor() {
    super()
    this.state = {
      step: 'verify'
    }
  }

  handleClick(step) {
    this.setStep(step)
  }

  setStep(type) {
    this.setState({
      step: type
    })
  }

  render() {
    let Content = null
    switch (this.state.step) {
      case 'verify':
        Content = PhoneVerification
        break
      case 'modify':
        Content = ModifyPwd
        break
    }
    return (
      <div styleName="phone-wrapper">
        <div styleName="progress-bar">
          <span styleName={this.state.step === 'verify' ? 'selected' : ''} onClick={this.handleClick.bind(this, 'verify')}>手机验证</span>
          &nbsp;&nbsp;>&nbsp;&nbsp;
          <span styleName={this.state.step === 'modify' ? 'selected' : ''}>修改密码</span>
        </div>
        <div styleName="content">
          <Content form={this.props.form} setStep={this.setStep.bind(this)} />
        </div>
      </div>
    )
  }
}
