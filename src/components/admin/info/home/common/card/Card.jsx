// @flow
import React from 'react'
import './card.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

export default class Card extends React.Component<{}> {
  state = {
    avatar: this.props.person.photo
  }

  onLoadAvatarError(a) {
    this.setState({
      avatar: defaultAvatar
    })
  }

  render() {
    const academicTitle = (
      <span styleName="academic-title">{this.props.person.title}</span>
    )
    return (
      <div styleName="card-wrapper">
        <div styleName="avatar"><img src={this.state.avatar} onError={this.onLoadAvatarError.bind(this)} /></div>
        <div styleName="detail">
          <div styleName="name">
            {this.props.person.name}
            {this.props.person.title ? academicTitle : ''}
          </div>
          <div styleName="school" >{this.props.person.school}</div>
          <div styleName="research-field">{this.props.person.major}</div>
        </div>
      </div>
    )
  }
}
