// @flow
import React from 'react'
import './newsHeader.css'
import { Link } from 'react-router-dom'

export default class NewsHeader extends React.Component<{}> {
  render() {
    return (
      <div styleName="title">
        <span>最新动态</span>
        <Link to="/news" styleName="more">更多</Link>
      </div>
    )
  }
}
