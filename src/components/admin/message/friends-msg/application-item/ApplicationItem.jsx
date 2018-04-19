import React from 'react'
import { Button } from 'antd'
import './applicationItem.css'
import ImgAvatar from 'src/assets/defaultAvatar.svg'

export default class ApplicationItem extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="detail">
          <img src={ImgAvatar} styleName="avatar" />
          <div styleName="application-info">
            <div>
              <span>小蜜蜂工作室</span>
              <span styleName="time">2018-01-24 19:20</span>
            </div>
            <div styleName="notes">
              <span styleName="applicant">小蜜蜂工作室</span>想申请成为您的好友
            </div>
          </div>
        </div>
        <Button type="primary" style={{ marginRight: '40px' }} >同意</Button>
      </div>
    )
  }
}
