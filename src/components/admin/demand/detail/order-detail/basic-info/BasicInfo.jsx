import React from 'react'
import './basicInfo.css'

export default class OrderBasicInfo extends React.Component {
  render() {
    return (
      <div styleName="order-basic-info">
        <div styleName="basic-info-title">
          <span>项目名</span>
        </div>
        <div styleName="basic-info-content">
          <div styleName="demand-title">被查看的项目标题一</div>
          <ul styleName="demand-content-items">
            <li>
              <div styleName="item-title">项目类型</div>
              <div styleName="item-detail">{this.props.demand.type}</div>
            </li>
            <li>
              <div styleName="item-title">预设金额</div>
              <div styleName="item-detail">¥{this.props.demand.money}</div>
            </li>
            <li>
              <div styleName="item-title">项目开始时间</div>
              <div styleName="item-detail">{this.props.demand.startTime}</div>
            </li>
            <li>
              <div styleName="item-title">项目结束时间</div>
              <div styleName="item-detail">{this.props.demand.endTime}</div>
            </li>
            <li>
              <div styleName="item-title">甲方联系方式</div>
              <div styleName="item-detail">{this.props.demand.PartyAContactInfo}</div>
            </li>
            <li>
              <div styleName="item-title">乙方联系方式</div>
              <div styleName="item-detail">{this.props.demand.PartyBContactInfo}</div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
