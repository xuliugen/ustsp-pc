import React from 'react'
import TeacherBasicInfo from './teacher-basic-info/TeacherBasicInfo'
import TeacherPersonalExp from './teacher-personal-exp/TeacherPersonalExp'
import './teacherInfo.css'

import { TchEduExp, TchResearchExp, TchIpExp, TchAwardExp } from 'components/common/info'

export default class TeacherInfo extends React.Component {
  render() {
    return (
      <div styleName="root">
        <TeacherBasicInfo />
        <TeacherPersonalExp />
        <TchEduExp />
        <TchResearchExp />
        <TchIpExp />
        <TchAwardExp isResearch />
        <TchAwardExp />
      </div>
    )
  }
}
