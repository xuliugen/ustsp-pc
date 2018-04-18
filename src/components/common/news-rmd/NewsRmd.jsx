import React from 'react'
import Header from 'components/detail/common/header/Header'
import './NewsRmd.css'
import avatar2 from 'src/assets/avatar2.png'
import { withRouter } from 'react-router-dom'
import { NewsApi } from 'src/ajax'

@withRouter
export default class StdNews extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }
  async componentDidMount() {
    try {
      const { data } = NewsApi.fetchNewsRmd(this.props.match.id, 1)
      console.log(data)
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const newsItem = this.state.news.map((item, idx) => {
      return (
        <div key={idx}>
          <div styleName="news-item">
            <div styleName="publisher">
              <img styleName="avatar"src={avatar2} />
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
