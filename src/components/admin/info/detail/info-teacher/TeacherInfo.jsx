import React from 'react'
import TeacherBasicInfo from './teacher-basic-info/TeacherBasicInfo'
import TeacherPersonalExp from './teacher-personal-exp/TeacherPersonalExp'
// import TchEduExp from 'src/components/common/info/info-exp/tch-edu-exp/TchEduExp'
import './teacherInfo.css'

export default class TeacherInfo extends React.Component {
  render() {
    return (
      <div styleName="content-wrapper">
        <TeacherBasicInfo />
        <TeacherPersonalExp />
      </div>
    )
  }
}
