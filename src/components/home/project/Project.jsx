// @flow
import React from 'react'
import { ProjectApi } from 'src/ajax'
import './project.css'

import ProjectHeader from './header/Header'
import ProjectItem from '../../common/project-item/ProjectItem'

type ProjectObj = {
  title: string,
  school: string
  // ...
}

type State = {
  projects: Array<ProjectObj>
}

export default class Project extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      projects: []
    }
  }

  async componentWillMount() {
    try {
      const { data } = await ProjectApi.fetchProjects(5)
      if (Array.isArray(data)) {
        this.setState({
          projects: data
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="project">
        <div styleName="header-wrapper">
          <ProjectHeader />
        </div>
        {this.state.projects.map((item, idx) => {
          return (
            <div styleName="project-item-wrapper" key={idx}>
              <ProjectItem project={item.projectResearchInfo} />
            </div>
          )
        })}
      </div>
    )
  }
}
