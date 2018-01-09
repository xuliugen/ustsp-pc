import React from 'react'
import './stepTow.css'
import imgAvatar from 'src/assets/avatar1.png'

export default class StepTwo extends React.Component<{}> {
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
      </div>
    )
  }
}
