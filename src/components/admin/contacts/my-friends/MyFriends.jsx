import React from 'react'
import './myFriends.css'
import { Row, Col } from 'antd'
import FriendCard from './friend-card/FriendCard'

export default class MyFriends extends React.Component {
  render() {
    return (
      <div>
        <div styleName="title">
          <span styleName="title-info">我的好友</span>
        </div>
        <div styleName="content">
          <Row gutter={16}>
            <Col span={6}><FriendCard /></Col>
            <Col span={6}><FriendCard /></Col>
            <Col span={6}><FriendCard /></Col>
            <Col span={6}><FriendCard /></Col>
            <Col span={6}><FriendCard /></Col>
            <Col span={6}><FriendCard /></Col>
          </Row>
        </div>
      </div>
    )
  }
}
