import React from 'react'
import './underwayCardB.css'
import { Row, Col, message, Modal } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { DemandApi } from 'src/ajax'
import moment from 'moment'
import { PartyAInfo } from '../common'

const confirm = Modal.confirm

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class UnderwayCardB extends React.Component {
  async handleToCheck(partyId, ownerId) {
    try {
      await DemandApi.changeDemandStatus({
        currentUserId: this.props.userStore.user.id,
        partyId,
        ownerId,
        projectId: this.props.match.params.id,
        status: 'toCheck'
      })
      message.success('发起验收成功')
      // 刷新项目信息
      this.props.demandStore.dispatchGetDemandInfo()
    } catch (error) {
      console.log(error)
    }
  }

  handleCancel(partyA) {
    confirm({
      title: '确定要中断项目请求吗？',
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
          message.success('中断项目成功')
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
    const { partyB, demand, partyA } = this.props.demandStore
    return (
      <div>
        <div styleName="title">正在进行</div>
        <div styleName="partyB-info" >
          <PartyAInfo />
          <div styleName="time">
            <Row>
              <Col span={10}><div>报名时间：{moment(demand.applyDate).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              <Col span={10}><div>签单发起时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
            </Row>
            <Row style={{ marginTop: '48px' }}>
              <Col span={10}><div>项目开始时间：{moment(demand.startTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              <Col span={10}><div>预计结束时间：{moment(demand.endTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
            </Row>
          </div>
          <div styleName="btns">
            <button onClick={this.handleToCheck.bind(this, partyB.partyId, demand.ownerId)}>发起验收</button>
            <button onClick={this.handleCancel.bind(this, partyA)}>中断项目</button>
          </div>
        </div>
      </div>
    )
  }
}
