// @flow
import React from 'react'
import './similarItem.css'

type SimilarObj = {
  name: string,
  university: string,
  title: string,
  avatar: string
}

type Props = {
  similar: Array<SimilarObj>
}

export default class SimilarItem extends React.Component<Props> {
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
