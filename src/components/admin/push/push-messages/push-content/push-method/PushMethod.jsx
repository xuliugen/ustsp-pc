import React from 'react'
import { Tag } from 'antd'

const { CheckableTag } = Tag

export default class PushMethod extends React.Component {
  handleChange = (checked) => {
    if (checked) {
      this.props.setMethod('method', this.props.value)
    }
  }

  render() {
    return <CheckableTag checked={this.props.value === this.props.cur}
      onChange={this.handleChange}>{this.props.children}</CheckableTag>
  }
}
