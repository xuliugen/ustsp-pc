// @flow
import React from 'react'
import './othersItem.css'

type Props = {
  title: string,
  date: string
}

export default class OthersItem extends React.Component<Props> {
  render() {
    const { others } = this.props
    return (
      <div styleName="others-item">
        <span styleName="title">{others.title}</span>
        <span styleName="date">{others.date}</span>
      </div>
    )
  }
}
