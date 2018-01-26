// @flow
import React from 'react'
import './educations.css'

type EducationObj = {
  university: string,
  degree: string,
  department: string,
  major: string,
  grade: number,
  durationStart: string,
  durationEnd: string
}

type State = {
  educations: Array<EducationObj>
}

export default class Educations extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      educations: [
        { university: '电子科技大学', degree: '博士研究生', department: '通信学院', major: 'java编程专业', grade: 2001, durationStart: '2001.9', durationEnd: '2003.6' },
        { university: '电子科技大学', degree: '博士研究生', department: '通信学院', major: 'java编程专业', grade: 2001, durationStart: '2001.9', durationEnd: '2003.6' }
      ]
    }
  }
  render() {
    const educationItem = this.state.educations.map((item, idx) => {
      return (
        <div key={idx} styleName="education-item">
          <span styleName="edu-university">{item.university}</span>
          <span styleName="edu-degree"> - {item.degree}</span>
          <span styleName="edu-duration">{item.grade}级 / {item.durationStart} / {item.durationEnd}</span>
          <span styleName="edu-major">{item.department} / {item.major}</span>
        </div>
      )
    })
    return (
      <div>{ educationItem }</div>
    )
  }
}
