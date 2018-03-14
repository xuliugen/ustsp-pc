import React from 'react'
import PubNewsContent from './PubNewsContent'
import { Input, Button } from 'antd'

import './pubNews.css'

export default class PubNews extends React.Component {
  state = {
    title: '',
    content: '<p>Hello World!</p>'
  }

  constructor() {
    super()
    this.setContent = this.setContent.bind(this)
  }

  setContent(content) {
    this.setState({ content })
  }

  render() {
    return (
      <div styleName="pub-container">
        <div styleName="title-wrapper">
          <span styleName="title">发布动态</span>
        </div>
        <div styleName="pub-inner">
          <label styleName="label label-required">动态标题</label>
          <Input style={{ 'marginBottom': '12px' }} />
          <label styleName="label label-required">动态内容</label>
          <div styleName="content-wrapper">
            <PubNewsContent
              htmlContent={this.state.content}
              setContent={this.setContent}
            />
          </div>
          <div styleName="pubBtn-wrapper">
            <Button type="primary" size="large">发布</Button>
          </div>
        </div>
      </div>
    )
  }
}
