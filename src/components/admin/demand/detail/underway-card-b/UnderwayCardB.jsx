import React from 'react'
import './underwayCardB.css'
import { Row, Col, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { DemandApi } from 'src/ajax'
import moment from 'moment'
import { PartyAInfo } from '../common'

@withRouter
@inject('demandStore')
@observer
export default class UnderwayCardB extends React.Component {
  async handleToCheck(partyId, ownerId) {
    try {
      await DemandApi.changeDemandStatus({
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

  render() {
    const { partyB, demand } = this.props.demandStore
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
            <button>中断项目</button>
          </div>
        </div>
      </div>
    )
  }
}
