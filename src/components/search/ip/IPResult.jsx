import React from 'react'
import './ipResult.css'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'
import IPItem from './ip-item/IPItem'

@inject('searchStore')
@observer
export default class IPResult extends React.Component {
  state = {
    pagination: { total: 10, current: 1, currentPageSize: 10 }
  }

  componentDidMount() {
    this.props.searchStore.dispatchSearch()
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

  render() {
    const { currentPage, result, pageSize } = this.props.searchStore
    const total = result.totalNum
    return (
      <div styleName="project-items">
        <div styleName="title">共为您找到
          <span styleName="projects-number">{total}</span>个项目
        </div>
        {result.data.map((patent, idx) => {
          return <IPItem key={idx} patent={patent} />
        })}
        <Pagination styleName="pagination" hideOnSinglePage current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
