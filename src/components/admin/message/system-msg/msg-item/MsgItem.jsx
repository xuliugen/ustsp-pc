import React from 'react'
import { Checkbox } from 'antd'
import ImgSystem from 'src/assets/systemIcon.png'
import './msgItem.css'

export default class MsgItem extends React.Component {
  render() {
    return (
      <div styleName="msg-item-wrapper">
        <div styleName="item-detail">
          <img src={ImgSystem} styleName="avatar" />
          <div styleName="msg-info">
            <div>
              <span>UppFind管理员</span>
              <span styleName="time">2018-01-24 19:20</span>
            </div>
            <div styleName="content">
              尊敬的用户15682032376您好，感谢您注册使用UppFind！
            </div>
          </div>
        </div>
        {this.props.mgnt ? <Checkbox /> : ''}
      </div>
    )
  }
}
