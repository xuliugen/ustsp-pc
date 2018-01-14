// @flow
import React from 'react'
import './enterprise.css'
import EnterBaseInfo from './base-info/EnterBaseInfo'
import EnterOtherInfo from './other-info/EnterOtherInfo'

export default class StepThreeEnterprise extends React.Component<{}> {
  render() {
    return (
      <div styleName="container" >
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <EnterBaseInfo />
          <EnterOtherInfo />
          <div styleName="confirm-btn">
            <button>确认</button>
          </div>
        </div>
      </div>
    )
  }
}
