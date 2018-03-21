import React from 'react'
import './publishedDemand.css'
import { Badge, Pagination } from 'antd'
import { observer, inject } from 'mobx-react'
import DemandItem from './demand-item/DemandItem'
import { DemandApi } from 'src/ajax'

@inject('userStore')
@observer
export default class PublishedDemand extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      demands: [],
      showDot: [false, true, false, false, true, false, false],
      pagination: { total: 8, current: 1, currentPageSize: 8 },
      status: ''
    }
  }

  componentDidMount() {
    this.setDemand(this.state.pagination.current, this.state.pagination.currentPageSize)
  }

  setDemand = async (current, pageSize, status) => {
    let res = null
    res = await DemandApi.getPublishedDemand(this.props.userStore.user.id, current, pageSize, status)
    const { data } = res
    this.setState((prevState) => ({
      demands: data.data,
      pagination: { ...prevState.pagination, total: data.totalPage }
    }))
  }

  handleClick = (status, idx, e) => {
    // 改变tag样式
    changeClass(e.currentTarget)
    this.setState((prev) => ({
      showDot: prev.showDot.map((item, i) => (i === idx ? false : item))
    }))

    // 渲染数据
    this.setState((prevState) => ({
      pagination: { ...prevState.pagination, current: 1 }
    }))
    this.setDemand(this.state.pagination.current, this.state.pagination.currentPageSize, status)
  }

  handlePagiChange = (page, pageSize) => {
    this.setState((prevState) => ({
      pagination: {
        total: prevState.pagination.total,
        current: page,
        currentPageSize: pageSize
      }
    }))
    this.setDemand(page, pageSize, this.state.status)
  }

  render() {
    const statusTags = [
      { name: '全部', status: '' },
      { name: '待审核', status: 0 },
      { name: '报名', status: 1 },
      { name: '待签单', status: 2 },
      { name: '进行中', status: 3 },
      { name: '待验收', status: 4 },
      { name: '评价', status: 5 },
      { name: '完成', status: 6 }
    ]
    const current = this.state.pagination.current
    const currentPageSize = this.state.pagination.currentPageSize

    return (
      <div styleName="published-demand-container">
        <div styleName="status-tags">
          {statusTags.map((item, idx) => {
            if (idx === 0) {
              return (
                <span key={idx} className="demand-status-selected" onClick={(e) => this.handleClick(item.status, idx, e)} >
                  <Badge dot={this.state.showDot[idx]}>
                    <span styleName="demand-status">{item.name}</span>
                  </Badge>
                </span>
              )
            }
            return (
              <span key={idx} onClick={(e) => this.handleClick(item.status, idx, e)} >
                <Badge dot={this.state.showDot[idx]}>
                  <span styleName="demand-status">{item.name}</span>
                </Badge>
              </span>
            )
          })}
        </div>
        <div styleName="demand-items">
          {this.state.demands.length !== 0 ? this.state.demands.map((item, idx) => {
            return (
              <DemandItem key={idx} demand={item.projectResearchInfo} />
            )
          }) : (
            <div styleName="demand-blank">
              <span>这里暂时还没有条目...</span>
            </div>
          )}
        </div>
        <div styleName="demand-pagination">
          <Pagination hideOnSinglePage current={current} total={this.state.pagination.total} pageSize={currentPageSize} onChange={this.handlePagiChange} />
        </div>
      </div>
    )
  }
}

function changeClass(element) {
  let className = element.className
  if (className !== 'demand-status-selected') {
    let selectedEl = document.getElementsByClassName('demand-status-selected')[0]
    selectedEl.className = ''
    element.className = 'demand-status-selected'
  }
}
