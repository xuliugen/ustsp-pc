import React from 'react'
import './expItem.css'
import { Icon } from 'antd'
import moment from 'moment'

export default class ExpItem extends React.Component<{}> {
  render() {
    return (
      <div styleName="exp-item">
        <div styleName="row">
          <span styleName="school-name">{this.props.exp.school}</span>
          <span styleName="time-text">{moment(this.props.exp.date).format('YYYY-MM-DD')}</span>
        </div>
        <div styleName="row">
          <span styleName="degree-text">{this.props.exp.level}</span>
        </div>
        <div styleName="row">
          <span styleName="major-text">{this.props.exp.major}</span>
          <div styleName="edit-container">
            <Icon type="edit" />
            <button styleName="edit-text">编辑</button>
          </div>
        </div>
      </div>
    )
  }
}
