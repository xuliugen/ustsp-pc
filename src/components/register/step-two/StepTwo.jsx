// @flow
import React from 'react'
import { inject, observer } from 'mobx-react'

import './stepTow.css'
import imgAvatar from 'src/assets/avatar1.png'
import imgVeriSuccess from 'src/assets/veri_success.png'

type STATE = {
  email: string,
  verifyModelVisible: boolean
}

@inject('registerStore')
@observer
export default class StepTwo extends React.Component<{}, STATE> {
  constructor() {
    super()
    this.state = {
      email: '32445436@qq.com',
      verifyModelVisible: true
    }
  }

  componentWillMount() {
    this.props.registerStore.changeStep(2)
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="title">step2:检测到相关已有资料，可以进行认领。</div>
        <div styleName="introduce">
          <div styleName="toast">这是您本人吗?</div>
          <img styleName="photo" src={imgAvatar} alt="这是头像" />
          <div styleName="name">王福德</div>
          <div styleName="profession">西南石油大学 / 电气工程专业</div>
        </div>
        <div styleName="button-operation">
          <button styleName="no-button">不是</button>
          <button styleName="next-button">是的，下一步</button>
        </div>
        {this.state.verifyModelVisible &&
          <div styleName="pop">
            <div styleName="mailbox-verification">
              <div styleName="success-pic"><img src={imgVeriSuccess} /></div>
              <div styleName="already-sent">验证邮件已经发送到您的注册邮箱</div>
              <div styleName="email">{this.state.email}</div>
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
