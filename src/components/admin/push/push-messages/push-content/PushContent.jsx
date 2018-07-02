import React from 'react'
import { Input } from 'antd'
import './pushContent.css'

import PushMessagesContent from '../../../news/pub-news/PubNewsContent'
import PushMethod from './push-method/PushMethod'

export default class PushContent extends React.Component {
  render() {
    return (
      <div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">推送形式：</label>
          <PushMethod styleName="push-method">站内信</PushMethod>
          <PushMethod styleName="push-method">邮件</PushMethod>
          <PushMethod styleName="push-method">手机短信</PushMethod>
        </div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">标题</label>
          <Input style={{ 'marginBottom': '12px' }} />
        </div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">内容编辑</label>
          <div styleName="content-wrapper">
            <PushMessagesContent />
          </div>
        </div>
      </div>
    )
  }
}
