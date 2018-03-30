import React from 'react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import './TransferIPItem.css'

@withRouter
export default class TransferIPItem extends React.Component {
  handleSeeDetailClick(id) {
    this.props.history.push(`${this.props.match.url}/${id}`)
  }

  render() {
    const transferIP = {
      ipName: '基于移动视窗平台的多卡手机网络连接选择方法及装置',
      ipID: 'CN200810113789.6',
      ipClassID: 'H04Q7/32',
      applyDate: (new Date()).toLocaleDateString(),
      legalStatus: 0,
      transferStatus: 0,
      releaseDate: (new Date()).toLocaleDateString()
    } // 暂时代替props
    const transferStatusGroup = ['询价中'] // 目前不知道专利转让状态集合，后面修改
    const legalStatusGroup = ['专利权维持'] // 同上
    const bntTextGroup = ['查看详细'] // 同上
    const statusStyle = setStatusStyle(transferIP.transferStatus)

    return (
      <div styleName="wrapper">
        <div styleName="left">
          <div styleName="ip-title">
            {transferIP.ipName}
            <span styleName={`${statusStyle}`}>{transferStatusGroup[transferIP.transferStatus]}</span>
          </div>
          <div styleName="ip-info">
            <span>申请号：{transferIP.ipID}</span>
            <span styleName="info-margin">主分类号：{transferIP.ipClassID}</span>
            <span styleName="info-margin-last">申请日：{moment(transferIP.applyDate).format('YYYY-MM-DD')}</span>
            <span>法律状态：{legalStatusGroup[transferIP.legalStatus]}</span>
          </div>
        </div>
        <div styleName="right">
          <div styleName="release-date">
            <span>发布于 {moment(transferIP.releaseDate).format('YYYY-MM-DD')}</span>
          </div>
          <div styleName="see-detail-btn">
            <button onClick={this.handleSeeDetailClick.bind(this, transferIP.ipID)}>
              {bntTextGroup[transferIP.transferStatus]}
            </button>
          </div>
        </div>
      </div>
    )
  }
}

function setStatusStyle(status) {
  const statusStyleGroup = ['inquire-price']
  return statusStyleGroup[status]
}
