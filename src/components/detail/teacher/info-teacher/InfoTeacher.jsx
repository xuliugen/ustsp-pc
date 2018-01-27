// @flow
import React from 'react'
import { Icon, Button } from 'antd'
import avatar1 from 'src/assets/avatar1.png'
import './infoTeacher.css'

type State = {
  name: string,
  avatar: string,
  read: number,
  title: string,
  university: string,
  major: string,
  wechat: string,
  qq: number,
  email: string
}

export default class InfoTeacher extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      name: '王德福',
      avatar: avatar1,
      read: 1145,
      title: '教授 / 博士',
      university: '中国科学院 /计算技术研究所',
      major: '擅长领域:计算技术 / 前端编程',
      wechat: 'wfd560823',
      qq: 999999999,
      email: 'wfd@163.com'
    }
  }
  render() {
    const teacherInfo = this.state
    return (
      <div styleName="info-teacher">
        <div styleName="read">
          <Icon type="eye" /><span styleName="read-number">{teacherInfo.read}</span>
        </div>
        <div styleName="info-list">
          <img styleName="photo" src={teacherInfo.avatar} />
          <span styleName="name">{teacherInfo.name}</span>
          <span styleName="details">{teacherInfo.title}</span>
          <span styleName="details">{teacherInfo.university}</span>
          <span styleName="details">{teacherInfo.major}</span>
          <div styleName="contact">
            <Icon styleName="contact-icon" type="wechat" /><span>{teacherInfo.wechat}</span>
            <Icon type="qq" styleName="contact-icon" /><span>{teacherInfo.qq}</span>
            <Icon type="mail" styleName="contact-icon" /><span>{teacherInfo.email}</span>
          </div>
        </div>
        <div styleName="friend-status">
          <Button type="primary" icon="plus" size="large">加好友</Button>
        </div>
      </div>
    )
  }
}
