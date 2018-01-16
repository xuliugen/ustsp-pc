// @flow
import React from 'react'
import './student.css'
import CardHeader from '../common/header/CardHeader'
import Card from '../common/card/Card'

type PersonObj = {
  name: string,
  school: string
  // ...
}

type State = {
  person: Array<PersonObj>
}

export default class Student extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      person: [
        { name: '张翰', school: '电子科技大学', field: 'IT（计算机相关）' },
        { name: '李长山', school: '四川大学', field: '哲学/文学' },
        { name: '郭采洁', school: '西南财经大学', field: '金融会计' },
        { name: '胡一天', school: '四川大学', field: '哲学/文学' }
      ]
    }
  }

  render() {
    return (
      <div styleName="student-interested" >
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的学生" />
        </div>
        <div styleName="student-cards">
          {this.state.person.map((item, idx) => {
            return (
              <div styleName="student-card-wrapper" key={idx}>
                <Card person={item} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
