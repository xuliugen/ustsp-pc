import React from 'react'
import Header from 'components/detail/common/header/Header'
import './stdNews.css'
import avatar2 from 'src/assets/avatar2.png'

export default class StdNews extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      news: [
        { name: '陈萌', company: '电子科技大学', time: '12-17 17:55', content: '高中新课标古诗文背诵增加学生负担？', preview: '教育部回应教育部回应教育部回应,教育部回应教育部回应教育部回应教育部回应教育部回应教育部回应', avatar: avatar2 },
        { name: '徐思航', company: '四川大学', time: '12-17 17:55', content: '急求会html+css和AE的ui设计师', preview: '教育部回应教育部回应教育部回应', avatar: avatar2 },
        { name: '王晓峰', company: '京东方技术有限公司', time: '12-17 17:55', content: '急聘移动端开发工程师', preview: '教育部回应教育部回应教育部回应', avatar: avatar2 }
      ]
    }
  }

  render() {
    const newsItem = this.state.news.map((item, idx) => {
      return (
        <div key={idx}>
          <div styleName="news-item">
            <div styleName="publisher">
              <img styleName="avatar"src={item.avatar} />
              <span styleName="name">{item.name}</span>
              <span styleName="company">{item.company}</span>
              <span styleName="time">{item.time}</span>
            </div>
            <div styleName="content">
              <span styleName="text">{item.content}<span styleName="preview">{item.preview}</span></span>
            </div>
          </div>
        </div>
      )
    })

    return (
      <div>
        <Header title="最新动态" />
        {newsItem}
      </div>
    )
  }
}
