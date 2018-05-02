import React from 'react'
import './home.css'
import Project from './project/Project'
import Teacher from './teacher/Teacher'
import Student from './student/Student'
// import Company from './company/Company'

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
            <Student />
          </div>
        </div>
        {/* <Company /> */}
      </div>
    )
  }
}
