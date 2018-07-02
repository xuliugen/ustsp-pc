import React from 'react'
import './recordCard.css'
import { Tag } from 'antd'

import image from 'src/assets/banner.png'

export default class RecordCard extends React.Component {
  render() {
    return (
      <div styleName="card">
        <div styleName="info">
          <div styleName="image-container">
            <img styleName="image" src={image} alt="推送消息图片" />
          </div>
          <div styleName="basic-info">
            <div styleName="message-title">光速中国韩燕：人性流，穿刺力与一头贴地的豹子</div>
            <div styleName="message-content">投资人应该像豹子一样，把脸贴在地面上。有两种投资人，一种擅长预测还未发生的...</div>
            <div styleName="message-time">发送于 2018-01-30  20：33</div>
          </div>
          <div styleName="to-news">已发布到动态</div>
        </div>
        <div>
          <span style={{'marginRight': '10px'}}>发送对象：</span>
          <Tag>计算机</Tag>
          <Tag>四川省</Tag>
          <Tag>成都市</Tag>
          <span style={{'marginLeft': '10px'}}>共<span style={{color: '#199ED8'}}> 52 </span>人</span>
        </div>
      </div>
    )
  }
}
