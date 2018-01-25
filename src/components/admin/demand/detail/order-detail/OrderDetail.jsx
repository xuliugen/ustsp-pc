import React from 'react'
import './orderDetail.css'
import OrderBasicInfo from './basic-info/BasicInfo'
import ProjectProgress from './project-progress/ProjectProgress'

export default class OrderDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      demand: {type: '学术研究', money: '100000', startTime: '2016-12-23', endTime: '2016-12-23', PartyAContactInfo: 'zhanjy@uestc.edu.cn', PartyBContactInfo: '暂无'}
    }
  }

  render() {
    return (
      <div styleName="order-detail">
        <div styleName="order-title">
          <span>订单详情</span>
        </div>
        <div styleName="order-content">
          <OrderBasicInfo demand={this.state.demand} />
          <ProjectProgress currentStatus={1} />
        </div>
      </div>
    )
  }
}
