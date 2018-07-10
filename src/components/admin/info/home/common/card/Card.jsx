// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import { userTypeNumToStr } from 'src/common/formatter'
import './card.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

export default class Card extends React.Component {
  state = {
    avatar: this.props.person.photo
  }

  onLoadAvatarError(a) {
    this.setState({
      avatar: defaultAvatar
    })
  }

  render() {
    const { person, notTouchable } = this.props
    const academicTitle = (
      <span styleName="academic-title">{this.props.person.title}</span>
    )
    if (notTouchable) {
      return (
        <div styleName="card-wrapper">
          <div styleName="avatar"><img src={this.state.avatar} onError={this.onLoadAvatarError.bind(this)} /></div>
          <div styleName="detail">
            <div styleName="name">
              {person.name || person.username}
              {person.title ? academicTitle : ''}
            </div>
            <div styleName="school" >{person.school}</div>
            <div styleName="research-field">{person.major}</div>
          </div>
        </div>
      )
    } else {
      return (
        <Link to={`/${userTypeNumToStr(person.type)}/${person.id}`}>
          <div styleName="card-wrapper">
            <div styleName="avatar"><img src={this.state.avatar} onError={this.onLoadAvatarError.bind(this)} /></div>
            <div styleName="detail">
              <div styleName="name">
                {person.name || person.username}
                {person.title ? academicTitle : ''}
              </div>
              <div styleName="school" >{person.school}</div>
              <div styleName="research-field">{person.major}</div>
            </div>
          </div>
        </Link>
      )
    }
  }
}
