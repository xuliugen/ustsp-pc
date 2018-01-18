// @flow
import React from 'react'
import './newsItem.css'

type NewsObj = {
  name: string,
  company: string,
  time: string,
  content: string,
  avatar: string
}

type Props = {
  news: NewsObj
}

export default class NewsItem extends React.Component<Props> {
  render() {
    const { news } = this.props
    return (
      <div styleName="news-item">
        <div styleName="publisher">
          <span styleName="avatar"><img src={news.avatar} /></span>
          <span styleName="name">{news.name}</span>
          <span styleName="company">{news.company}</span>
          <span styleName="time">{news.time}</span>
        </div>
        <div styleName="content">
          <span styleName="text">{news.content}</span>
        </div>
      </div>
    )
  }
}
