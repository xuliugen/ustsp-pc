import React from 'react'
import './skillsRequirement.css'
import { Icon } from 'antd'

export default class SkillsRequirement extends React.Component {
  render() {
    return (
      <span styleName="container">{this.props.skill}
        <Icon type="minus-circle" styleName="icon" />
      </span>
    )
  }
}
