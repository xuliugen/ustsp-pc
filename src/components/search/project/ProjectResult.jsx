import React from 'react'
import ProjectItem from './project-item/ProjectItem'
import { observer, inject } from 'mobx-react'
import './projectResult.css'
import { Pagination } from 'antd'

@inject('searchStore')
@observer
export default class ProjectResult extends React.Component {
  constructor() {
    super()
    this.state = {
      projects: [],
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
    const { total } = this.state.pagination
    const { currentPage, pageSize, result } = this.props.searchStore
    return (
      <div styleName="project-items">
        <div styleName="title">共为您找到
          <span styleName="projects-number">56</span>
        个项目</div>
        {result.data.map((talent, idx) => {
          return <ProjectItem key={idx} talent={talent} />
        })}
        <Pagination styleName="pagination" hideOnSinglePage current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
