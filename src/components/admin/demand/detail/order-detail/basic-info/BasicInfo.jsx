import React from 'react'
import './basicInfo.css'
import moment from 'moment'
import { observer, inject } from 'mobx-react'

@inject('demandStore')
@observer
export default class OrderBasicInfo extends React.Component {
  render() {
    const demand = this.props.demandStore.demand
    const PartyBContactInfo = (demand.PartyBContactInfo && demand.PartyBContactInfo.length !== 0)
      ? demand.PartyBContactInfo.map((item, idx) => {
        return (
          <div styleName="item-detail" key={idx}>{item}<br /> </div>
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
          <div styleName="demand-title">{demand.projectName}</div>
          <ul styleName="demand-content-items">
            <li>
              <div styleName="item-title">项目类型</div>
              <div styleName="item-detail">{demand.type}</div>
            </li>
            <li>
              <div styleName="item-title">预设金额</div>
              <div styleName="item-detail">¥{demand.money}</div>
            </li>
            <li>
              <div styleName="item-title">项目开始时间</div>
              <div styleName="item-detail">{moment(demand.startTime).format('YYYY-MM-DD')} </div>
            </li>
            <li>
              <div styleName="item-title">项目结束时间</div>
              <div styleName="item-detail">{moment(demand.endTime).format('YYYY-MM-DD')}</div>
            </li>
            <li>
              <div styleName="item-title">甲方联系方式</div>
              <div styleName="item-detail">{demand.PartyAContactInfo}</div>
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
