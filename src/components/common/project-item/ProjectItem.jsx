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
  convertStatus(status) {
    switch (status) {
      case 0:
        return '待审核'
      case 1:
        return '报名中'
      case 2:
        return '待签单'
      case 3:
        return '进行中'
      case 4:
        return '待验收'
      case 5:
        return '评价'
      case 6:
        return '完成'
      case 13:
        return '中断'
      default:
        return ''
    }
  }

  render() {
    const { project } = this.props
    const status = this.convertStatus(project.status)
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
