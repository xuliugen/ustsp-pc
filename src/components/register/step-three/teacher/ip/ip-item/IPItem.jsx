import React from 'react'
import './iPItem.css'
import { Icon } from 'antd'

export default class IPItem extends React.Component<{}> {
  render() {
    return (
      <div styleName="ip">
        <div styleName="ip-name-container">
          <span styleName="ip-name">{this.props.ip.name}</span>
          <span styleName="ip-type">{this.props.ip.type} / {this.props.ip.country}</span>
        </div>
        <div styleName="ip-info">
          <span styleName="ip-info-text">ID :{this.props.ip.registrationNumber}ID: 3132131231</span>
          <span styleName="ip-info-text">{this.props.ip.registrationNumber}</span>
          <span styleName="ip-info-text">{this.props.ip.type}</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            <li styleName="li-text">申请于 {this.props.ip.applyDate} / {this.props.ip.applyUnit}</li>
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
