import React from 'react'
import './researchItem.css'
import { Icon } from 'antd'

export default class ResearchItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div>
          <span styleName="research-name">科研研究标题一</span>
          <span styleName="time-text">2011.9-2013.7</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            <li styleName="li-text">项目级别</li>
            <li styleName="li-text">经费$ 12000</li>
          </ul>
          <div styleName="edit-container">
            <Icon type="edit" styleName="edit-incon" />
            <button styleName="edit-text" >编辑</button>
          </div>
        </div>
      </div>
    )
  }
}
