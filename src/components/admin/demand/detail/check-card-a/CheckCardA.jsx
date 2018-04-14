import React from 'react'
import './checkCardA.css'
import { Row, Col, Button, message, Modal } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { DemandApi } from 'src/ajax'
import { PartyBInfo } from '../common'

const confirm = Modal.confirm

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class CheckCardA extends React.Component {
  handleConfirmCheck = async () => {
    try {
      const { demandStore } = this.props
      await DemandApi.changeDemandStatus({
        projectId: demandStore.projectId,
        ownerId: demandStore.demand.ownerId,
        partyId: demandStore.partyB.partyId,
        status: 'toEvaluate'
      })
      message.success('验收成功')
      demandStore.dispatchGetDemandInfo()
    } catch (err) {
      console.log(err)
    }
  }

  handleCancel(partyB) {
    confirm({
      title: '确定要驳回验收请求吗？',
      content: '点击cancel即可刷新状态',
      onOk: async () => {
        try {
          await DemandApi.changeDemandStatus({
            partyId: partyB.partyId,
            ownerId: this.props.userStore.user.id,
            projectId: this.props.match.params.id,
            status: 'underway'
          })
          message.success('驳回验收成功')
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
    const { partyB, demand } = this.props.demandStore
    return (
      <div>
        <div styleName="title">待验收</div>
        <div styleName="content">
          <PartyBInfo />
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
            <p styleName="operationMsg">甲方发起签单请求，请确认签单。</p>
            <Button type="primary" styleName="confirmBtn" onClick={this.handleConfirmCheck}>确认验收</Button>
            <Button onClick={this.handleCancel.bind(this, partyB)}>驳回验收</Button>
          </div>
        </div>
      </div>
    )
  }
}
