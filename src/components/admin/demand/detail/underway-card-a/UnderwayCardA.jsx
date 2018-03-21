import React from 'react'
import './underwayCardA.css'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Avatar, Row, Col, Button } from 'antd'
import moment from 'moment'

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class UnderwayCardA extends React.Component {
  handleSeeDetail(person) {
    let type = ''
    if (person.partyType === 1) {
      type = 'student'
    } else if (person.partyType === 2) {
      type = 'teacher'
    } else if (person.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.partyId}`)
  }

  showUserType(partyB) {
    let user = null
    if (partyB.partyType === 1) {
      user = '学生'
    } else if (partyB.partyType === 2) {
      user = '教师'
    } else if (partyB.partyType === 3) {
      user = '企业'
    }
    return user
  }

  render() {
    const { partyB, demand } = this.props.demandStore
    return (
      <div>
        <div styleName="title">正在进行</div>
        <div styleName="content">
          <div styleName="applyer">
            <div styleName="applyerTitle">
              乙方信息
            </div>
            <div styleName="applyerInfo">
              <div styleName="applyerAvatar" onClick={this.handleSeeDetail.bind(this, partyB)}>
                <Avatar src={partyB.partyAvatar} icon="user" />
                <span>&nbsp;&nbsp;{partyB.partyName}</span>
              </div>
              <span>{this.showUserType(partyB)} / {partyB.partyLocation}</span>
              <span>{partyB.partyContact}</span>
            </div>
          </div>
          <div styleName="time">
            <Row>
              <Col span={12}>
                <span styleName="timeItem">报名时间：{moment(demand.applyDate).format('YYYY-MM-DD HH:mm:ss')}</span>
              </Col>
              <Col span={12}>
                <span styleName="timeItem">签单时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</span>
              </Col>
            </Row>
            <Row>
              <Col span={12}>
                <span styleName="timeItem">预计开始时间：{demand.startTime}</span>
              </Col>
              <Col span={12}>
                <span styleName="timeItem">预计结束时间：{demand.endTime}</span>
              </Col>
            </Row>
          </div>
          <div styleName="operation">
            <Button style={{marginRight: '10px'}}>进度询问</Button>
            <Button>中断项目</Button>
          </div>
        </div>
      </div>
    )
  }
}
