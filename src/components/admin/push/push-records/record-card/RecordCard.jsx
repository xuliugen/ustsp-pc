import React from 'react'
import './recordCard.css'
import { Tag } from 'antd'
import moment from 'moment'
import { Link } from 'react-router-dom'

import image from 'src/assets/banner.png'

export default class RecordCard extends React.Component {
  render() {
    const { record } = this.props
    return (
      <div styleName="card">
        <Link to={`push-records/${record.id}`}>
          <div styleName="info">
            <div styleName="image-container">
              <img styleName="image" src={image} alt="推送消息图片" />
            </div>
            <div styleName="basic-info">
              <div styleName="message-title">{record.title}</div>
              <div styleName="message-content">{record.abstracts}</div>
              <div styleName="message-time">发送于 {moment(record.createTime).format('YYYY-MM-DD HH:MM')}</div>
            </div>
            <div styleName="to">
              <div styleName="to-item">已发布到动态</div>
              <div styleName="to-item">已发送短信</div>
            </div>
          </div>
        </Link>
        <div>
          <span style={{'marginRight': '10px'}}>发送对象：</span>
          <Tag>{record.major}</Tag>
          {/* <Tag>四川省</Tag>
          <Tag>成都市</Tag> */}
          <span style={{'marginLeft': '10px'}}>共<span style={{color: '#199ED8'}}> {record.totalNum} </span>人</span>
        </div>
      </div>
    )
  }
}
