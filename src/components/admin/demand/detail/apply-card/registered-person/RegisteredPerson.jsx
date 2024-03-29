import React from 'react'
import './registeredPerson.css'
import { Avatar, Button, Message } from 'antd'
import moment from 'moment'
import { withRouter } from 'react-router-dom'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class RegisteredPerson extends React.Component {
  showRender = () => {
    let renderStyle = null

    if (this.props.registeredPerson.partySex === 1) {
      renderStyle = {
        icon: 'man',
        styleName: 'render-man'
      }
    } else {
      renderStyle = {
        icon: 'woman',
        styleName: 'render-woman'
      }
    }

    return renderStyle
  }

  showUserType = () => {
    let user = null
    if (this.props.registeredPerson.partyType === 1) {
      user = '学生'
    } else if (this.props.registeredPerson.partyType === 2) {
      user = '教师'
    } else if (this.props.registeredPerson.partyType === 3) {
      user = '企业'
    }
    return user
  }

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

  async handleSign(partyId, ownerId) {
    await DemandApi.changeDemandStatus({
      currentUserId: this.props.userStore.user.id,
      partyId,
      ownerId,
      projectId: this.props.match.params.id,
      status: 'toSign'
    })
    Message.success('签单成功，等待乙方确认')
    // 刷新项目信息
    this.props.demandStore.dispatchGetDemandInfo()
  }

  render() {
    return (
      <div styleName="person-item">
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Avatar
            src={this.props.registeredPerson.partyAvatar}
            icon="user" />
          <span styleName="name" onClick={this.handleSeeDetailClick.bind(this, this.props.registeredPerson)}>{this.props.registeredPerson.partyName}</span>
          <Avatar icon={this.showRender().icon} size="small" styleName={this.showRender().styleName} />
        </div>
        <span styleName="person-info">{ this.showUserType() } / { this.props.registeredPerson.partyLocation } / {this.props.registeredPerson.partyContact}</span>
        <span styleName="register-time">报名时间：{moment(this.props.registeredPerson.date).format('YYYY-MM-DD HH:mm:ss')}</span>
        <Button size="small" type="primary" onClick={this.handleSign.bind(this, this.props.registeredPerson.partyId, this.props.registeredPerson.ownerId)}>签单</Button>
      </div>
    )
  }
}
