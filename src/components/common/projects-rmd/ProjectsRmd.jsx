
// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import ProjectItem from './project-item/ProjectItem'
import { ProjectApi } from 'src/ajax'
import './projectsRmd.css'

export default class ProjectsRmd extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      projects: []
    }
  }

  async componentWillMount() {
    try {
      const { data } = await ProjectApi.fetchRmdProjects(4)
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
    const projectItem = this.state.projects.map((item, idx) => {
      return <ProjectItem project={item.projectResearchInfo} key={idx} />
    })
    return (
      <div styleName="similar">
        <Header title="优秀项目推荐" />
        {projectItem}
      </div>
    )
  }
}
