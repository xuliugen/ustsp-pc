import React from 'react'
import { Checkbox, Button } from 'antd'
import './pushMessages.css'
import { PushApi } from 'src/ajax'

import PushTagtForm from './push-target-form/PushTagtForm'
import PushTagtResult from './push-target-result/PushTagtResult'
import PushContent from './push-content/PushContent'
import { inject, observer } from 'mobx-react'

const initialCondition = {
  major: null,
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
  method: null,
  title: null,
  abstracts: null,
  content: null,
  major: null,
  province: null,
  city: null,
  school: null,
  college: null,
  userType: null,
  degree: null,
  totalNum: null
}

@inject('userStore')
@observer
export default class PushMessages extends React.Component {
  constructor(props) {
    super(props)
    this.setCondition = this.setCondition.bind(this)
    this.state = {
      conditions: initialCondition,
      targetsPage: initialPage,
      targets: [],
      notification: initialNotification
    }
  }

  setCondition(key, value) {
    this.setState(prev => {
      const prevConditions = prev.conditions
      let curConditions = {
        ...prevConditions,
        [key]: value
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
        row: prev.row
      }
    }), () => {
      this.dispatchSearchTargets()
    })
  }

  async dispatchSearchTargets() {
    const { conditions, targetsPage } = this.state
    const { data } = await PushApi.fetchTargets(conditions, targetsPage.page, targetsPage.row)
    this.setState({
      targets: data.data
    })
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
          <PushTagtResult targets={this.state.targets} targetsPage={this.state.targetsPage} setPage={this.setTargetsPage.bind(this)} />
        </div>
        <div styleName="push-content-title">推送内容编辑</div>
        <div styleName="content-edit">
          <PushContent />
          <div>
            <div>
              <Checkbox>同时发布到动态</Checkbox>
              <Checkbox>发送手机短信提醒</Checkbox>
            </div>
            <div styleName="confirm">
              <Button type="primary" style={{ 'marginRight': '10px' }}>发布</Button>
              <Button type="ghost">取消</Button>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
