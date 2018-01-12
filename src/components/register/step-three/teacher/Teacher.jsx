import React from 'react'
import './teacher.css'
import TchBaseInfo from './base-info/TchBaseInfo'
import PersonalExperience from './personal-experience/TchPersonalExperience'
import TchEdicationalExperience from './educational-experience/TchducationalExperience'
import Research from './research/Research'
import IP from './ip/IP'
import RAward from './r-award/RAward'
import NRAward from './nr-award/NRAward'

export default class StepThreeTeacher extends React.Component<{}> {
  render() {
    return (
      <div styleName="container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <TchBaseInfo />
          <PersonalExperience />
          <TchEdicationalExperience />
          <Research />
          <IP />
          <RAward />
          <NRAward />
          <button styleName="confirm-button">确认</button>
        </div>
      </div>
    )
  }
}
