// @flow
import React from 'react'
import './project.css'
import ProjectItem from '../../../../common/project-item/ProjectItem'
import CardHeader from '../common/header/CardHeader'
import { ProjectApi } from 'src/ajax'

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

  async componentDidMount() {
    try {
      const { data } = await ProjectApi.fetchProjects()
      if (Array.isArray(data)) {
        this.setState({
          projects: data.slice(0, 8)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const projectItem = this.state.projects.map((item, idx) => {
      return (
        <div styleName="project-item-wrapper" key={idx}>
          <ProjectItem project={item} />
        </div>
      )
    })
    return (
      <div styleName="project-interested">
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的项目" />
        </div>
        {projectItem}
      </div>
    )
  }
}
