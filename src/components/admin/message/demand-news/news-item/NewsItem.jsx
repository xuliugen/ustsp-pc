import React from 'react'
import imgSystem from 'src/assets/systemIcon.png'
import './newsItem.css'

export default class NewsItem extends React.Component {
  render() {
    return (
      <div styleName="root">
        <img src={imgSystem} styleName="avatar" />
        <div styleName="news-info">
          <div>
            <span>基于Ffmpeg的直播推流系统</span>
            <span styleName="time">2018-01-24 19:20</span>
          </div>
          <div styleName="content">
            项目有了新进度，请注意查看！
          </div>
        </div>
      </div>
    )
  }
}
