// @flow
import React from 'react'
import './introduction.css'

export default class Introduction extends React.Component {
  render() {
    return (
      <div styleName="intro">
        <p>{this.props.introduction}</p>
      </div>
    )
  }
}
