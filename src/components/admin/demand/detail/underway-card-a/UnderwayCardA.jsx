import React from 'react'
import './underwayCardA.css'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import { Row, Col, Button, message, Modal } from 'antd'
import moment from 'moment'
import { PartyBInfo } from '../common'
import { DemandApi } from 'src/ajax'

const confirm = Modal.confirm

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class UnderwayCardA extends React.Component {
  handleCancel(partyB) {
    confirm({
      title: '确定要中断项目请求吗？',
      content: '点击cancel即可刷新状态',
      onOk: async () => {
        try {
          await DemandApi.changeDemandStatus({
            currentUserId: this.props.userStore.user.id,
            partyId: partyB.partyId,
            ownerId: this.props.userStore.user.id,
            projectId: this.props.match.params.id,
            status: 'underwayBreakA'
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
    const { partyB, demand } = this.props.demandStore
    return (
      <div>
        <div styleName="title">正在进行</div>
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
            {/* <Button style={{ marginRight: '10px' }}>进度询问</Button> */}
            <Button onClick={this.handleCancel.bind(this, partyB)}>中断项目</Button>
          </div>
        </div>
      </div>
    )
  }
}
