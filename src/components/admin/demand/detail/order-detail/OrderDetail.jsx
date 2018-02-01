import React from 'react'
import { withRouter } from 'react-router-dom'
import './orderDetail.css'
import OrderBasicInfo from './basic-info/BasicInfo'
import ProjectProgress from './project-progress/ProjectProgress'
import { DemandApi } from 'src/ajax'
import moment from 'moment'

@withRouter
export default class OrderDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      demand: { type: '学术研究', money: '100000', startTime: '2016-12-23', endTime: '2016-12-23', PartyAContactInfo: 'zhanjy@uestc.edu.cn', PartyBContactInfo: [] },
      currentStatus: 0
    }
  }

  async componentDidMount() {
    const res = await DemandApi.geteDemanOrderDetail(this.props.match.params.id)
    let data = res.data.projectResearchInfo
    this.setState({
      demand: {
        projectName: data.projectName,
        type: data.type,
        money: data.money,
        startTime: data.startTime ? moment(data.startTime.valueOf()).format('YYYY-MM-DD') : '无',
        endTime: data.endTime ? moment(data.endTime.valueOf()).format('YYYY-MM-DD') : '无',
        PartyAContactInfo: data.contactWay,
        PartyBContactInfo: res.data.partyContactWay ? res.data.partyContactWay : []
      },
      currentStatus: data.status
    })
  }
  render() {
    return (
      <div styleName="order-detail">
        <div styleName="order-title">
          <span>订单详情</span>
        </div>
        <div styleName="order-content">
          <OrderBasicInfo demand={this.state.demand} />
          <ProjectProgress currentStatus={this.state.currentStatus} />
        </div>
      </div>
    )
  }
}
