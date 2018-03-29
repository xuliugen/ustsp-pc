import React from 'react'
import { Icon, Avatar } from 'antd'
import './signCardA.css'
import ImgAvatar from 'src/assets/defaultAvatar.svg'

export default class SignCardA extends React.Component {
  render() {
    return (
      <div>
        <div styleName="title">签订合同</div>
        <div styleName="content">
          <div styleName="message">
            <Icon type="check-circle" style={{ color: '#62f326', fontSize: '30px' }} />
            <span style={{ marginLeft: '20px' }} >签订合同请求已经发送，等待购买者确认。</span>
          </div>
          <div styleName="partyb">
            <div styleName="info-title">
              受让方信息
            </div>
            <div styleName="partyb-info">
              <div styleName="partyb-avatar">
                <Avatar src={ImgAvatar} icon="user" />
                <span>&nbsp;&nbsp;吴彦祖</span>
              </div>
              <span>教授/中央财经大学-本科</span>
              <span>签订发起时间：2018-01-10 16:30:56</span>
              <span>转让金额：玖拾玖万玖仟玖佰玖拾整</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
