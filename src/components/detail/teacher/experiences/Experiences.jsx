// @flow
import React from 'react'
import './experience.css'
import moment from 'moment'

export default class Experiences extends React.Component {
  render() {
    const experienceItem = this.props.researchInfos.map((item, idx) => {
      const descLabelArr = [{
        prop: 'firstParty',
        text: '甲方名'
      }, {
        prop: 'projectLevel',
        text: '级别'
      }]
      // {
      //   prop: 'funding',
      //   text: '经费'
      // }
      const descVisibleLabelArr = []
      descLabelArr.forEach(({ prop, text }) => {
        if (item[prop]) {
          descVisibleLabelArr.push({
            label: text,
            value: item[prop]
          })
        }
      })
      return (
        <div key={idx} styleName="experience-item">
          <span styleName="name">{item.projectName}</span>
          <span styleName="duration">{moment(item.startTime).format('YYYY.MM.DD')} ~ {moment(item.endTime).format('YYYY.MM.DD')}</span>
          {/* <span styleName="category">级别: {item.projectLevel} / 经费: {item.funding}万元</span> */}
          <span styleName="category">
            {descVisibleLabelArr.map(({label, value}) => `${label}: ${value}`).join(' / ')}
          </span>
          <p>{item.intro}</p>
        </div>
      )
    })
    return (
      <div>{experienceItem}</div>
    )
  }
}
