import React from 'react'
import './eduExpItem.css'
import { Icon, message } from 'antd'
import moment from 'moment'
import { UserInfoApi } from 'src/ajax'

export default class EduExpItem extends React.Component {
  handleEdit(exp) {
    this.props.setVisible(true)
    this.props.setSelectedItem(exp)
  }

  async handleDelete(exp) {
    try {
      await UserInfoApi.deleteEdu(exp.id)
      this.props.deleteItem(exp)
      message.success('删除成功')
    } catch (err) {
      message.error('删除失败')
      console.log(err)
    }
  }

  render() {
    const props = this.props
    const { editable } = this.props
    return (
      <div styleName="exp-item">
        <div styleName="row">
          <span styleName="school-name">{props.school}</span>
          <span styleName="time-text">{moment(props.startTime).format('YYYY.M')} - {moment(props.endTime).format('YYYY.M')}</span>
        </div>
        <div styleName="row">
          <span styleName="degree-text">{props.level}</span>
        </div>
        <div styleName="row">
          <span styleName="major-text">{props.college} / {props.major}</span>
          {editable && <div styleName="edit-container">
            <Icon type="edit" />
            <button styleName="edit-text" onClick={this.handleEdit.bind(this, props)}>编辑</button>
            <button onClick={this.handleDelete.bind(this, props)}>删除</button>
          </div>}
        </div>
      </div>
    )
  }
}
