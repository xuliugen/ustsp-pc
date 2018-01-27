import React from 'react'
import ProjectItem from './project-item/ProjectItem'
import './projectResult.css'
import { Pagination } from 'antd'

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
    const { current, currentPageSize, total } = this.state.pagination
    return (
      <div styleName="project-items">
        <div styleName="title">共为您找到
          <span styleName="projects-number">56</span>
        个项目</div>
        <ProjectItem />
        <ProjectItem />
        <ProjectItem />
        <Pagination styleName="pagination" hideOnSinglePage current={current} total={total} pageSize={currentPageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}