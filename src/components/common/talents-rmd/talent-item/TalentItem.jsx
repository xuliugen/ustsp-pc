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
    const { talent } = this.props
    return (
      <div styleName="talent-item">
        <img styleName="avatar" src={talent.photo} />
        <span styleName="name">{talent.realName}</span>
        <span styleName="university-item">{talent.school} / {talent.title}</span>
      </div>
    )
  }
}
