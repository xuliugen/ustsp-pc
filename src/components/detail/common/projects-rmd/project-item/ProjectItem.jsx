// @flow
import React from 'react'
import './projectItem.css'

type Props = {
  name: string,
  major: string,
  money: string
}

export default class projectItem extends React.Component<Props> {
  render() {
    const { similar } = this.props
    return (
      <div styleName="project-item">
        <div styleName="project-info">
          <span styleName="project-name">{similar.name}</span>
          <span styleName="major">{similar.major})</span>
        </div>
        <span styleName="money">¥ {similar.money}</span>
      </div>
    )
  }
}
