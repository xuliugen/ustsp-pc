import React from 'react'
import TalentItem from './talent-item/TalentItem'
import './talentResult.css'
import { Pagination } from 'antd'

export default class TalentResult extends React.Component {
  constructor() {
    super()
    this.state = {
      talents: [],
      pagination: { total: 10, current: 1, currentPageSize: 10 }
    }
  }

  handlePagiChange = (page, pageSize) => {
    console.log(page)
    console.log(pageSize)
    this.setState((prevState) => ({
      pagination: {
        total: prevState.pagination.total,
        current: page,
        currentPageSize: pageSize
      }
    }))
  }

  render() {
    const { current, currentPageSize, total } = this.state.pagination
    return (
      <div styleName="talent-items">
        <div styleName="title">共为您找到
          <span styleName="talents-number">56</span>
          个项目</div>
        <TalentItem />
        <TalentItem />
        <TalentItem />
        <TalentItem />
        <Pagination styleName="pagination" hideOnSinglePage current={current} total={total} pageSize={currentPageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
