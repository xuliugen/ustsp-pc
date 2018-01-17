// @flow
import React from 'react'
import './talentItem.css'
import imgFire from './fire.png'

type Props = {
}

export default class TalentItem extends React.Component<Props> {
  render() {
    return (
      <div styleName="talentItem-container">
        <a href="/" styleName="talent-avatar-container">
          <img styleName="talent-avatar" src={this.props.talent.imgAvatar} />
          <div styleName="hoverLayer">
            <img src={imgFire} width="22" height="24" />
            <div styleName="avatar-hoverText">
              <span styleName="highlight">人气</span>&nbsp;1234
            </div>
          </div>
        </a>
        <div styleName="talent-info-box">
          <a href="/" styleName="info-name">{this.props.talent.name}</a>
          <div styleName="info-title">{this.props.talent.title}</div>
          <div styleName="info-department">{this.props.talent.department}</div>
        </div>
      </div>
    )
  }
}
