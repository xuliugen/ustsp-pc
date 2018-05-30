// @flow
import React from 'react'
import './awards.css'

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
  constructor() {
    super()
    this.state = {
      awards: [
        { award: 'xx杯xxx奖', category: '计算机技术类', level: '全国', time: '2011.2.2' },
        { award: 'xxxx杯xxxxxx奖', category: '计算机技术类', level: '全国', time: '2011.3.4' }
      ]
    }
  }
  render() {
    const AwardItem = this.state.awards.map((item, idx) => {
      return (
        <div key={idx} styleName="award-items">
          <span styleName="award-name">{item.award}</span>
          <span styleName="award-time">获得时间：{item.time}</span>
          <span styleName="award-category">{item.category} / {item.level}</span>
        </div>
      )
    })
    return (
      <div>{ AwardItem }</div>
    )
  }
}
