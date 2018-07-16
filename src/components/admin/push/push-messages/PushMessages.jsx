import React from 'react'
import { Checkbox, Button, message } from 'antd'
import './pushMessages.css'
import { PushApi } from 'src/ajax'

import PushTagtForm from './push-target-form/PushTagtForm'
import PushTagtResult from './push-target-result/PushTagtResult'
import PushContent from './push-content/PushContent'
import { inject, observer } from 'mobx-react'

const initialCondition = {
  subject: null,
  school: null,
  college: null,
  userType: 0,
  degree: null
}
const initialPage = {
  page: 1,
  row: 9
}
const initialNotification = {
  method: 1,
  title: null,
  abstracts: null,
  content: null,
  subject: null,
  province: null,
  city: null,
  school: null,
  college: null,
  userType: 0,
  degree: null,
  totalNum: 0,
  isPhoneRemind: false,
  isPublishDynamics: false
}

@inject('userStore')
@observer
export default class PushMessages extends React.Component {
  constructor(props) {
    super(props)
    this.setCondition = this.setCondition.bind(this)
    this.setTargetsPage = this.setTargetsPage.bind(this)
    this.setNotification = this.setNotification.bind(this)
    this.state = {
      conditions: initialCondition,
      targetsPage: initialPage,
      targets: [],
      notification: initialNotification
    }
  }

  handlePubClick = () => {
    const { notification, targets } = this.state
    if (targets.length === 0) {
      message.error('请先选择发送对象')
      return
    }
    if (!notification.title) {
      message.error('请填写标题')
      return
    }
    if (!this.editorElement.getContent('raw').blocks[0].text.trim()) {
      message.error('请填写内容')
      return
    }
    let content = this.editorElement.getContent()
    let abstracts = this.editorElement.getContent('raw').blocks[0].text
    this.setState(prev => ({
      notification: {
        ...prev.notification,
        content,
        abstracts
      }
    }), async () => {
      try {
        await this.sendNotification()
        message.success('发送成功')
        this.props.history.push(`/admin/push/push-records`)
      } catch (err) {
        console.log(err)
      }
    })
  }

  setCondition(key, value) {
    const resolvedValue = value === '' ? null : value
    this.setState(prev => {
      const prevConditions = prev.conditions
      let curConditions = {
        ...prevConditions,
        [key]: resolvedValue
      }
      return {
        ...prev,
        conditions: curConditions
      }
    }, () => {
      this.dispatchSearchTargets()
    })
  }
  setTargetsPage(page) {
    this.setState(prev => ({
      ...prev,
      targetsPage: {
        page: page,
        row: prev.targetsPage.row
      }
    }), () => {
      this.dispatchSearchTargets()
    })
  }
  setNotification(key, value) {
    this.setState(prev => {
      const prevNotification = prev.notification
      let curNotification = {
        ...prevNotification,
        [key]: value
      }
      return {
        ...prev,
        notification: curNotification
      }
    })
  }

  async dispatchSearchTargets() {
    const { conditions, targetsPage } = this.state
    const { data } = await PushApi.fetchTargets(conditions, targetsPage.page, targetsPage.row)
    this.setState(prev => ({
      targets: data.data,
      notification: {
        ...prev.notification,
        subject: prev.conditions.subject,
        province: '',
        city: '',
        school: prev.conditions.school,
        college: prev.conditions.college,
        userType: prev.conditions.userType,
        degree: prev.conditions.degree,
        totalNum: data.data.length
      }
    }))
  }

  async sendNotification() {
    const { notification } = this.state
    const { userStore } = this.props
    const { data } = await PushApi.send(notification, userStore.user.id)
    console.log(data)
  }

  render() {
    return (
      <div styleName="content-container">
        <div styleName="push-target">推送对象</div>
        <div styleName="target-form">
          <PushTagtForm setCondition={this.setCondition} />
        </div>
        {this.state.targets.length > 0 &&
          <div styleName="result-num">共匹配到<span style={{ color: '#199ED8' }}> {this.state.targets.length} </span>个发送对象</div>
        }
        <div styleName="result-card">
          <PushTagtResult targets={this.state.targets} targetsPage={this.state.targetsPage} setPage={this.setTargetsPage} />
        </div>
        <div styleName="push-content-title">推送内容编辑</div>
        <div styleName="content-edit">
          <PushContent editorElement={el => { this.editorElement = el }} notification={this.state.notification} setNotification={this.setNotification} />
          <div>
            <div>
              <Checkbox checked={this.state.notification.isPublishDynamics}
                onChange={evt => { this.setNotification('isPublishDynamics', evt.target.checked) }}>同时发布到动态</Checkbox>
              <Checkbox checked={this.state.notification.isPhoneRemind}
                onChange={evt => { this.setNotification('isPhoneRemind', evt.target.checked) }}>发送手机短信提醒</Checkbox>
            </div>
            <div styleName="confirm">
              <Button type="primary" style={{ 'marginRight': '10px' }} onClick={this.handlePubClick}>发布</Button>
              <Button type="ghost">取消</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
