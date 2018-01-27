import React from 'react'
import { Icon, Button } from 'antd'
import './studentCard.css'

export default class StudentCard extends React.Component {
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
          <Button type="primary" icon="check" size="large">互为好友</Button>
        </div>
      </div>
    )
  }
}
