import React from 'react'
import { Button, message } from 'antd'
import './applicationItem.css'
// import ImgAvatar from 'src/assets/defaultAvatar.svg'
import { ContactsApi, MessageApi } from 'src/ajax'
import moment from 'moment'
import { observer, inject } from 'mobx-react'

@inject('msgStore')
@observer
export default class ApplicationItem extends React.Component {
  state = {
    disable: false
  }

  async handleAgree(item) {
    try {
      const msg = await MessageApi.checkIsFriend(item.receiverId, item.senderId)
      if (msg.data > 0) {
        message.warn('你们已经是好友了')
      } else {
        await ContactsApi.addFriendAgreement(item.receiverId, item.senderId, item.id)
        message.success('添加好友成功')
        this.setState({
          disable: true
        })
      }
      this.props.msgStore.dispatchGetCounts()
    } catch (error) {
      console.log(error)
    }
  }

  async handleRefuse(item) {
    try {
      await MessageApi.rejectAddFirend(item.receiverId, item.senderId, item.id)
      message.success('拒绝添加成功')
      this.setState({
        disable: true
      })
      this.props.msgStore.dispatchGetCounts()
    } catch (error) {
      console.log(error)
    }
  }

  setMsgContent(type) {
    // messageType 11申请添加 12拒绝添加
    switch (type) {
      case 11:
        return '想申请成为您的好友'
      case 12:
        return '拒绝了您的好友请求'
      default:
        break
    }
  }

  render() {
    const { item } = this.props
    const msgContent = this.setMsgContent(item.messageType)
    return (
      <div styleName="root">
        <div styleName="detail">
          <img src={item.senderAvatar} styleName="avatar" />
          <div styleName="application-info">
            <div>
              <span>{item.messageContent}</span>
              <span styleName="time">{moment(item.updateTime).format('YYYY-MM-DD HH:mm:ss')}</span>
            </div>
            <div styleName="notes">
              <span styleName="applicant">{item.senderName}</span>{msgContent}
            </div>
          </div>
        </div>
        {item.messageType === 12 ? '' : (
          // status 1已读 2未读 3同意 4拒绝
          item.status === 2 ? (
            <div>
              <Button type="primary" style={{ marginRight: '40px' }} onClick={this.handleAgree.bind(this, item)} disabled={this.state.disable} >同意</Button>
              <span styleName="refuse" onClick={this.handleRefuse.bind(this, item)} >拒绝</span>
            </div>
          ) : (
            <Button disabled style={{ marginRight: '40px' }}>已处理</Button>
          )
        )}
      </div>
    )
  }
}
