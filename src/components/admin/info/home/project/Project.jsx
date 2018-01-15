// @flow
import React from 'react'
import './project.css'
import ProjectItem from '../../../../common/project-item/ProjectItem'
import CardHeader from '../common/header/CardHeader'

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
      projects: [
        { title: '项目标题', school: '电子科技大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 12000, bgColor: '#8f9ba7' },
        { title: '长一点的项目标题', school: '西南财经大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 300, bgColor: '#8f9ba7' },
        { title: '项目标题', school: '电子科技大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 12000, bgColor: '#8f9ba7' },
        { title: '更加长一点点的项目标题', school: '四川大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 11000, bgColor: '#8f9ba7' },
        { title: '普通项目标题', school: '成都大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 9000, bgColor: '#8f9ba7' },
        { title: '项目标题', school: '西南石油大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 5000, bgColor: '#8f9ba7' },
        { title: '一个非常啰嗦复杂的项目标题', school: '西南民族大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 900000, bgColor: '#8f9ba7' },
        { title: '项目标题', school: '电子科技大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 12000, bgColor: '#8f9ba7' }
      ]
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
