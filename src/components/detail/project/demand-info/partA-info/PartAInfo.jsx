import React from 'react'
import './partAInfo.css'
import imgAvatar from '../../../../../assets/avatar11.png'

export default class PartAInfo extends React.Component {
  render() {
    return (
      <div styleName="PartA">
        <div>
          <div styleName="avatar"><img src={imgAvatar} /></div>
          <div styleName="identity">
            <div styleName="name">李长山</div>
            <div>电子科技大学 / 学生</div>
          </div>
        </div>
        <div styleName="contact">
          <div styleName="phone">联系电话</div>
          <div>18755336356</div>
        </div>
      </div>
    )
  }
}
