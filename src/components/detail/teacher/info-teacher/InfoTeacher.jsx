import React from 'react'
import { Icon, Button, message } from 'antd'
import { inject, observer } from 'mobx-react'
import './infoTeacher.css'
import { ContactsApi } from 'src/ajax'

@inject('userStore')
@observer
export default class InfoTeacher extends React.Component {
  constructor() {
    super()
    this.state = {
      disable: false
    }
    this.handleAdFriends = this.handleAdFriends.bind(this)
  }

  async handleAdFriends() {
    try {
      await ContactsApi.sendAddFirend(this.props.userStore.user.id, this.props.infoTeacher.id)
      message.success('已发送好友申请')
      this.setState({
        disable: true
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div styleName="info-teacher">
        <div styleName="read">
          <Icon type="eye" /><span styleName="read-number">{this.props.infoTeacher.pageView}</span>
        </div>
        <div styleName="info-list">
          <img styleName="photo" src={this.props.infoTeacher.photo} />
          <span styleName="name">{this.props.infoTeacher.realName}</span>
          <span styleName="details">{this.props.infoTeacher.title}</span>
          <span styleName="details">{this.props.infoTeacher.school}</span>
          <span styleName="details">擅长领域:{this.props.infoTeacher.major} / {this.props.infoTeacher.researchArea}</span>
          <div styleName="contact">
            <Icon styleName="contact-icon" type="wechat" /><span>{this.props.infoTeacher.wechat}</span>
            <Icon type="qq" styleName="contact-icon" /><span>{this.props.infoTeacher.qq}</span>
            <Icon type="mail" styleName="contact-icon" /><span>{this.props.infoTeacher.email}</span>
          </div>
        </div>
        <div styleName="friend-status">
          <Button type="primary" icon="plus" size="large" onClick={this.handleAdFriends} disabled={this.state.disable} >加好友</Button>
        </div>
      </div>
    )
  }
}
