// @flow
import React from 'react'
import './newsHeader.css'

export default class NewsHeader extends React.Component<{}> {
  render() {
    return (
      <div styleName="title">
        <span>最新动态</span>
        <a href="#" styleName="more">更多</a>
      </div>
    )
  }
}
