import React from 'react'
import './ipResult.css'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'
import IPItem from './ip-item/IPItem'

@inject('searchStore')
@observer
export default class IPResult extends React.Component {
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
        <IPItem />
        <Pagination styleName="pagination" hideOnSinglePage current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
