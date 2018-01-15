import React from 'react'
import './home.css'
import Project from './project/Project'

export default class Home extends React.Component {
  render() {
    return (
      <div styleName="info-home-wrapper">
        <Project />
        <div>teacher</div>
        <div>student</div>
        <div>company</div>
      </div>
    )
  }
}
