import React from 'react'
import { Avatar } from 'antd'
import { withRouter } from 'react-router-dom'
import { observer, inject } from 'mobx-react'
import './partyAInfo.css'

@withRouter
@inject('demandStore', 'userStore')
@observer
export default class PartyAInfo extends React.Component {
  handleSeeDetail(person) {
    let type = ''
    if (person.partyType === 1) {
      type = 'student'
    } else if (person.partyType === 2) {
      type = 'teacher'
    } else if (person.partyType === 3) {
      type = 'company'
    }
    this.props.history.push(`/${type}/${person.ownerId}`)
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
    const { partyA } = this.props.demandStore
    return (
      <div styleName="owner">
        <div styleName="ownerTitle">
          甲方信息
        </div>
        <div styleName="ownerInfo">
          <div styleName="ownerAvatar" onClick={this.handleSeeDetail.bind(this, partyA)}>
            <Avatar src={partyA.partyAvatar} icon="user" />
            <span>&nbsp;&nbsp;{partyA.partyName}</span>
          </div>
          <span>{this.showUserType(partyA)} / {partyA.partyLocation}</span>
          <span>{partyA.partyContact}</span>
        </div>
      </div>
    )
  }
}
