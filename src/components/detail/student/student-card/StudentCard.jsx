import React from 'react'
import { Icon, Button } from 'antd'
import avatar2 from 'src/assets/avatar2.png'
import './studentCard.css'

export default class StudentCard extends React.Component {
  constructor() {
    super()
    this.state = {
      name: '李长珊',
      avatar: avatar2,
      read: 1145,
      university: '中国科学院 /计算技术研究所',
      major: '擅长领域:计算技术 / 前端编程',
      wechat: 'wfd560823',
      qq: 999999999,
      email: 'wfd@163.com'
    }
  }
  render() {
    const studentInfo = this.state
    return (
      <div styleName="student-card">
        <div styleName="read">
          <Icon type="eye" /><span styleName="read-number">{studentInfo.read}</span>
        </div>
        <div styleName="info-list">
          <img styleName="photo" src={studentInfo.avatar} />
          <span styleName="name">{studentInfo.name}</span>
          <span styleName="details">{studentInfo.university}</span>
          <span styleName="details">{studentInfo.major}</span>
          <div styleName="contact">
            <Icon styleName="contact-icon" type="wechat" /><span>{studentInfo.wechat}</span>
            <Icon type="qq" styleName="contact-icon" /><span>{studentInfo.qq}</span>
            <Icon type="mail" styleName="contact-icon" /><span>{studentInfo.email}</span>
          </div>
        </div>
        <div styleName="friend-status">
          <Button type="primary" icon="check" size="large">互为好友</Button>
        </div>
      </div>
    )
  }
}
