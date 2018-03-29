import React from 'react'
import './enquiryPerson.css'
import { Avatar, Button } from 'antd'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

@withRouter
export default class EmquiryPerson extends React.Component {
  handleSeeDetailClick = (person) => {
    let type = ''
    if (person.partyType === 1) {
      type = 'student'
    } else if (person.partyType === 2) {
      type = 'teacher'
    } else if (person.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.partyId}`)
  }

  showUserType() {
    // let user = null
    // if (this.props.registeredPerson.partyType === 1) {
    //   user = '学生'
    // } else if (this.props.registeredPerson.partyType === 2) {
    //   user = '教师'
    // } else if (this.props.registeredPerson.partyType === 3) {
    //   user = '企业'
    // }
    // return user
    return null
  }

  handleSend = () => {
    this.props.changeSendDialogStatus(true)
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="base">
          <Avatar src={this.props.registeredPerson} icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, this.props.registeredPerson)}>{this.props.registeredPerson}</span>
        </div>
        <span styleName="title">{this.showUserType()} / {this.props.registeredPerson} / {this.props.registeredPerson}</span>
        <span styleName="enquiry-time">询价时间：{moment(this.props.registeredPerson).format('YYYY-MM-DD HH:mm:ss')}</span>
        <Button size="small" type="primary" onClick={this.handleSend.bind(this, this.props.registeredPerson, this.props.registeredPerson)}>发送评估文件</Button>
      </div>
    )
  }
}
