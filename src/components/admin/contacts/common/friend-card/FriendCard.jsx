import React from 'react'
import { Icon } from 'antd'
import './friendCard.css'
// import ImgAvatar from 'src/assets/defaultAvatar.svg'

export default class FriendCard extends React.Component {
  render() {
    const { userInfo } = this.props.info
    return (
      <div styleName="root">
        <div styleName="avatar-wrapper"><img styleName="avatar" src={userInfo.avatar} /></div>
        <div styleName="friend-detail">
          <div styleName="name">{this.props.info.username}</div>
          <div styleName="location">{userInfo.location}</div>
          <div styleName="notes">备注：kiko项目负责人</div>
        </div>
        <div styleName="icons">
          <Icon type="form" styleName="edit" />
          <Icon type="delete" styleName="delete" />
        </div>
      </div>
    )
  }
}
