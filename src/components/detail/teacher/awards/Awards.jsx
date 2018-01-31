// @flow
import React from 'react'
import './awards.css'
import moment from 'moment'

type AwardObj = {
  award: string,
  category: string,
  level: string,
  time: number
}

type State = {
  awards: Array<AwardObj>
}

export default class Awards extends React.Component<{}, State> {
  render() {
    const AwardItem = this.props.userAwardInfos.map((item, idx) => {
      return (
        <div key={idx} styleName="award-items">
          <span styleName="award-name">{item.name}</span>
          <span styleName="award-time">获得时间：{moment(item.time).format('YYYY-MM-DD')}</span>
          <span styleName="award-category">{item.level}</span>
        </div>
      )
    })
    return (
      <div>{AwardItem}</div>
    )
  }
}
