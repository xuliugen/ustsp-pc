import React from 'react'
import './enquiryPerson.css'
import { Avatar, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

@withRouter
export default class EmquiryPerson extends React.Component {
  handleSeeDetailClick = (info) => {
    let type = ''
    if (info.partyType === 1) {
      type = 'student'
    } else if (info.partyType === 2) {
      type = 'teacher'
    } else if (info.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${info.partyId}`)
  }

  showUserType(info) {
    let type = null
    if (info.partyType === 1) {
      type = '学生'
    } else if (info.partyType === 2) {
      type = '教师'
    } else if (info.partyType === 3) {
      type = '企业'
    }
    return type
  }

  handleSend = (info) => {
    this.props.changeSendDialogStatus(true)
    this.props.setPerson(info)
  }

  render() {
    const { info } = this.props
    return (
      <div styleName="root">
        <div styleName="base">
          <Avatar src={info.partyPhoto} icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, info)}>{info.partyName}</span>
        </div>
        <span styleName="title">{info.partyEducation} / {info.assigneeContactway}</span>
        <span styleName="enquiry-time">询价时间：{moment(info.createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
        <Button size="small" type="primary" onClick={this.handleSend.bind(this, info)}>发送评估文件</Button>
      </div>
    )
  }
}
