import React from 'react'
import './underwayCardB.css'
import { Icon, Row, Col, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { DemandApi } from 'src/ajax'
import moment from 'moment'

@withRouter
@inject('demandStore')
@observer
export default class UnderwayCardB extends React.Component {
  showUserType() {
    const partyB = this.props.demandStore.partyB
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

  setSex = () => {
    let renderStyle = null
    if (this.props.demandStore.partyB.partySex === 1) {
      renderStyle = {
        icon: 'man',
        styleName: 'render-man'
      }
    } else {
      renderStyle = {
        icon: 'woman',
        styleName: 'render-woman'
      }
    }
    return renderStyle
  }

  async handleToCheck(partyId, ownerId) {
    await DemandApi.changeDemandStatus({
      partyId,
      ownerId,
      projectId: this.props.match.params.id,
      status: 'toCheck'
    })
    message.success('发起验收成功，等待甲方确认')
    // 刷新项目信息
    this.props.demandStore.dispatchGetDemandInfo()
  }

  render() {
    const partyB = this.props.demandStore.partyB
    const demand = this.props.demandStore.demand
    return (
      <div>
        <div styleName="title">正在进行</div>
        <div styleName="partyB-info" >
          <div styleName="info-title">
            <span>乙方信息</span>
          </div>
          <div styleName="content">
            <div styleName="base-info">
              <img src={partyB.partyAvatar} />
              <span styleName="name">{partyB.partyName}</span>
              <span><Icon type={this.setSex().icon} styleName={this.setSex().styleName} /></span>
              <span styleName="info" >{this.showUserType()}/{partyB.partyLocation}</span>
              <span styleName="email">{partyB.partyContact}</span>
            </div>
            <div styleName="time">
              <Row>
                <Col span={10}><div>报名时间：{moment(partyB.date).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                <Col span={10}><div>项目开始时间：{moment(demand.startTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
              <Row style={{ marginTop: '48px' }}>
                <Col span={10}><div>签单发起时间：{moment(demand.applyDate).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
                <Col span={10}><div>预计结束时间：{moment(demand.endTime).format('YYYY-MM-DD HH:mm:ss')}</div></Col>
              </Row>
            </div>
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
