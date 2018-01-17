// @flow
import React from 'react'
import NewsHeader from './header/NewsHeader'
import NewsItem from './news-item/NewsItem'
import './news.css'
import avatar1 from 'src/assets/avatar6.png'
import avatar2 from 'src/assets/avatar7.png'
import avatar3 from 'src/assets/avatar8.png'
import avatar4 from 'src/assets/avatar9.png'
import avatar5 from 'src/assets/avatar10.png'

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
        { name: '陈萌', company: '电子科技大学', time: '12-17 17:55', content: '高中新课标古诗文背诵增加学生负担？教育部回应', avatar: avatar1 },
        { name: '徐思航', company: '四川大学', time: '12-17 17:55', content: '急求会html+css和AE的ui设计师', avatar: avatar2 },
        { name: '王晓峰', company: '京东方技术有限公司', time: '12-17 17:55', content: '急聘移动端开发工程师', avatar: avatar3 },
        { name: '陈星', company: '小米科技', time: '12-17 17:55', content: '团队有着丰富的项目经验，承接各种项目开发工作', avatar: avatar4 },
        { name: '王立飞', company: '西南财经大学', time: '12-17 17:55', content: '我校成功研发了数据库增量数据同步系统', avatar: avatar5 }
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
