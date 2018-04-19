import React from 'react'
import Header from 'components/detail/common/header/Header'
import './newsRmd.css'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { NewsApi } from 'src/ajax'

@withRouter
export default class NewsRmd extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }
  async componentDidMount() {
    try {
      const { data } = await NewsApi.fetchNewsRmd(this.props.match.params.id, 4)
      if (Array.isArray(data)) {
        this.setState({
          news: data
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const newsItem = this.state.news.map((item, idx) => {
      item.dynamics = item.dynamics.toString().replace(/<[^>]*?>(.*?)/gi, '$1')
      item.dynamics = item.dynamics.toString().replace(/(.*?)<\/[^>]*?>/gi, '$1')
      return (
        <div styleName="news-item" key={idx}>
          <div styleName="publisher">
            <img styleName="avatar" src={item.avatar} />
            <span styleName="name">{item.username}</span>
            <span styleName="company">{item.location}</span>
            <span styleName="time">{moment(item.date).format('YYYY-MM-DD HH:mm:ss')}</span>
          </div>
          <div styleName="content">
            <span styleName="text">{item.abstracts}
              {/* <span styleName="preview">{item.dynamics}</span> */}
            </span>
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
