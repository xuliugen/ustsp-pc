import React from 'react'
import './checkCardB.css'
import { Icon, Row, Col } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import moment from 'moment'
import { PartyAInfo } from '../common'

@withRouter
@inject('demandStore')
@observer
export default class CheckCardB extends React.Component {
  showUserType = () => {
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

  render() {
    const { partyB, demand } = this.props.demandStore
    return (
      <div>
        <div styleName="title">验收</div>
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
          <div styleName="message">
            <Icon type="check-circle" style={{color: '#62f326', fontSize: '30px'}} />
            <span style={{marginLeft: '14px'}}>验收请求已发送，等待甲方确认</span>
          </div>
        </div>
      </div>
    )
  }
}
