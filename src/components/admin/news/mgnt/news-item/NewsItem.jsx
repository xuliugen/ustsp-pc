import React from 'react'
import './newsItem.css'

export default class NewsItem extends React.Component {
  render() {
    return (
      <div styleName="item-wrapper">
        <div styleName="item-picture"><img src={this.props.news.cover} /></div>
        <div styleName="item-detail">
          <div styleName="news-title">{this.props.news.title}</div>
          <div styleName="news-abstract">{this.props.news.abstract}</div>
          <div styleName="news-date">发布于 {this.props.news.time}</div>
        </div>
      </div>
    )
  }
}
