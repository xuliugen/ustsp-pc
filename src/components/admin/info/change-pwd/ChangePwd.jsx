import React from 'react'
import ModifyDirectly from './modify-directly/ModifyDirectly'
import ModifyByPhone from './modify-by-phone/ModifyByPhone'
import './changePwd.css'

export default class ChangePwd extends React.Component {
  constructor() {
    super()
    this.state = {
      method: 'directly'
    }
  }

  handleClick(type) {
    this.setState({
      method: type
    })
  }

  render() {
    let Content = null
    switch (this.state.method) {
      case 'directly':
        Content = ModifyDirectly
        break
      case 'phone':
        Content = ModifyByPhone
        break
    }
    return (
      <div styleName="wrapper">
        <div styleName="tags">
          <span styleName={'method' + (this.state.method === 'directly' ? ' selected' : '')} onClick={this.handleClick.bind(this, 'directly')}>密码修改</span>
          &nbsp;&nbsp;|&nbsp;&nbsp;
          <span styleName={'method' + (this.state.method === 'phone' ? ' selected' : '')} onClick={this.handleClick.bind(this, 'phone')}>手机验证</span>
        </div>
        <div styleName="content">
          <Content />
        </div>
      </div>
    )
  }
}
