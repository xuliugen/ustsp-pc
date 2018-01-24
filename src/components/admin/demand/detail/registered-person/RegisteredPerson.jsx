import React from 'react'
import './registeredPerson.css'
import { Avatar } from 'antd'

export default class RegisteredPerson extends React.Component {
  render() {
    return (
      <div styleName="person-item">
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <Avatar
            // src=''
            icon="user" />
          <span styleName="name">钟爽</span>
          <Avatar icon="man" size="small" styleName="render">男</Avatar>
        </div>
        <span styleName="person-info">学生 / 西南财经大学 / email@163.com </span>
        <span styleName="register-time">报名时间：2014-10-24 19:20  </span>
      </div>
    )
  }
}
