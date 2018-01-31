// @flow
import React from 'react'
import { Link } from 'react-router-dom'
import './projectItem.css'

type Props = {
  name: string,
  major: string,
  money: string
}

export default class projectItem extends React.Component<Props> {
  render() {
    const { project } = this.props
    return (
      <div styleName="project-item">
        <div styleName="project-info">
          <Link to={`/project/${project.id}`}>
            <span styleName="project-name">{project.projectName}</span>
          </Link>
          <span styleName="major">{project.subject}</span>
        </div>
        <span styleName="money">¥ {project.money}</span>
      </div>
    )
  }
}
