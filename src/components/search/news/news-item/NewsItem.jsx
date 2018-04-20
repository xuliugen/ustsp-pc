import React from 'react'
import { Link } from 'react-router-dom'
import { Avatar, Icon } from 'antd'
import './newsItem.css'
import moment from 'moment'

export default class NewsItem extends React.Component {
  render() {
    const { news } = this.props
    return (
      <div styleName="root">
        <div styleName="content">
          <Avatar src={news.avatar} shape="square" size="large" style={{ width: '80px', height: '80px' }} />
          <div styleName="info-text">
            <div styleName="title-wrapper">
              <Link to={`/news/${news.id}`}>
                <span styleName="title-text">{news.title}</span>
              </Link>
            </div>
            <div styleName="abstract-wrapper">
              <span styleName="abstracts">{news.abstracts}</span>
            </div>
            <div styleName="misc-wrapper">
              <div>发布于: {moment(news.date).format('YYYY-MM-DD HH:mm')}</div>
              <div styleName="view">
                <Icon type="eye" styleName="visible-icon" />
                <span styleName="visible-person-number">{news.view}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
