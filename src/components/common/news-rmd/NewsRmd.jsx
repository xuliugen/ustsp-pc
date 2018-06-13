import React from 'react'
import Header from 'components/detail/common/header/Header'
import './newsRmd.css'
import moment from 'moment'
import { withRouter, Link } from 'react-router-dom'
import { NewsApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

@withRouter
@inject('userStore')
@observer
export default class NewsRmd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: []
    }
  }

  async componentDidMount() {
    try {
      // const { userStore } = this.props
      // const uid = userStore.isLogin ? userStore.user.id : ''
      // const { data } = await NewsApi.fetchNewsRmd(uid, 4)
      const { data } = await NewsApi.getMoreNews('', 1, 5)
      const news = data.data
      if (Array.isArray(news)) {
        this.setState({
          news: news
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
            <span styleName="time">{moment(item.date).format('YYYY-MM-DD HH:mm')}</span>
          </div>
          <Link to={`/news/${item.id}`}>
            <div styleName="content">
              <span styleName="text">{item.abstracts}
                {/* <span styleName="preview">{item.dynamics}</span> */}
              </span>
            </div>
          </Link>
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
