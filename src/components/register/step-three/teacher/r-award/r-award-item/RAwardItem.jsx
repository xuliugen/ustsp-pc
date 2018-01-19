import React from 'react'
import './RAwardItem.css'
import { Icon } from 'antd'

export default class RAwardItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div styleName="award-name-container">
          <span styleName="award-name">{this.props.RAward.name}</span>
          <Icon type="edit" styleName="edit-icon" />
          <button styleName="edit-text" >编辑</button>
        </div>
        <div styleName="award-info">
          <span styleName="award-info-text">获奖时间: {this.props.RAward.time}</span>
          <span styleName="award-info-text">级别:{this.props.RAward.level}</span>
          <span styleName="award-info-text">排名：{this.props.RAward.rank}</span>
        </div>
        <div styleName="award-description">获奖描述：{this.props.RAward.introduction}
        </div>
      </div>
    )
  }
}
