import React from 'react'
import './newsItem.css'
import ImgCover from 'src/assets/cover.png'
import moment from 'moment'
import { withRouter } from 'react-router-dom'

@withRouter
export default class AllNewsContent extends React.Component {
  handleClickDetail = (id) => {
    this.props.history.push(`/news/${id}`)
  }

  getCover = (dynamics) => {
    let i = ''
    dynamics.replace(/<img [^>]*src=['"]([^'"]+)[^>]*>/i, (match, capture) => {
      i = capture
      console.log(capture)
    })
    return i === '' ? ImgCover : i
  }

  render() {
    return (
      <div styleName="item-wrapper" onClick={this.handleClickDetail.bind(this, this.props.news.id)}>
        <div styleName="cover"><img src={this.getCover(this.props.news.dynamics)} /></div>
        <div styleName="detail">
          <div styleName="title">{this.props.news.title}</div>
          <div styleName="abstract">{this.props.news.abstracts}</div>
          <div>
            <span styleName="author">{this.props.news.username}</span>
            <span styleName="time">发布于 {moment(this.props.news.date).format('YYYY-MM-DD HH:mm')}</span>
          </div>
        </div>
      </div>
    )
  }
}
