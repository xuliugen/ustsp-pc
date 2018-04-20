import React from 'react'
import './signCardB.css'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { message, Row, Col, Button, Modal } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { PartyAInfo } from '../common'

const confirm = Modal.confirm

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class SignCardB extends React.Component {
  handleConfirmSign = async () => {
    try {
      await DemandApi.changeDemandStatus({
        currentUserId: this.props.userStore.user.id,
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

  handleRejectSign(partyA) {
    confirm({
      title: '确定要拒绝签单请求吗？',
      content: '点击cancel即可刷新状态',
      onOk: async () => {
        try {
          await DemandApi.changeDemandStatus({
            currentUserId: this.props.userStore.user.id,
            partyId: this.props.userStore.user.id,
            ownerId: partyA.ownerId,
            projectId: this.props.match.params.id,
            status: 'applying'
          })
          message.success('拒绝签单成功')
          // 刷新项目信息
          this.props.demandStore.dispatchGetDemandInfo()
        } catch (error) {
          console.log(error)
        }
      },
      onCancel: () => {
        this.props.demandStore.dispatchGetDemandInfo()
      }
    })
  }

  render() {
    const { demand, partyB, partyA } = this.props.demandStore
    return (
      <div>
        <div styleName="title">待签单</div>
        <div styleName="content">
          <PartyAInfo />
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
            <Button type="primary" onClick={this.handleConfirmSign} style={{ marginRight: '10px' }}>确认签单</Button>
            <Button onClick={this.handleRejectSign.bind(this, partyA)}>拒绝签单</Button>
            <p styleName="confirmHint">若长时间未确认，甲方将撤回签单请求，项目将回到报名状态</p>
          </div>
        </div>
      </div>
    )
  }
}
