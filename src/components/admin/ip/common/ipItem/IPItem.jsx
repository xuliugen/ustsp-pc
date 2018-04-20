import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import './IPItem.css'

@withRouter
export default class IPItem extends React.Component {
  handleSeeDetailClick() {
    this.props.history.push(`${this.props.match.url}/${this.props.patent.id}`)
  }

  getStatusName(status) {
    switch (status) {
      case 0:
        return '审核'
      case 1: case 2: case 3: case 4:
        return '询价'
      case 5:
        return '签订合同'
      case 6:
        return '公示'
      default:
        return ''
    }
  }

  render() {
    const { patent } = this.props
    return (
      <div styleName="wrapper">
        <div styleName="left">
          <div styleName="ip-title">
            {patent.patentName}
            <span styleName="inquire-price">{this.getStatusName(patent.status)}</span>
          </div>
          <div styleName="ip-info">
            <span>申请号：{patent.applicationNumber}</span>
            <span styleName="info-margin">主分类号：{patent.classificationNumber}</span>
            <span styleName="info-margin-last">申请日：{moment(patent.applicationDate).format('YYYY-MM-DD')}</span>
            <span>法律状态：{patent.legalStatus}</span>
          </div>
        </div>
        <div styleName="right">
          <div styleName="release-date">
            <span>发布于 {moment(patent.publicationDate).format('YYYY-MM-DD')}</span>
          </div>
          <div>
            <button styleName="ip-transfer-detail-btn" onClick={this.handleSeeDetailClick.bind(this)}>
              查看详情
            </button>
          </div>
        </div>
      </div>
    )
  }
}
