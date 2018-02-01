import React from 'react'
import './projectItem.css'
import { Avatar, Icon } from 'antd'
import moment from 'moment'
export default class ProjectItem extends React.Component {
  render() {
    const project = this.props.project
    return (
      <div styleName="project-item">
        <div styleName="project-info">
          <Avatar shape="square"
            style={{width: '55px', height: '55px'}}
          // src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png"
          />
          <div styleName="info-text">
            <div style={{ display: 'flex' }}>
              <span styleName="project-name">{project.projectName}</span>
              <div style={{ display: 'flex', alignItems: 'center' }}>
                <Icon type="eye" styleName="visible-icon" />
                <span styleName="visible-person-number">{project.projectView}</span>
              </div>
            </div>
            <div style={{ marginTop: '13px' }}>
              <span styleName="school-info">{project.province + project.city} / {project.subject}</span>
              <span styleName="end-time">报名截止时间：{moment(project.deadline).format('YYYY.MM-DD')}</span>
            </div>
          </div>
        </div>
        <div styleName="money">￥ {project.money}</div>
      </div>
    )
  }
}
