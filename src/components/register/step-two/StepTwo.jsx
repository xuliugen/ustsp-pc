import React from 'react'
import { inject, observer } from 'mobx-react'
import { message, Input, Button } from 'antd'
import { RegisterApi } from 'src/ajax'
import './stepTow.css'

import defaultAvatar from 'src/assets/defaultAvatar.svg'
import imgVeriSuccess from './veri_success.png'

@inject('registerStore')
@observer
export default class StepTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      verifyCode: null,
      verifyModelVisible: true
    }
  }

  componentWillMount() {
    this.props.registerStore.changeStep(2)
  }

  handleNotMe = () => {
    const { registerStore } = this.props
    registerStore.setClaimData({
      ...registerStore.claimData,
      isAccept: false
    })
    message.success('进入完善信息页面')
    this.props.history.replace('/register/3')
  }

  handleAcceptData = () => {
    const { registerStore } = this.props
    registerStore.setClaimData({
      ...registerStore.claimData,
      isAccept: true
    })
    message.success('信息认领成功，下面进入完善信息页面')
    this.props.history.replace('/register/3')
  }

  handleVerfiyEmailCode = async () => {
    try {
      const { data: isPass } = await RegisterApi.checkVerifyCode(this.state.verifyCode, this.props.registerStore.initial.email, 'email')
      if (isPass) {
        this.setState({ verifyModelVisible: false })
        message.success('邮箱验证成功')
      } else {
        message.error('验证码有误')
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const { claimData } = this.props.registerStore
    const avatar = (claimData && claimData.icon) ? claimData.icon : defaultAvatar
    return (
      <div styleName="container">
        <div styleName="title">step2:检测到相关已有资料，可以进行认领。</div>
        <div styleName="introduce">
          <div styleName="toast">这是您本人吗?</div>
          <img styleName="photo" src={avatar} alt="头像" />
          <div styleName="name">{claimData.name}</div>
          <div styleName="profession">{claimData.university} / {claimData.school}</div>
        </div>
        <div styleName="button-operation">
          <button styleName="no-button" onClick={this.handleNotMe}>不是</button>
          <button styleName="next-button" onClick={this.handleAcceptData}>是的，下一步</button>
        </div>
        {this.state.verifyModelVisible &&
          <div styleName="pop">
            <div styleName="mailbox-verification">
              <div styleName="success-pic"><img src={imgVeriSuccess} /></div>
              <div styleName="already-sent">验证邮件已经发送到您的注册邮箱</div>
              <div styleName="email">{claimData.email}</div>
              <div styleName="veri-block">
                <Input
                  styleName="veri-ipt"
                  placeholder="邮箱验证码"size="large"
                  value={this.state.verifyCode}
                  onChange={(e) => { this.setState({verifyCode: e.target.value}) }}
                  onPressEnter={this.handleVerfiyEmailCode} />
                <Button size="large" type="primary" onClick={this.handleVerfiyEmailCode}>验证</Button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
