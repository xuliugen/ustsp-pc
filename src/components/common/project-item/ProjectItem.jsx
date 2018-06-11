// @flow
import React from 'react'
import moment from 'moment'
import { Link } from 'react-router-dom'
import './projectItem.css'
import imgSee from './see.png'
import { projectStatusNum2Str } from 'src/common/formatter'

export default class ProjectItem extends React.Component {
  render() {
    const { project } = this.props
    const status = projectStatusNum2Str(project.status)
    return (
      <div styleName="project-item">
        <div>
          <div>
            <span styleName="title"><Link to={`/project/${project.id}`}>{project.projectName}</Link></span>
            {this.props.detail && (<span styleName="status">{status}</span>)}
          </div>
          {this.props.detail ? (
            <div styleName="time">
              <span>{project.subject}</span>
              <span>预计结束时间 {moment(project.endTime).format('YYYY-MM-DD')}</span>
            </div>
          ) : (
            <div styleName="time">
              <span>发布于 {moment(project.releaseTime).format('YYYY-MM-DD')}</span>
              <span>截止于 {moment(project.deadline).format('YYYY-MM-DD')}</span>
              <span><img src={imgSee} /> {project.projectView}</span>
            </div>
          )}
        </div>
        <div styleName="price">¥<span>{project.money}</span></div>
      </div>
    )
  }
}
