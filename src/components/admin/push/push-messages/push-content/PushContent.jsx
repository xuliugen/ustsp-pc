import React from 'react'
import { Input, Tag, Checkbox, Button } from 'antd'
import './pushContent.css'

import PushMessagesContent from '../../../news/pub-news/PubNewsContent'

const { CheckableTag } = Tag

class MyTag extends React.Component {
  state = { checked: true }

  handleChange = (checked) => {
    this.setState({ checked })
  }

  render() {
    return <CheckableTag {...this.props} checked={this.state.checked} onChange={this.handleChange} />
  }
}

export default class PushContent extends React.Component {
  render() {
    return (
      <div>
        <div style={{'marginBottom': '15px'}}>
          <label styleName="label-style">推送形式：</label>
          <MyTag styleName="push-method">站内信</MyTag>
          <MyTag styleName="push-method">邮件</MyTag>
          <MyTag styleName="push-method">手机短信</MyTag>
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
        <div>
          <div>
            <Checkbox>同时发布到动态</Checkbox>
          </div>
          <div styleName="confirm">
            <Button type="primary" style={{'marginRight': '10px'}}>发布</Button>
            <Button type="ghost">取消</Button>
          </div>
        </div>
      </div>
    )
  }
}
