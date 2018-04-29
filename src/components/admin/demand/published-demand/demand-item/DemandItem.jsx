import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import './demandItem.css'

@withRouter
export default class DemandItem extends React.Component<{}> {
  handleSeeDetailClick({ id, status }) {
    if (status !== -1) {
      this.props.history.push(`${this.props.match.url}/${id}`)
    } else {
      this.props.history.push(`/admin/demand/modify/${id}`)
    }
  }

  render() {
    const styleList = setStyleList(this.props.demand)

    return (
      <div styleName="demand-item">
        <div styleName="left">
          <div styleName="demand-title">
            <span style={{ cursor: 'pointer' }} onClick={this.handleSeeDetailClick.bind(this, this.props.demand)}>{this.props.demand.projectName}</span>
            <span styleName="demand-status" style={{ backgroundColor: styleList.backgroundColor, color: styleList.color, border: styleList.border }}>{styleList.status}</span>
          </div>
          <div styleName="demand-base">
            <span>{this.props.demand.subject}</span>
            <span styleName="recieve-type">接包类型：{this.props.demand.toOriented}</span>
            <span>金额 ¥{this.props.demand.money}</span>
          </div>
        </div>
        <div styleName="right">
          <div styleName="demand-time">发布于 {moment(this.props.demand.releaseTime).format('YYYY-MM-DD')}</div>
          <div styleName="demand-detail-btn">
            <button onClick={this.handleSeeDetailClick.bind(this, this.props.demand)} disabled={styleList.disabled}>
              {this.props.demand.number ? (<span style={{ color: '#3091e6' }}>{this.props.demand.number}</span>) : ''}{styleList.message}
            </button>
          </div>
        </div>
      </div>
    )
  }
}
/* toAudit(0, "审核"),
    applying(1, "报名中"),
    toSign(2, "待签单"),
    underway(3, "进行中"),
    toCheck(4, "待验收"),
    toEvaluate(5, "评价"),
    finished(6, "完成"), */
function setStyleList(item) {
  let styleList = {
    status: '',
    backgroundColor: '',
    color: '',
    message: '',
    border: ''
  }
  switch (item.status) {
    case -1:
      styleList.status = '审核未通过'
      styleList.backgroundColor = '#DB4D6D'
      styleList.color = '#fff'
      styleList.message = '修改'
      return styleList
    case 0:
      styleList.status = '审核'
      styleList.backgroundColor = '#ccc'
      styleList.color = '#fff'
      styleList.message = '等待审核'
      styleList.disabled = true
      return styleList
    case 1:
      styleList.status = '报名中'
      styleList.backgroundColor = '#1dbbae'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case 2:
      styleList.status = '待签单'
      styleList.backgroundColor = '#3091e6'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case 3:
      styleList.status = '进行中'
      styleList.backgroundColor = '#3091e6'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case 4:
      styleList.status = '待验收'
      styleList.backgroundColor = '#8f9ba7'
      styleList.color = '#fff'
      styleList.message = '查看详细'
      return styleList
    case 5:
      styleList.status = '评价'
      styleList.backgroundColor = '#fff'
      styleList.color = '#ccc'
      styleList.border = '1px solid #ccc'
      styleList.message = '查看进展'
      return styleList
    case 6:
      styleList.status = '完成'
      styleList.backgroundColor = '#fff'
      styleList.color = '#ccc'
      styleList.border = '1px solid #ccc'
      styleList.message = '查看进展'
      return styleList
    case 13:
      styleList.status = '中断'
      styleList.backgroundColor = '#DB4D6D'
      styleList.color = '#fff'
      styleList.message = '查看详情'
      return styleList
    default:
      return styleList
  }
}
