import React from 'react'
import { userTypeNumToStr } from 'src/common/formatter'
import { Link } from 'react-router-dom'
import './partyInfo.css'

export default class PartyInfo extends React.Component {
  render() {
    const { info } = this.props
    const userInfo = info.userInfo || {}
    const username = info.username
    return (
      <div styleName="PartA">
        <div>
          <Link to={`/${userTypeNumToStr(userInfo.userType)}/${userInfo.id}`}>
            <div styleName="avatar"><img src={userInfo.avatar} /></div>
          </Link>
          <div styleName="identity">
            <div styleName="name">{username}</div>
            <div>{userInfo.location || userInfo.school} / {getOwnerType(userInfo.userType)}</div>
          </div>
        </div>
        <div styleName="contact">
          <div styleName="phone">联系方式</div>
          <div>{userInfo.phone}</div>
        </div>
      </div>
    )
  }
}

function getOwnerType(type) {
  switch (type) {
    case 1:
      return '学生'
    case 2:
      return '教师'
    case 3:
      return '企业'
    case 4:
      return '科研管理人员'
    case 5:
      return '政府管理人员'
    default:
      return '未知'
  }
}
