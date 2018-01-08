// @flow
import React from 'react'
import './project.css'
import ProjectHeader from './header/Header'
import ProjectItem from './project-item/ProjectItem'

const ITEMS: Array<{}> = [
  {title: '项目标题', school: '电子科技大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 1346, price: 12000, bgColor: '#1dbbae'},
  {title: '第二个项目标题', school: '西南石油大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 890, price: 9000, bgColor: '#2b7dd6'},
  {title: 'An English title project', school: '四川大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 890, price: 10000, bgColor: '#1dbbae'},
  {title: '长度为10个字以上的标题样式', school: '西南民族大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 3000, price: 500, bgColor: '#2b7dd6'},
  {title: '某一个标题', school: '成都大学', startTime: '2017-11-30', endTime: '2017-12-30', visitNum: 12, price: 500, bgColor: '#1dbbae'}
]

export default class Project extends React.Component<{}> {
  render() {
    const projectItem = ITEMS.map((item) => {
      return (
        <div styleName="project-item-wrapper">
          <ProjectItem title={item.title} school={item.school} startTime={item.startTime} endTime={item.endTime} visitNum={item.visitNum} price={item.price} bgColor={item.bgColor} />
        </div>
      )
    })
    return (
      <div styleName="project">
        <div styleName="header-wrapper">
          <ProjectHeader />
        </div>
        {projectItem}
      </div>
    )
  }
}
