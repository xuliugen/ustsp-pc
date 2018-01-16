import React from 'react'
import './home.css'
import Project from './project/Project'
import Teacher from './teacher/Teacher'

export default class Home extends React.Component {
  render() {
    return (
      <div styleName="info-home-wrapper">
        <div styleName="pts-container">
          <div styleName="project-wrapper">
            <Project />
          </div>
          <div styleName="ts-container">
            <Teacher />
            <div>student</div>
          </div>
        </div>
        <div>company</div>
      </div>
    )
  }
}
