// @flow
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
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
            <div styleName="title"><Link to={`/project/${project.id}`}>{project.projectName}</Link></div>
            <div styleName="school" style={{backgroundColor: project.bgColor}} >{project.school}</div>
          </div>
          <div styleName="time">
            <span>发布于 {moment(project.releaseTime).format('YYYY-MM-DD')}</span>
            <span>截止于 {moment(project.dealine).format('YYYY-MM-DD')}</span>
            <span><img src={imgSee} /> {project.projectView}</span>
          </div>
        </div>
        <div styleName="price">¥<span>{project.money}</span></div>
      </div>
    )
  }
}
