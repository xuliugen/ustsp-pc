// @flow
import React from 'react'
import './talentItem.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

type Props = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

export default class TalentItem extends React.Component<Props> {
  state = {
    avatar: this.props.similar.photo
  }

  onLoadAvatarError(a) {
    this.setState({
      avatar: defaultAvatar
    })
  }

  render() {
    const { similar } = this.props
    return (
      <div styleName="similar-item">
        <img styleName="avatar" src={this.state.avatar} onError={this.onLoadAvatarError.bind(this)} />
        <span styleName="name">{similar.realName}</span>
        <span styleName="university-item">{similar.school} / {similar.title}</span>
      </div>
    )
  }
}
