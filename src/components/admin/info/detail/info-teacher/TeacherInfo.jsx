import React from 'react'
import TeacherBasicInfo from './teacher-basic-info/TeacherBasicInfo'
import TeacherPersonalExp from './teacher-personal-exp/TeacherPersonalExp'
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
