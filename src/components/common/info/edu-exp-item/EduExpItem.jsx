import React from 'react'
import './eduExpItem.css'
import { Icon } from 'antd'
import moment from 'moment'

export default class EduExpItem extends React.Component {
  handleEdit(exp) {
    this.props.showModal(exp)
  }

  handleDelete(exp) {
    this.props.deleteExp(exp)
  }

  render() {
    const { exp } = this.props
    return (
      <div styleName="exp-item">
        <div styleName="row">
          <span styleName="school-name">{exp.school}</span>
          <span styleName="time-text">{moment(exp.startTime).format('YYYY.M')} - {moment(exp.endTime).format('YYYY.M')}</span>
        </div>
        <div styleName="row">
          <span styleName="degree-text">{exp.level}</span>
        </div>
        <div styleName="row">
          <span styleName="major-text">{exp.college} / {exp.major}</span>
          <div styleName="edit-container">
            <Icon type="edit" />
            <button styleName="edit-text" onClick={this.handleEdit.bind(this, exp)}>编辑</button>
            <button onClick={this.handleDelete.bind(this, exp)}>删除</button>
          </div>
        </div>
      </div>
    )
  }
}
