import React from 'react'
import './iPItem.css'
import { Icon } from 'antd'
import moment from 'moment'

export default class IPItem extends React.Component<{}> {
  constructor() {
    super()
    this.transfrmType = this.transfrmType.bind(this)
    this.transfrmStatus = this.transfrmStatus.bind(this)
  }
  transfrmType(type) {
    let typeStr
    switch (this.props.ip.type) {
      case 0:
        typeStr = '发明'
        break
      case 1:
        typeStr = '实用新型'
        break
      case 2:
        typeStr = '外观设计'
        break
    }
    return typeStr
  }

  transfrmStatus(status) {
    let statusStr
    switch (this.props.ip.status) {
      case 1:
        statusStr = '已受理'
        break
      case 2:
        statusStr = '未受理'
        break
    }
    return statusStr
  }

  render() {
    return (
      <div styleName="ip">
        <div styleName="ip-name-container">
          <span styleName="ip-name">{this.props.ip.name}</span>
          <span styleName="ip-type"> {this.transfrmType(this.props.ip.type)} / {this.props.ip.country}</span>
        </div>
        <div styleName="ip-info">
          <span styleName="ip-info-text">登记编号: {this.props.ip.registrationNumber}</span>
          <span styleName="ip-info-text"> {this.transfrmStatus(this.props.ip.status)}</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            <li styleName="li-text">申请于 {moment(this.props.ip.applyDate).format('YYYY-MM-DD')} / {this.props.ip.applyUnit}</li>
            <li styleName="li-text">发明人：{this.props.ip.inventor}</li>
          </ul>
        </div>
        <div styleName="edit-container">
          <Icon type="edit" styleName="edit-icon" />
          <button styleName="edit-text" >编辑</button>
        </div>
      </div>
    )
  }
}
