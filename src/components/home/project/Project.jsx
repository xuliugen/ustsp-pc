// @flow
import React from 'react'
import './project.css'
import Header from './header/Header'
import ProjectItem from './project-item/ProjectItem'

export default class Project extends React.Component<{}> {
  render() {
    const visitNum = [1346, 890, 890, 3000, 12]
    const price = [12000, 9000, 10000, 500, 500]
    return (
      <div styleName="project">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="project-item-wrapper">
          <ProjectItem title="项目标题" school="电子科技大学" startTime="2017-11-30" endTime="2017-12-30" visitNum={visitNum[0]} price={price[0]} bgColor="#1dbbae" />
        </div>
        <span styleName="line" />
        <div styleName="project-item-wrapper">
          <ProjectItem title="第二个项目标题" school="西南石油大学" startTime="2017-11-30" endTime="2017-12-30" visitNum={visitNum[1]} price={price[1]} bgColor="#2b7dd6" />
        </div>
        <span styleName="line" />
        <div styleName="project-item-wrapper">
          <ProjectItem title="An English title project" school="四川大学" startTime="2017-11-30" endTime="2017-12-30" visitNum={visitNum[2]} price={price[2]} bgColor="#1dbbae" />
        </div>
        <span styleName="line" />
        <div styleName="project-item-wrapper">
          <ProjectItem title="长度为10个字以上的标题样式" school="西南民族大学" startTime="2017-11-30" endTime="2017-12-30" visitNum={visitNum[3]} price={price[3]} bgColor="#2b7dd6" />
        </div>
        <span styleName="line" />
        <div styleName="project-item-wrapper">
          <ProjectItem title="某一个标题" school="成都大学" startTime="2017-11-30" endTime="2017-12-30" visitNum={visitNum[4]} price={price[4]} bgColor="#1dbbae" />
        </div>
        <span styleName="line" />
      </div>
    )
  }
}
