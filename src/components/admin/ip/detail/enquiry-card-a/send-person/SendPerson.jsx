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

  handleSign = (info) => {
    this.props.changeSignDialogStatus(true)
    this.props.setPerson(info)
  }

  setElement = (info) => {
    switch (info.status) {
      case 'wonder':
        return <Button size="small" type="primary" onClick={this.handleSign.bind(this, info)}>签订合同</Button>
      case 'sended':
        return <span styleName="send-time">发送时间：{moment(info.createTime).format('YYYY-MM-DD HH:mm:ss')}</span>
      case 'cancelBuy':
        return <Button size="small" disabled>已拒绝</Button>
      default:
        break
    }
  }

  render() {
    const { info } = this.props
    const element = this.setElement(info)
    return (
      <div styleName="root">
        <div styleName="base">
          <Avatar src={info.partyPhoto} icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, info)}>{info.partyName}</span>
        </div>
        {element}
      </div>
    )
  }
}
