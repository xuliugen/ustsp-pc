import React from 'react'
import './header.css'

export default class Header extends React.Component {
  render() {
    return (
      <div styleName="title-container">
        <div styleName="title-wrapper">
          <span styleName="title">{this.props.title}</span>
        </div>
      </div>
    )
  }
}
