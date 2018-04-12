import React from 'react'
import { Icon } from 'antd'
import './friendCard.css'
import ImgAvatar from 'src/assets/defaultAvatar.svg'

export default class FriendCard extends React.Component {
  render() {
    return (
      <div styleName="card-wrapper">
        <div styleName="avatar-wrapper"><img styleName="avatar" src={ImgAvatar} /></div>
        <div styleName="friend-detail">
          <div styleName="name">陈肖</div>
          <div styleName="location">电子科技大学</div>
          <div styleName="notes">备注：kiko项目负责人kiko项目负责人</div>
        </div>
        <div styleName="icons">
          <Icon type="form" styleName="edit" />
          <Icon type="delete" styleName="delete" />
        </div>
      </div>
    )
  }
}
