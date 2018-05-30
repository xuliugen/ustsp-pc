// @flow
import React from 'react'
import './teacher.css'
import CardHeader from '../common/header/CardHeader'
import Card from '../common/card/Card'
import { Row, Col } from 'antd'
import { TalentApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

type PersonObj = {
  name: string,
  title: string,
  // ...
}

type State = {
  person: Array<PersonObj>
}

@inject('userStore')
@observer
export default class Teacher extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      person: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await TalentApi.fetchInterestedTeacher(this.props.userStore.user.id)
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
      <div styleName="teacher-interested" >
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的老师" />
        </div>
        <div styleName="teacher-cards">
          <Row gutter={16}>
            {this.state.person.length !== 0 ? this.state.person.map((item, idx) => {
              return (
                <Col span={12} key={idx} style={{margin: '10px 0'}}>
                  <Card person={item} />
                </Col>
              )
            }) : '暂无相关用户'}
          </Row>
        </div>
      </div>
    )
  }
}
