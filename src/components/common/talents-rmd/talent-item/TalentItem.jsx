// @flow
import React from 'react'
import { Link } from 'react-router-dom'
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
    let url = ''
    switch (parseInt(talent.type)) {
      case 1:
        url = `/student/${talent.id}`
        break
      case 2:
        url = `/teacher/${talent.id}`
        break
    }
    return (
      <div styleName="talent-item">
        <Link to={url}>
          <img styleName="avatar" src={talent.photo} />
          <span styleName="name">{talent.realName}</span>
        </Link>
        <span styleName="university-item">{talent.school} / {talent.title}</span>
      </div>
    )
  }
}
