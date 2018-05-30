import React from 'react'
import './basicInfo.css'
import moment from 'moment'
import { observer, inject } from 'mobx-react'
import { Link } from 'react-router-dom'

@inject('demandStore')
@observer
export default class OrderBasicInfo extends React.Component {
  render() {
    const { demand, projectId } = this.props.demandStore
    const PartyBContactInfo = (demand.PartyBContactInfo && demand.PartyBContactInfo.length !== 0)
      ? (
        <div styleName="item-detail">{demand.PartyBContactInfo[0]}<br /> </div>
      )
      : (
        <div styleName="item-detail">暂无</div>
      )
    return (
      <div styleName="order-basic-info">
        <div styleName="basic-info-title">
          <span>项目名</span>
        </div>
        <div styleName="basic-info-content">
          <Link to={`/project/${projectId}`}>
            <div styleName="demand-title">{demand.projectName}</div>
          </Link>
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
