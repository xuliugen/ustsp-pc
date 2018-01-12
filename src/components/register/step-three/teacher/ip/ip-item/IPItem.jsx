import React from 'react'
import './IPItem.css'
import { Icon } from 'antd'

export default class IPItem extends React.Component<{}> {
  render() {
    return (
      <div>
        <div styleName="ip-name-container">
          <span styleName="ip-name">知识产权一</span>
          <span styleName="ip-type">外观专业/ 中国</span>
        </div>
        <div styleName="ip-info">
          <span styleName="ip-info-text">ID: 3132131231</span>
          <span styleName="ip-info-text">登记编号:2342342342</span>
          <span styleName="ip-info-text">已受理</span>
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            <li styleName="li-text">申请于 2017-12-01 / 某某专利申请单位</li>
            <li styleName="li-text">发明人：蔡明、曹雪芹、郭悦、王作斌、贾全</li>
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
