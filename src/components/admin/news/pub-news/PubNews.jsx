import React from 'react'
import PubNewsContent from './PubNewsContent'
import { Input, Button, message } from 'antd'
import { NewsApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

import './pubNews.css'

@withRouter
@inject('userStore')
@observer
export default class PubNews extends React.Component {
  state = {
    title: '',
    abstract: '',
    content: ''
  }

  constructor() {
    super()
    this.setTitle = this.setTitle.bind(this)
  }

  componentDidMount() {
    const { userStore } = this.props
    userStore.checkIfInfoCompleted()
  }

  setTitle(e) {
    this.setState({ title: e.target.value.trim() })
  }

  handleNewsPublish = async () => {
    const { userStore } = this.props
    if (!userStore.checkIfInfoCompleted()) {
      return
    }
    const { user } = userStore
    if (!this.state.title) {
      message.error('请填写标题')
      return
    }
    if (!this.editorElement.getContent('raw').blocks[0].text.trim()) {
      message.error('请填写内容')
      return
    }
    try {
      let content = this.editorElement.getContent()
      let abstract = this.editorElement.getContent('raw').blocks[0].text
      if (abstract.length > 50) {
        abstract = abstract.substr(0, 50)
      }
      await NewsApi.publishNews({
        userId: user.id,
        title: this.state.title,
        abstracts: abstract,
        dynamics: content,
        username: user.realName ? user.realName : user.phone,
        userType: user.userType,
        avatar: user.avatar,
        location: user.location
      })
      message.success('动态发布成功')
      this.props.history.push('/admin/news/news-mgnt')
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
