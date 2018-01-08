// @flow
import React from 'react'
import './newsItem.css'
import imgTouxiang from './touxiang.png'

type Props = {
  name: string,
  company: string,
  time: string,
  content: string
}

export default class NewsItem extends React.Component<Props> {
  render() {
    return (
      <div styleName="news-item">
        <div styleName="publisher">
          <span styleName="touxiang"><img src={imgTouxiang} /></span>
          <span styleName="name">{this.props.name}</span>
          <span styleName="company">{this.props.company}</span>
          <span styleName="time">{this.props.time}</span>
        </div>
        <div styleName="content">
          <span styleName="bot" />
          <span styleName="text">{this.props.content}</span>
        </div>
      </div>
    )
  }
}
