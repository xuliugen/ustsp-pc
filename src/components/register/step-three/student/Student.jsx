import React from 'react'
import './student.css'
import StuBaseInfo from './base-info/StuBaseInfo'
import StuPersonalExperience from './personal-experience/StuPersonalExperience'
import StuEducationalExperience from './educational-experience/StuEducationalExperience'

export default class StepThree extends React.Component<{}> {
  render() {
    return (
      <div styleName="container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <StuBaseInfo />
          <StuPersonalExperience />
          <StuEducationalExperience />
          <button styleName="confirm-button">确认</button>
        </div>
      </div>
    )
  }
}
