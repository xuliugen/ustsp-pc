// @flow
import React from 'react'
import NewsHeader from './header/NewsHeader'
import NewsItem from './news-item/NewsItem'
import './news.css'

type NewsObj = {
  name: string,
  company: string,
  time: string,
  content: string
}

type State = {
  news: Array<NewsObj>
}

export default class News extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      news: [
        {name: '陈萌', company: '西南石油大学', time: '12-17 17:55', content: '舞法天女社团成立啦！！'},
        {name: '徐日', company: '四川大学', time: '12-17 17:55', content: '急求会html+css和AE的ui设计师'},
        {name: '周楼楼', company: '最爱毛jio有限公司', time: '12-17 17:55', content: '高薪招java了'},
        {name: '陈皮皮', company: '小米科技', time: '12-17 17:55', content: '一排能显示的长度只有这么多再多就...'},
        {name: '利兹堡', company: '西南财经大学', time: '12-17 17:55', content: '拒绝雾霾天！快来参加节能减排社团dddd'}
      ]
    }
  }

  render() {
    const newsItem = this.state.news.map((item, idx) => {
      return (
        <div styleName="news-item-wrapper" key={idx}>
          <NewsItem news={item} />
        </div>
      )
    })

    return (
      <div styleName="news">
        <div styleName="news-header-wrapper">
          <NewsHeader />
        </div>
        {newsItem}
      </div>
    )
  }
}
