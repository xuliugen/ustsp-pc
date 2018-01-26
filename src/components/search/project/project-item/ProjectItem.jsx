import React from 'react'
import './projectItem.css'
import { Avatar, Icon } from 'antd'

export default class ProjectItem extends React.Component {
  render() {
    return (
      <div styleName="project-item">
        <div styleName="project-info">
          <Avatar shape="square"
            style={{width: '55px', height: '55px'}}
          // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <div styleName="info-text">
            <div style={{ display: 'flex' }}>
              <span styleName="project-name">学生签到系统开发平台及App</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon type="eye" styleName="visible-icon" />
                <span styleName="visible-person-number">1415</span>
              </div>
            </div>
            <div style={{ marginTop: '13px' }}>
              <span styleName="school-info">电子科技大学 / IT(计算机相关)</span>
              <span styleName="end-time">报名截止时间： 2017-12-14 </span>
            </div>
          </div>
        </div>
        <div styleName="money">￥ 12000</div>
      </div>
    )
  }
}
