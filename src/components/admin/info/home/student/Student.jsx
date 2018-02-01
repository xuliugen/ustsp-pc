// @flow
import React from 'react'
import './student.css'
import CardHeader from '../common/header/CardHeader'
import Card from '../common/card/Card'
import { TalentApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

type PersonObj = {
  name: string,
  school: string
  // ...
}

type State = {
  person: Array<PersonObj>
}

@inject('userStore')
@observer
export default class Student extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      person: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await TalentApi.fetchInterestedStudent(this.props.userStore.user.id)
      if (Array.isArray(data)) {
        this.setState({
          person: data.slice(0, 4)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="student-interested" >
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的学生" />
        </div>
        <div styleName="student-cards">
          {this.state.person.length !== 0 ? this.state.person.map((item, idx) => {
            return (
              <div styleName="student-card-wrapper" key={idx}>
                <Card person={item} />
              </div>
            )
          }) : '暂无相关用户'}
        </div>
      </div>
    )
  }
}
