import React from 'react'
import './talentItem.css'
import imgFire from './fire.png'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

export default class TalentItem extends React.Component {
  state = {
    avatar: this.props.talent.photo
  }

  onLoadAvatarError(a) {
    this.setState({
      avatar: defaultAvatar
    })
  }

  render() {
    return (
      <div styleName="talentItem-container">
        <a href="/" styleName="talent-avatar-container">
          <img styleName="talent-avatar" src={this.state.avatar} onError={this.onLoadAvatarError.bind(this)} />
          <div styleName="hoverLayer">
            <img src={imgFire} width="22" height="24" alt="头像" />
            <div styleName="avatar-hoverText">
              <span styleName="highlight">人气</span>&nbsp;{this.props.talent.pageView}
            </div>
          </div>
        </a>
        <div styleName="talent-info-box">
          <a href="/" styleName="info-name">{this.props.talent.realName}</a>
          <div styleName="info-title">{this.props.talent.title}</div>
          <div styleName="info-department">{this.props.talent.major}</div>
        </div>
      </div>
    )
  }
}
