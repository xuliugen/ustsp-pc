import React from 'react'
import { Icon, Button } from 'antd'
import './infoTeacher.css'

export default class InfoTeacher extends React.Component {
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
          <Button type="primary" icon="plus" size="large">加好友</Button>
        </div>
      </div>
    )
  }
}
