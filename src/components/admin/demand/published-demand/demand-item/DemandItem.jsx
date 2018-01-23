import React from 'react'
import './demandItem.css'

export default class DemandItem extends React.Component<{}> {
  render() {
    const status = this.props.demand.status
    const styleList = setStyleList(this.props.demand)
    console.log(styleList)
    return (
      <div styleName="demand-item">
        <div styleName="left">
          <div styleName="demand-title">
            {this.props.demand.title}
            <span styleName="demand-status" style={{ backgroundColor: styleList.backgroundColor, color: styleList.color, border: styleList.border }}>{status}</span>
          </div>
          <div styleName="demand-base">
            <span>{this.props.demand.subject}</span>
            <span styleName="recieve-type">接包类型：{this.props.demand.recieveType}</span>
            <span>金额 ¥{this.props.demand.price}</span>
          </div>
        </div>
        <div styleName="right">
          <div styleName="demand-time">发布于 {this.props.demand.time}</div>
          <div styleName="demand-detail-btn"><button>{this.props.demand.number ? (<span style={{ color: '#3091e6' }}>{this.props.demand.number}</span>) : ''}{styleList.message}</button></div>
        </div>
      </div>
    )
  }
}

function setStyleList(item) {
  let styleList = {
    backgroundColor: '',
    color: '',
    message: '',
    border: ''
  }
  switch (item.status) {
    case '待审核':
      styleList.backgroundColor = '#ccc'
      styleList.color = '#fff'
      styleList.message = '查看进展'
      return styleList
    case '待报名':
      styleList.backgroundColor = '#1dbbae'
      styleList.color = '#fff'
      styleList.message = '人已报名'
      return styleList
    case '已签单':
      styleList.backgroundColor = '#3091e6'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case '待验收':
    case '已评价':
      styleList.backgroundColor = '#8f9ba7'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case '已中断':
      styleList.backgroundColor = '#fff'
      styleList.color = '#ccc'
      styleList.border = '1px solid #ccc'
      styleList.message = '查看进展'
      return styleList
  }
}
