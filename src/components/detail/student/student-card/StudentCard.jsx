import React from 'react'
import { AddFriendBtn } from 'components/common'
import { Icon } from 'antd'
import './studentCard.css'
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
          <AddFriendBtn info={this.props.stuInfo} />
        </div>
      </div>
    )
  }
}
