import React from 'react'
import './sendPerson.css'
import { Avatar, Button } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom'

@withRouter
export default class SendPerson extends React.Component {
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

  handleSign = () => {}

  render() {
    return (
      <div styleName="root">
        <div styleName="base">
          <Avatar src={this.props.registeredPerson} icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, this.props.registeredPerson)}>{this.props.registeredPerson}</span>
        </div>
        <span styleName="send-time">发送时间：{moment(this.props.registeredPerson).format('YYYY-MM-DD HH:mm:ss')}</span>
        <Button size="small" type="primary" onClick={this.handleSign}>签订合同</Button>
      </div>
    )
  }
}
