import React from 'react'
import './newsItem.css'
import ImgCover from 'src/assets/cover.png'

export default class AllNewsContent extends React.Component {
  render() {
    return (
      <div styleName="item-wrapper">
        <div styleName="cover"><img src={ImgCover} /></div>
        <div styleName="detail">
          <div styleName="title">舞法天女社团成立啦！！</div>
          <div styleName="abstract">据中国之声《新闻纵横》报到，当地时间昨天（14号）下午一点左右，一艘快艇啦啦啦</div>
          <div>
            <span styleName="author">陈萌</span>
            <span styleName="time">发布于 12-20 17:55</span>
          </div>
        </div>
      </div>
    )
  }
}
