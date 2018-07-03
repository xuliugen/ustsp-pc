import React from 'react'
import { Input } from 'antd'
import './pushContent.css'

import PushMessagesContent from '../../../news/pub-news/PubNewsContent'
import PushMethod from './push-method/PushMethod'

export default class PushContent extends React.Component {
  handleTitleChange = (evt) => {
    this.props.setNotification('title', evt.target.value)
  }

  render() {
    const { notification, setNotification } = this.props
    return (
      <div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">推送形式：</label>
          <PushMethod styleName="push-method" value={1} cur={notification.method} setMethod={setNotification}>站内信</PushMethod>
          <PushMethod styleName="push-method" value={2} cur={notification.method} setMethod={setNotification}>邮件</PushMethod>
        </div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">标题</label>
          <Input style={{ 'marginBottom': '12px' }} value={notification.title} onChange={this.handleTitleChange} />
        </div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">内容编辑</label>
          <div styleName="content-wrapper">
            <PushMessagesContent editorRef={this.props.editorElement} htmlContent={notification.content} />
          </div>
        </div>
      </div>
    )
  }
}
