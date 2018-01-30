import React from 'react'
import TalentItem from './talent-item/TalentItem'
import { observer, inject } from 'mobx-react'
import './talentResult.css'
import { Pagination } from 'antd'

@inject('searchStore')
@observer
export default class TalentResult extends React.Component {
  constructor() {
    super()
    this.state = {
      talents: [],
      pagination: { total: 10, current: 1, currentPageSize: 10 }
    }
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

  componentWillMount() {
    this.props.searchStore.dispatchSearch()
  }

  render() {
    const { currentPage, result, pageSize } = this.props.searchStore
    const total = result.totalNum
    return (
      <div styleName="talent-items">
        <div styleName="title">共为您找到
          <span styleName="talents-number">{total}</span>
          个项目</div>
        {result.data.map((talent, idx) => {
          return <TalentItem key={idx} talent={talent} />
        })}
        <Pagination styleName="pagination" current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
