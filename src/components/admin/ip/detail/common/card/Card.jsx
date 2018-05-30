import React from 'react'
import './card.css'

export default class Card extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          {this.props.title}
        </div>
        <div styleName="content">
          {this.props.children}
        </div>
      </div>
    )
  }
}
