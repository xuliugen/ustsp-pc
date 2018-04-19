import React from 'react'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'
import './newsResult.css'
import NewsItem from './news-item/NewsItem'

@inject('searchStore')
@observer
export default class NewsResult extends React.Component {
  state = {
    news: [],
    pagination: { total: 10, current: 1, currentPageSize: 10 }
  }

  handlePagiChange = (page, pageSize) => {
    this.props.searchStore.setCurrentPage(page)
    this.props.searchStore.dispatchSearch()
    this.setState((prevState) => ({
      pagination: {
        total: prevState.pagination.total,
        current: page,
        currentPageSize: pageSize
      }
    }))
  }

  componentDidMount() {
    this.props.searchStore.dispatchSearch()
  }

  render() {
    const { currentPage, result, pageSize } = this.props.searchStore
    const total = result.totalNum
    return (
      <div styleName="root">
        <div styleName="title">共为您找到
          <span styleName="projects-number">{total}</span>个动态
        </div>
        {result.data.map((news, idx) => {
          return <NewsItem key={idx} news={news} />
        })}
        <Pagination styleName="pagination" hideOnSinglePage current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
