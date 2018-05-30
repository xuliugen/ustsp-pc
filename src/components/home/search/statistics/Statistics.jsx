// @flow
import React from 'react'
import './statistics.css'

export default class Statistics extends React.Component<{}> {
  render() {
    return (
      <div styleName="statistic">
        <span styleName="info-item"><span styleName="num">168</span>位专家</span>
        <span styleName="info-item"><span styleName="num">124</span>项专利</span>
        <span styleName="info-item"><span styleName="num">245</span>项成果</span>
        <span styleName="info-item"><span styleName="num">13566</span>个已完成项</span>
      </div>
    )
  }
}
