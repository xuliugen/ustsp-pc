import React from 'react'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'

import './stepTow.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'
import imgVeriSuccess from './veri_success.png'

@inject('registerStore')
@observer
export default class StepTwo extends React.Component {
  constructor() {
    super()
    this.state = {
      verifyModelVisible: false
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
    this.props.history.push('/register/3')
  }

  handleAcceptData = () => {
    const { registerStore } = this.props
    registerStore.setClaimData({
      ...registerStore.claimData,
      isAccept: true
    })
    message.success('信息认领成功，下面进入完善信息页面')
    this.props.history.push('/register/3')
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
              <div styleName="veri-btn">
                <button onClick={() => { this.setState({ verifyModelVisible: false }) }}>去验证</button>
              </div>
            </div>
          </div>
        }
      </div>
    )
  }
}
