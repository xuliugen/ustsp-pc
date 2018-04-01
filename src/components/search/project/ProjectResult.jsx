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
      <div styleName="project-items">
        <div styleName="title">共为您找到
          <span styleName="projects-number">{total}</span>
        个项目</div>
        {result.data.map((project, idx) => {
          return <ProjectItem key={idx} project={project} />
        })}
        <Pagination styleName="pagination" hideOnSinglePage current={currentPage} total={total} pageSize={pageSize} onChange={this.handlePagiChange} />
      </div>
    )
  }
}
