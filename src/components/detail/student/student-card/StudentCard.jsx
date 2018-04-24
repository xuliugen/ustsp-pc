import React from 'react'
import { Icon, Button, message } from 'antd'
import './studentCard.css'
import { MessageApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

@inject('userStore')
@observer
export default class StudentCard extends React.Component {
  constructor() {
    super()
    this.state = {
      disable: false,
      friend: false
    }
    this.handleAddFriends = this.handleAddFriends.bind(this)
    this.checkIsFriend = this.checkIsFriend.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    this.checkIsFriend(nextProps)
  }

  async checkIsFriend(prop) {
    try {
      const msg = await MessageApi.checkIsFriend(this.props.userStore.user.id, prop.stuInfo.id)
      if (msg.data > 0) {
        this.setState({
          friend: true
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  async handleAddFriends() {
    try {
      const msg = await MessageApi.sendAddFirend(this.props.userStore.user.id, this.props.stuInfo.id)
      if (msg.data === 0) {
        message.warn('已有添加好友请求')
      } else {
        message.success('发送添加好友请求成功')
      }
      this.setState({
        disable: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div styleName="student-card">
        <div styleName="read">
          <Icon type="eye" /><span styleName="read-number">{this.props.stuInfo.pageView}</span>
        </div>
        <div styleName="info-list">
          <img styleName="photo" src={this.props.stuInfo.photo} />
          <span styleName="name">{this.props.stuInfo.realName}</span>
          <span styleName="details">{this.props.stuInfo.school}</span>
          <span styleName="details">{this.props.stuInfo.major}</span>
          <div styleName="contact">
            <Icon styleName="contact-icon" type="wechat" /><span>{this.props.stuInfo.wechat}</span>
            <Icon type="qq" styleName="contact-icon" /><span>{this.props.stuInfo.qq}</span>
            <Icon type="mail" styleName="contact-icon" /><span>{this.props.stuInfo.email}</span>
          </div>
        </div>
        <div styleName="friend-status">
          {this.state.friend ? (
            <Button type="primary" icon="check" size="large" style={{backgroundColor: '#1dbbae', border: 'none'}}>互为好友</Button>
          ) : (
            <Button type="primary" icon="plus" size="large" onClick={this.handleAddFriends} disabled={this.state.disable} >加好友</Button>
          )}
        </div>
      </div>
    )
  }
}
