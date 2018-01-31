// @flow
import React from 'react'
import './experience.css'
import moment from 'moment'

export default class Experiences extends React.Component<{}> {
  render() {
    const experienceItem = this.props.researchInfos.map((item, idx) => {
      return (
        <div key={idx} styleName="experience-item">
          <span styleName="name">{item.projectName}</span>
          <span styleName="duration">{moment(item.startTime).format('YYYY-MM-DD')} - {moment(item.endTime).format('YYYY-MM-DD')}</span>
          <span styleName="category">级别:{item.projectLevel} / 经费:{item.funding}</span>
          <p>{item.intro}</p>
        </div>
      )
    })
    return (
      <div>{experienceItem}</div>
    )
  }
}
