// @flow
import React from 'react'
import './teacher.css'
import CardHeader from '../common/header/CardHeader'
import Card from '../common/card/Card'

type PersonObj = {
  name: string,
  title: string,
  // ...
}

type State = {
  person: Array<PersonObj>
}

export default class Teacher extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      person: [
        { name: '王德福', title: '教授', school: '电子科技大学', field: 'IT（计算机相关）' },
        { name: '欧阳娜娜', title: '副教授', school: '四川大学', field: '哲学/文学' },
        { name: '李毅', title: '副教授', school: '西南财经大学', field: '金融会计' },
        { name: '周翰林', title: '副教授', school: '四川大学', field: '哲学/文学' }
      ]
    }
  }

  render() {
    return (
      <div styleName="teacher-interested" >
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的老师" />
        </div>
        <div styleName="teacher-cards">
          {this.state.person.map((item, idx) => {
            return (
              <div styleName="teacher-card-wrapper" key={idx}>
                <Card person={item} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
