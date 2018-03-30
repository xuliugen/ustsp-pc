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

  handleSign = () => {
    this.props.changeSignDialogStatus(true)
  }

  render() {
    const { info } = this.props
    return (
      <div styleName="root">
        <div styleName="base">
          <Avatar src={info.partyPhoto} icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, info)}>{info.partyName}</span>
        </div>
        {info.status === 'wonder'
          ? <Button size="small" type="primary" onClick={this.handleSign}>签订合同</Button>
          : <span styleName="send-time">发送时间：{moment(info.createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
        }
      </div>
    )
  }
}
