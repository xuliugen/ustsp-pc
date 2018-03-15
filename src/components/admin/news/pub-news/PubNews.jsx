import React from 'react'
import PubNewsContent from './PubNewsContent'
import { Input, Button, Message } from 'antd'
import { NewsApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import './pubNews.css'

@inject('userStore')
@observer
export default class PubNews extends React.Component {
  state = {
    title: '',
    abstract: '',
    content: '<p>Hello World!</p>'
  }

  constructor() {
    super()
    this.setTitle = this.setTitle.bind(this)
  }

  setTitle(e) {
    this.setState({ title: e.target.value })
  }

  handleNewsPublish = async () => {
    try {
      let content = this.editorElement.getContent()
      let abstract = this.editorElement.getContent('raw').blocks[0].text
      await NewsApi.publishNews(this.props.userStore.user.id, this.state.title, abstract, content)
      Message.success('动态发布成功')
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div styleName="pub-container">
        <div styleName="title-wrapper">
          <span styleName="title">发布动态</span>
        </div>
        <div styleName="pub-inner">
          <label styleName="label label-required">动态标题</label>
          <Input style={{ 'marginBottom': '12px' }} onChange={this.setTitle} />
          <label styleName="label label-required">动态内容</label>
          <div styleName="content-wrapper">
            <PubNewsContent
              editorRef={el => { this.editorElement = el }}
              htmlContent={this.state.content}
            />
          </div>
          <div styleName="pubBtn-wrapper">
            <Button type="primary" size="large" onClick={this.handleNewsPublish}>发布</Button>
          </div>
        </div>
      </div>
    )
  }
}
