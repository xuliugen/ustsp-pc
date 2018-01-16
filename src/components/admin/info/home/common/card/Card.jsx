// @flow
import React from 'react'
import './card.css'

export default class Card extends React.Component<{}> {
  render() {
    // const academicTitle = (
    //   <span styleName="academic-title">{this.props.people.title}</span>
    // )
    return (
      <div styleName="card-wrapper">
        <div styleName="avatar"><img src="" /></div>
        <div styleName="detail">
          <span>王德福</span>
          <span>王德福</span>

        </div>
      </div>
    )
  }
}
