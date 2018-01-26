// @flow
import React from 'react'
import './talentItem.css'

type Props = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

export default class TalentItem extends React.Component<Props> {
  render() {
    const { similar } = this.props
    return (
      <div styleName="similar-item">
        <img styleName="avatar" src={similar.avatar} />
        <span styleName="name">{similar.name}</span>
        <span styleName="university-item">{similar.university} / {similar.title}</span>
      </div>
    )
  }
}
