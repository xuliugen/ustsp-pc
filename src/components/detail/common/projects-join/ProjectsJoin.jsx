// @flow
import React from 'react'
import { Icon } from 'antd'
import './projects.css'

type ProjectObj = {
  projectName: string,
  role: string,
  signUp: number,
  join: number,
  aspect: string,
  process: string
}

type State = {
  projects: Array<ProjectObj>
}

export default class Projects extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      projects: [
        { projectName: '项目名称', role: '发起人', signUp: 100, join: 20, aspect: '计算机技术', process: '进行中' },
        { projectName: '长一点项目名称', role: '发起人', signUp: 110, join: 22, aspect: '计算机技术', process: '进行中' },
        { projectName: '长长长长长长长项目名称', role: '参与者', signUp: 140, join: 20, aspect: '计算机技术', process: '进行中' },
        { projectName: '项目名称', role: '发起人', signUp: 100, join: 20, aspect: '前端编程', process: '已完成' },
        { projectName: '项目名称', role: '发起人', signUp: 100, join: 20, aspect: '前端编程', process: '已完成' }
      ]
    }
  }
  render() {
    const projectItem = this.state.projects.map((item, idx) => {
      return (
        <div key={idx} styleName="project-item">
          <span styleName="project-name">{item.projectName}</span>
          <span styleName="project-role">{item.role}</span>
          <span styleName="project-process">{item.signUp}人报名 / {item.join}人参与 / {item.aspect} / {item.process}</span>
        </div>
      )
    })
    return (
      <div>
        { projectItem }
        <a styleName="more-project">显示更多 <Icon type="down" /></a>
      </div>
    )
  }
}
