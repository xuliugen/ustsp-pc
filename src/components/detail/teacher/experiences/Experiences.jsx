// @flow
import React from 'react'
import './experience.css'

type ExperienceObj = {
  name: string,
  category: string,
  major: string,
  intro: string,
  durationStart: string,
  durationEnd: string
}

type State = {
  experiences: Array<ExperienceObj>
}

export default class Experiences extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      experiences: [
        { name: '项目名称1', category: '学术类', major: '计算机技术方向', intro: '哈哈哈哈哈哈哈', durationStart: '2010.06.21', durationEnd: '2011.03.03' },
        { name: '项目名称2', category: '学术类', major: '计算机技术方向', intro: '哈哈hhahha哈哈哈哈哈', durationStart: '2010.06.21', durationEnd: '2011.03.03' }
      ]
    }
  }
  render() {
    const experienceItem = this.state.experiences.map((item, idx) => {
      return (
        <div key={idx} styleName="experience-item">
          <span styleName="name">{item.name}</span>
          <span styleName="duration">{item.durationStart} - {item.durationEnd}</span>
          <span styleName="category">{item.category} / {item.major}</span>
          <p>{item.intro}</p>
        </div>
      )
    })
    return (
      <div>{ experienceItem }</div>
    )
  }
}
