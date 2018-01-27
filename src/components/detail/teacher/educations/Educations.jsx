// @flow
import React from 'react'
import './educations.css'
import moment from 'moment'

export default class Educations extends React.Component {
  render() {
    const educationItem = this.props.userEducationInfos.map((item, idx) => {
      return (
        <div key={idx} styleName="education-item">
          <span styleName="edu-university">{item.school}</span>
          <span styleName="edu-degree"> - {item.level}</span>
          <span styleName="edu-duration">{item.level}级 / {moment(item.startTime).format('YYYY-MM-DD')}  / {moment(item.endTime).format('YYYY-MM-DD')}</span>
          <span styleName="edu-major">{item.college} / {item.major}</span>
        </div>
      )
    })
    return (
      <div>{educationItem}</div>
    )
  }
}
