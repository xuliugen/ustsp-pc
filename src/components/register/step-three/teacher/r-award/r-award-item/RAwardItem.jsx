import React from 'react'
import './RAwardItem.css'
import { Icon } from 'antd'

export default class RAwardItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div styleName="award-name-container">
          <span styleName="award-name">获奖名称一</span>
          <Icon type="edit" styleName="edit-icon" />
          <button styleName="edit-text" >编辑</button>
        </div>
        <div styleName="award-info">
          <span styleName="award-info-text">获奖时间: 2017-02-04</span>
          <span styleName="award-info-text">级别:省级</span>
          <span styleName="award-info-text">排名：10</span>
        </div>
        <div styleName="award-description">获奖描述：系统提供五类用户角色：教师、学生、企业、高校管理人员和政府管理人员；可以以多页签的形式来对五类用户注册进行分类；
        </div>
      </div>
    )
  }
}
