import React from 'react'
import './orderDetail.css'
import OrderBasicInfo from './basic-info/BasicInfo'
import ProjectProgress from './project-progress/ProjectProgress'
import { DemandApi } from 'src/ajax'
import moment from 'moment'

export default class OrderDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      demand: { type: '学术研究', money: '100000', startTime: '2016-12-23', endTime: '2016-12-23', PartyAContactInfo: 'zhanjy@uestc.edu.cn', PartyBContactInfo: '暂无' },
      currentStatus: 0
    }
  }

  async componentDidMount() {
    const { data } = await DemandApi.geteDemanOrderDetail(this.props.projectId)
    this.setState({
      demand: {
        type: data.type,
        money: data.money,
        startTime: data.startTime ? moment(data.startTime.valueOf()).format('YYYY-MM-DD') : '无',
        endTime: data.endTime ? moment(data.endTime.valueOf()).format('YYYY-MM-DD') : '无',
        PartyAContactInfo: data.contactWay,
        PartyBContactInfo: data.partyContactWay ? data.partyContactWay : '暂无'
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
