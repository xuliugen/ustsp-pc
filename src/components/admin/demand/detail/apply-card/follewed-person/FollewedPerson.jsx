import React from 'react'
import './follewedPerson.css'
import { Avatar } from 'antd'

export default class FollewedPerson extends React.Component {
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
        <span styleName="person-info">学生 / 西南财经大学</span>
      </div>
    )
  }
}
