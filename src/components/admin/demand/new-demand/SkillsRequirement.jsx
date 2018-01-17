import React from 'react'
import './skillsRequirement.css'
import { Tag } from 'antd'

export default class SkillsRequirement extends React.Component {
  log(e) {
    console.log(e)
  }

  render() {
    return (
      <Tag closable onClose={this.log} styleName="container">{this.props.skill}</Tag>
    )
  }
}
