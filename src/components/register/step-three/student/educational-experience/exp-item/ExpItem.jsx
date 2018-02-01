import React from 'react'
import './expItem.css'
import moment from 'moment'

export default class NewExpItem extends React.Component<{}> {
  render() {
    return (
      <div styleName="stu-edu-experience">
        <div styleName="row">
          <span styleName="school-name">{this.props.exp.school}</span>
          {(this.props.exp.startTime && this.props.exp.endTime) &&
            <span styleName="time-text">{moment(this.props.exp.startTime).format('YYYY-MM-DD')} - {moment(this.props.exp.endTime).format('YYYY-MM-DD')}</span>}
        </div>
        <div styleName="degree-text row">{this.props.exp.level}</div>
        <div styleName="row">
          <span styleName="major-text">{this.props.exp.major}</span>
          <button styleName="edit-text" >编辑</button>
        </div>
      </div>
    )
  }
}
