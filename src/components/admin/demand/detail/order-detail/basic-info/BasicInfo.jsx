import React from 'react'
import './basicInfo.css'
import moment from 'moment'

export default class OrderBasicInfo extends React.Component {
  render() {
    const PartyBContactInfo = (this.props.demand.PartyBContactInfo && this.props.demand.PartyBContactInfo.length !== 0)
      ? this.props.demand.PartyBContactInfo.map((item, idx) => {
        return (
          <div styleName="item-detail">{item}<br /> </div>
        )
      })
      : (
        <div styleName="item-detail">暂无</div>
      )
    return (
      <div styleName="order-basic-info">
        <div styleName="basic-info-title">
          <span>项目名</span>
        </div>
        <div styleName="basic-info-content">
          <div styleName="demand-title">{this.props.demand.projectName}</div>
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
              <div styleName="item-detail">{moment(this.props.demand.startTime).format('YYYY-MM-DD')} </div>
            </li>
            <li>
              <div styleName="item-title">项目结束时间</div>
              <div styleName="item-detail">{moment(this.props.demand.endTime).format('YYYY-MM-DD')}</div>
            </li>
            <li>
              <div styleName="item-title">甲方联系方式</div>
              <div styleName="item-detail">{this.props.demand.PartyAContactInfo}</div>
            </li>
            <li>
              <div styleName="item-title">乙方联系方式</div>
              {PartyBContactInfo}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
