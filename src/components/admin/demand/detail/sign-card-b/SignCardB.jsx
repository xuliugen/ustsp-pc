import React from 'react'
import './signCardB.css'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { message, Avatar, Row, Col, Button } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom'

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class SignCardB extends React.Component {
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

  handleConfirmSign = async () => {
    try {
      await DemandApi.changeDemandStatus({
        projectId: this.props.demandStore.projectId,
        ownerId: this.props.demandStore.demand.ownerId,
        partyId: this.props.userStore.user.id,
        status: 'underway'
      })
      message.success('乙方确认签单成功')
      this.props.demandStore.dispatchGetDemandInfo()
    } catch (err) {
      console.log(err)
    }
  }

  handleRejectSign() {
  }

  render() {
    const { demand, partyB, partyA } = this.props.demandStore
    return (
      <div>
        <div styleName="title">待签单</div>
        <div styleName="content">
          <div styleName="owner">
            <div styleName="ownerTitle">
              发起对象
            </div>
            <div styleName="ownerInfo">
              <div styleName="ownerAvatar" onClick={this.handleSeeDetail.bind(this, partyA)}>
                <Avatar src={partyA.partyAvatar} icon="user" />
                <span>&nbsp;&nbsp;{partyA.partyName}</span>
              </div>
              <span>{this.showUserType(partyA)} / {partyA.partyLocation}</span>
              <span>{partyA.partyContact}</span>
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
          <div styleName="confirm">
            <p styleName="confirmMsg">甲方发起签单请求，请确认签单。</p>
            <Button type="primary" onClick={this.handleConfirmSign} style={{marginRight: '10px'}}>确认签单</Button>
            <Button onClick={this.handleRejectSign}>拒绝签单</Button>
            <p styleName="confirmHint">若长时间未确认，甲方将撤回签单请求，项目将回到报名状态</p>
          </div>
        </div>
      </div>
    )
  }
}
