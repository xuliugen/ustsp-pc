import React from 'react'
import './partAInfo.css'
import imgAvatar from '../../../../../assets/avatar11.png'

export default class PartAInfo extends React.Component {
  render() {
    const ownerInfo = this.props.ownerInfo

    return (
      <div styleName="PartA">
        <div>
          <div styleName="avatar"><img src={ownerInfo.avatar ? ownerInfo.avatar : imgAvatar} alt="头像" style={{width: '80', height: '80'}} /></div>
          <div styleName="identity">
            <div styleName="name">{ownerInfo.name}</div>
            <div>{ownerInfo.location} / {getOwnerType(ownerInfo.type)}</div>
          </div>
        </div>
        <div styleName="contact">
          <div styleName="phone">联系电话</div>
          <div>{ownerInfo.contact}</div>
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
