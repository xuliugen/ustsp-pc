import React from 'react'
import './partyInfo.css'
import defaultAvatar from 'src/assets/defaultAvatar.svg'

export default class PartyInfo extends React.Component {
  render() {
    // const { ownerInfo } = this.props
    return (
      <div styleName="PartA">
        <div>
          <div styleName="avatar"><img src={defaultAvatar} /></div>
          <div styleName="identity">
            <div styleName="name">高圆圆</div>
            <div>电子科技大学 / 教师</div>
          </div>
        </div>
        <div styleName="contact">
          <div styleName="phone">联系方式</div>
          <div>13498972514</div>
        </div>
      </div>
    )
  }
}

// function getOwnerType(type) {
//   switch (type) {
//     case 1:
//       return '学生'
//     case 2:
//       return '教师'
//     case 3:
//       return '企业'
//     case 4:
//       return '科研管理人员'
//     case 5:
//       return '政府管理人员'
//     default:
//       return '未知'
//   }
// }
