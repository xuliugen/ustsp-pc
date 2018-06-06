import React from 'react'
import { AddFriendBtn } from 'components/common'
import { Icon } from 'antd'
import './infoManager.css'
import imgView from 'src/assets/ico_eye.png'
import imgAuth from './authority.png'

export default class InfoManager extends React.Component {
  render() {
    const { manager } = this.props
    // 暂时这样。。。
    manager.isValid = true
    return (
      <div styleName="root">
        <div>
          <img src={imgView} />
          <span styleName="view">{manager.pageView}</span>
        </div>
        <div styleName="detail">
          <img styleName="avatar" src={manager.photo} />
          <div styleName="name">
            <span>{manager.realName}</span>
            {manager.isValid ? <img src={imgAuth} style={{ verticalAlign: 'top' }} /> : ''}
          </div>
          <div styleName="basic">{manager.school}</div>
          <div styleName="contact">
            <Icon type="mail" styleName="contact-icon" /><span>{manager.email}</span>
            <Icon styleName="contact-icon" type="wechat" /><span>{manager.wechat}</span>
            <Icon type="qq" styleName="contact-icon" /><span>{manager.qq}</span>
          </div>
        </div>
        <AddFriendBtn info={manager} />
      </div>
    )
  }
}
