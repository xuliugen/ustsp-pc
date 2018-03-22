import React from 'react'
import './partyBInfo.css'
import { Avatar } from 'antd'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class PartyBInfo extends React.Component {
  handleSeeDetail(person) {
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

  showUserType(partyB) {
    let user = null
    if (partyB.partyType === 1) {
      user = '学生'
    } else if (partyB.partyType === 2) {
      user = '教师'
    } else if (partyB.partyType === 3) {
      user = '企业'
    }
    return user
  }

  render() {
    const { partyB } = this.props.demandStore

    return (
      <div styleName="applyer">
        <div styleName="applyerTitle">
          乙方信息
        </div>
        <div styleName="applyerInfo">
          <div styleName="applyerAvatar" onClick={this.handleSeeDetail.bind(this, partyB)}>
            <Avatar src={partyB.partyAvatar} icon="user" />
            <span>&nbsp;&nbsp;{partyB.partyName}</span>
          </div>
          <span>{this.showUserType(partyB)} / {partyB.partyLocation}</span>
          <span>{partyB.partyContact}</span>
        </div>
      </div>
    )
  }
}
