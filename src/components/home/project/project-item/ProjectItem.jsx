// @flow
import React from 'react'
import './projectItem.css'
import imgSee from './see.png'

type ProjectObj = {
  title: string,
  school: string
  // ...
}

type Props = {
  project: ProjectObj
}

export default class ProjectItem extends React.Component<Props> {
  render() {
    const { project } = this.props
    return (
      <div styleName="project-item">
        <div styleName="item">
          <div styleName="head">
            <div styleName="title">{project.title}</div>
            <div styleName="school" style={{backgroundColor: project.bgColor}} >{project.school}</div>
          </div>
          <div styleName="time">
            <span>发布于 {project.startTime}</span>
            <span>截止于 {project.endTime}</span>
            <span><img src={imgSee} /> {project.visitNum}</span>
          </div>
        </div>
        <div styleName="price">¥<span>{project.price}</span></div>
      </div>
    )
  }
}
