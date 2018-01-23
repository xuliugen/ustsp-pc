// @flow
import React from 'react'
import './publishedDemand.css'
import { Badge, Pagination } from 'antd'
import DemandItem from './demand-item/DemandItem'

type DemandObj = {
  title: string,
  status: string,
  subject: string,
  recieveType: string,
  price: number,
  time: string
}

type State = {
  demands: Array<DemandObj>
}

export default class PublishedDemand extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      demands: [
        { title: '发布的项目名称一', status: '待审核', subject: '计算机技术专业', recieveType: '不限', price: 20000, time: '2017-12-24 12:34' },
        { title: '发布的项目名称一加几个字', status: '待报名', number: 10, subject: '计算机技术专业 / 前端编程', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '发布的项目名称一加几个字', status: '已签单', subject: '计算机技术专业 / 前端编程', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '发布的项目名称', status: '已签单', subject: '艺术设计', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '项目名称', status: '待验收', subject: '艺术设计', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '项目名称中等长度', status: '已评价', subject: '艺术设计', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '中断的项目名称七中等长度', status: '已中断', subject: '艺术设计', recieveType: '不限', price: 9999, time: '2017-12-24 12:34' },
        { title: '发布的项目名称一', status: '待审核', subject: '计算机技术专业', recieveType: '不限', price: 20000, time: '2017-12-24 12:34' }
      ],
      showDot: [false, true, false, false, true, false, false],
      total: 8,
      current: 1
    }
  }

  handleClick = (status, idx, e) => {
    console.log(status)
    changeClass(e.currentTarget)
    this.setState((prev) => ({
      showDot: prev.showDot.map((item, i) => (i === idx ? false : item))
    }))
  }

  handlePagiChange = (page, pageSize) => {
    this.setState({
      current: page
    })
  }

  render() {
    const statusTags = [
      { name: '全部', status: 'all' },
      { name: '待审核', status: 'pendingReview' },
      { name: '待报名', status: 'pendingRegister' },
      { name: '已签单', status: 'signed' },
      { name: '待验收', status: 'pendingCheck' },
      { name: '已评价', status: 'commented' },
      { name: '已中断', status: 'Discontinued' }
    ]
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
          {this.state.demands.slice((this.state.current - 1) * 4, this.state.current * 4).map((item, idx) => {
            return (
              <DemandItem key={idx} demand={item} />
            )
          })}
        </div>
        <div styleName="demand-pagination">
          <Pagination current={this.state.current} total={this.state.total} pageSize={4} onChange={this.handlePagiChange} />
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
