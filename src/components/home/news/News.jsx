// @flow
import React from 'react'
import NewsHeader from './header/NewsHeader'
import NewsItem from './news-item/NewsItem'
import './news.css'
import { NewsApi } from 'src/ajax'

export default class News extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      news: []
    }
  }

  componentDidMount() {
    this.getNews()
  }

  async getNews() {
    const { data } = await NewsApi.getMoreNews('', 1, 5)
    const news = data.data
    if (Array.isArray(news)) {
      this.setState({
        news
      })
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
