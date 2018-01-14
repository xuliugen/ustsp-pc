import React from 'react'
import './expItem.css'
import { Icon } from 'antd'

export default class NewExpItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div styleName="row">
          <span styleName="school-name">西南财经大学</span>
          <span styleName="time-text">2011.9-2013.7</span>
        </div>
        <div styleName="row">
          <span styleName="degree-text">全日制本科</span>
        </div>
        <div styleName="row">
          <span styleName="major-text">外语学院/对外汉语专业</span>
          <div styleName="edit-container">
            <Icon type="edit" />
            <button styleName="edit-text">编辑</button>
          </div>
        </div>
      </div>
    )
  }
}
