import React from 'react'
import './allNewsContent.css'
import NewsItem from './news-item/NewsItem'
import { Pagination, message } from 'antd'
import { NewsApi } from 'src/ajax'

export default class AllNewsContent extends React.Component {
  constructor() {
    super()
    this.state = {
      news: [],
      type: '项目动态',
      pagination: { total: null, current: 1, pageSize: 12 }
    }
  }

  componentDidMount() {
    this.getMoreNews('1', this.state.pagination.current)
  }

  getMoreNews = async (type, current) => {
    try {
      const { data } = await NewsApi.getMoreNews(type, current, this.state.pagination.pageSize)
      this.setState(prev => ({
        news: data.data,
        pagination: { ...prev.pagination, total: data.totalPage }
      }))
    } catch (err) {
      console.log(err)
    }
  }

  handleTypeChange = (type) => {
    this.setState({
      type: type
    })
    this.setState(prev => ({
      pagination: { ...prev.pagination, current: 1 }
    }))
    this.getMoreNews(this.setType(type), 1)
  }

  handlePagiChange = (page, pageSize) => {
    this.setState((prevState) => ({
      pagination: { ...prevState.pagination, current: page }
    }))
    this.getMoreNews(this.setType(this.state.type), page)
  }

  setType = (item) => {
    if (item === '项目动态') {
      return '1'
    } else if (item === '老师动态') {
      return '2'
    } else if (item === '企业动态') {
      return '3'
    } else {
      message.error('Error')
    }
  }

  render() {
    const types = ['项目动态', '老师动态', '企业动态']
    return (
      <div styleName="news-list-wrapper">
        <div styleName="types">
          {types.map((item, idx) => {
            let styleName = 'type-status'
            if (item === this.state.type) {
              styleName += ' type-status-selected'
            }
            return (
              <span key={idx} styleName={styleName} onClick={this.handleTypeChange.bind(this, item)} >{item}</span>
            )
          })}
        </div>
        {this.state.news.length !== 0 ? this.state.news.map((item, idx) => {
          return (<NewsItem key={idx} news={item} />)
        }) : (
          <div styleName="item-wrapper"><span style={{ fontSize: '22px' }}>这里暂时没有动态...</span></div>
        )}
        <div style={{ float: 'right', margin: '15px 20px' }}>
          <Pagination defaultCurrent={1}
            total={this.state.pagination.total}
            pageSize={this.state.pagination.pageSize}
            current={this.state.pagination.current}
            onChange={this.handlePagiChange}
            hideOnSinglePage />
        </div>
      </div>
    )
  }
}
