// @flow
import React from 'react'
import './talent.css'
import TalentHeader from './header/TalentHeader'
import TalentItem from './talent-item/TalentItem'
import avatar1 from 'src/assets/avatar1.png'
import avatar2 from 'src/assets/avatar2.png'
import avatar3 from 'src/assets/avatar3.png'
import avatar4 from 'src/assets/avatar4.png'
import avatar5 from 'src/assets/avatar5.png'

const talents = [
  { name: '张丽', title: '电子科技大学教授', department: '电子信息系', imgAvatar: avatar1 },
  { name: '王福德', title: '四川大学副教授', department: '能源动力系', imgAvatar: avatar2 },
  { name: '李淑媛', title: '西南财经大学副教授', department: '能源动力系', imgAvatar: avatar3 },
  { name: '里查德·莱昂', title: '电子科技大学外教', department: '电系信息系', imgAvatar: avatar4 },
  { name: '郭德贤', title: '四川大学教授', department: '文学系', imgAvatar: avatar5 }
]

export default class Talent extends React.Component<{}> {
  render() {
    const talentItems = [null, null, null, null, null].map((item, idx) => {
      return <li key={idx}><TalentItem talent={talents[idx]} /></li>
    })
    return (
      <div styleName="talent">
        <TalentHeader />
        <ul styleName="talent-items">
          {talentItems}
        </ul>
      </div>
    )
  }
}
