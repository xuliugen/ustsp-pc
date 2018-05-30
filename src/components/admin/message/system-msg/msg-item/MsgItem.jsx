import React from 'react'
// import ImgSystem from 'src/assets/systemIcon.png'
import { withRouter } from 'react-router-dom'
import { MessageApi } from 'src/ajax'
import './msgItem.css'
import moment from 'moment'
import { observer, inject } from 'mobx-react'

@inject('msgStore')
@observer
@withRouter
export default class MsgItem extends React.Component {
  setMsg(type) {
    switch (type) {
      case 1:
        return '项目审核通过'
      case 2:
        return '项目审核未通过'
      case 3:
        return '专利审核通过'
      case 4:
        return '专利审核未通过'
      default:
        return ''
    }
  }

  async handleClick(type) {
    try {
      await MessageApi.fetchOneMessage(this.props.item.id)
      switch (type) {
        case 1:
          this.props.history.push(`/admin/demand/published-demand/${this.props.item.relateId}`)
          break
        case 2:
          this.props.history.push(`/admin/demand/published-demand`)
          break
        case 3:
          this.props.history.push(`/admin/ip/transfer-ip/${this.props.item.relateId}`)
          break
        case 4:
          this.props.history.push(`/admin/ip/transfer-ip`)
          break
      }
      this.props.msgStore.dispatchGetCounts()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const { item } = this.props
    const msg = this.setMsg(item.messageType)
    return (
      <div styleName="root">
        <img src={item.senderAvatar} styleName="avatar" />
        <div styleName="msg-info">
          <div>
            <span>UppFind管理员</span>
            <span styleName="time">{moment(item.createTime).format('YYYY-MM-DD HH:mm')}</span>
          </div>
          <div onClick={this.handleClick.bind(this, item.messageType)} style={{ marginTop: '10px', cursor: 'pointer', color: item.status === 2 ? '#3091e6' : '' }} >
            {item.messageContent}
            <span>{msg}</span>
          </div>
        </div>
      </div>
    )
  }
}
