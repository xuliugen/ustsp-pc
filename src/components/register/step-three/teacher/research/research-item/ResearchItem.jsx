import React from 'react'
import './researchItem.css'
import { Icon } from 'antd'
import moment from 'moment'

export default class ResearchItem extends React.Component<{}> {
  render() {
    return (
      <div styleName="research-item">
        <div>
          <span styleName="research-name">{this.props.rea.projectName}</span>
          {(this.props.rea.startTime && this.props.rea.endTime) &&
          <span styleName="time-text">{moment(this.props.rea.startTime).format('YYYY.M')} - {moment(this.props.rea.endTime).format('YYYY.M')}</span>}
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            {(this.props.rea.projectLevel) && <li styleName="li-text">级别: {this.props.rea.projectLevel}</li>}
            <li styleName="li-text">经费:   {this.props.rea.funding ? '¥' + this.props.rea.funding : '暂无'}</li>
          </ul>
          <div styleName="edit-container">
            <Icon type="edit" styleName="edit-incon" />
            <button styleName="edit-text" >编辑</button>
          </div>
        </div>
      </div>
    )
  }
}
