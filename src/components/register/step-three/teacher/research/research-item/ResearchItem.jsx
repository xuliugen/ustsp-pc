import React from 'react'
import './researchItem.css'
import { Icon } from 'antd'
import moment from 'moment'

export default class ResearchItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div>
          <span styleName="research-name">{this.props.rea.projectName}</span>
          <span styleName="time-text">{moment(this.props.rea.startTime).format('YYYY-MM-DD')}</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            <li styleName="li-text">{this.props.rea.projectLevel}</li>
            <li styleName="li-text">经费: {this.props.rea.funding}</li>
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
