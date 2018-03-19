import React from 'react'
import { withRouter } from 'react-router-dom'
import './orderDetail.css'
import OrderBasicInfo from './basic-info/BasicInfo'
import ProjectProgress from './project-progress/ProjectProgress'

@withRouter
export default class OrderDetail extends React.Component {
  render() {
    return (
      <div styleName="order-detail">
        <div styleName="order-title">
          <span>订单详情</span>
        </div>
        <div styleName="order-content">
          <OrderBasicInfo demand={this.props.demand} />
          <ProjectProgress currentStatus={this.props.currentStatus} />
        </div>
      </div>
    )
  }
}
