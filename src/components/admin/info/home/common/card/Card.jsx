// @flow
import React from 'react'
import './card.css'
import ImgAvatar from '../../../../../../assets/avatar1.png'

export default class Card extends React.Component<{}> {
  render() {
    const academicTitle = (
      <span styleName="academic-title">{this.props.person.title}</span>
    )
    return (
      <div styleName="card-wrapper">
        <div styleName="avatar"><img src={ImgAvatar} /></div>
        <div styleName="detail">
          <div styleName="name">
            {this.props.person.name}
            {this.props.person.title ? academicTitle : ''}
          </div>
          <div styleName="school" >{this.props.person.school}</div>
          <div styleName="research-field">{this.props.person.field}</div>
        </div>
      </div>
    )
  }
}
