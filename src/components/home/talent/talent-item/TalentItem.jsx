// @flow
import React from 'react'
import './talentItem.css'
import imgAvatar from './avatar2.png'
import imgFire from './fire.png'

type Props = {
}

export default class TalentItem extends React.Component<Props> {
  render() {
    return (
      <div styleName="talentItem-container">
        <a href="/" styleName="talent-avatar-container">
          <img styleName="talent-avatar" src={imgAvatar} />
          <div styleName="hoverLayer">
            <img src={imgFire} width="22" height="24" />
            <div styleName="avatar-hoverText">
              <span styleName="highlight">人气</span>&nbsp;1234
            </div>
          </div>
        </a>
        <div styleName="talent-info-box">
          <a href="/" styleName="info-name">张丽</a>
          <div styleName="info-title">电子科技大学教授</div>
          <div styleName="info-department">计算机系</div>
        </div>
      </div>
    )
  }
}
