import React from 'react'
import './ipItem.css'
import { Icon, message } from 'antd'
import moment from 'moment'
import { UserInfoApi } from 'src/ajax'

export default class IpItem extends React.Component {
  handleEdit(exp) {
    this.props.setVisible(true)
    this.props.setSelectedItem(exp)
  }

  async handleDelete(exp) {
    try {
      await UserInfoApi.deleteIp(exp.id)
      this.props.deleteItem(exp)
      message.success('删除成功')
    } catch (err) {
      message.error('删除失败')
      console.log(err)
    }
  }

  transfrmType(type) {
    let typeStr
    switch (type) {
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
    switch (status) {
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
    const typeStr = this.transfrmType(this.props.type)
    return (
      <div styleName="root">
        <div styleName="ip-name-container">
          <span styleName="ip-name">{this.props.name}</span>
          {!this.props.country
            ? <span styleName="ip-type"> {typeStr}</span>
            : <span styleName="ip-type"> {typeStr} / {this.props.country}</span>
          }
        </div>
        <div styleName="ip-info">
          <span styleName="ip-info-text">登记编号: {this.props.registrationNumber}</span>
          <span styleName="ip-info-text"> {this.transfrmStatus(this.props.status)}</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            {(this.props.applyDate) &&
              <li styleName="li-text">申请于 {moment(this.props.applyDate).format('YYYY-MM-DD')} / {this.props.applyUnit}</li>}
            <li styleName="li-text">发明人：{this.props.inventor}</li>
          </ul>
        </div>
        {this.props.editable && <div styleName="edit-container">
          <Icon type="edit" styleName="edit-icon" />
          <button styleName="edit-text" onClick={this.handleEdit.bind(this, this.props)}>编辑</button>
          <button styleName="edit-text" onClick={this.handleDelete.bind(this, this.props)}>删除</button>
        </div>}
      </div>
    )
  }
}
