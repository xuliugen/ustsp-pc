// @flow
import React from 'react'
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
      projects: [
        { title: '基于Android的翻页动画设计与实现', school: '电子科技大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 12000, bgColor: '#1dbbae' },
        { title: '网络传输质量动态监测程序', school: '西南石油大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 890, price: 9000, bgColor: '#2b7dd6' },
        { title: '基于UNIX/Linux的自学系统', school: '四川大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 890, price: 10000, bgColor: '#1dbbae' },
        { title: '基于ClientServer结构的多进程调度平衡系统', school: '西南民族大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 3000, price: 500, bgColor: '#2b7dd6' },
        { title: '数据库增量数据同步', school: '成都大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 12, price: 500, bgColor: '#1dbbae' }
      ]
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
              <ProjectItem project={item} />
            </div>
          )
        })}
      </div>
    )
  }
}
