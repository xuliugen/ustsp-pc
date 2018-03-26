// @flow
import React from 'react'
import './newsItem.css'
import moment from 'moment'
import { Avatar } from 'antd'
import { withRouter } from 'react-router-dom'

@withRouter
export default class NewsItem extends React.Component<Props> {
  handleNewsClick({id}) {
    this.props.history.push(`/news/${id}`)
  }

  render() {
    const { news } = this.props
    return (
      <div styleName="news-item" onClick={this.handleNewsClick.bind(this, news)}>
        <div styleName="publisher">
          <span styleName="avatar"><Avatar src={news.avatar} /></span>
          <span styleName="name">{news.username}</span>
          <span styleName="company">{news.location}</span>
          <span styleName="time">{moment(news.date).format('MM-DD HH:MM')}</span>
        </div>
        <div styleName="content">
          <span styleName="text">{news.title}</span>
        </div>
      </div>
    )
  }
}
