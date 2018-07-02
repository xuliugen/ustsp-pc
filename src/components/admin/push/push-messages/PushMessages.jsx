import React from 'react'
import { Form, Checkbox, Button } from 'antd'
import './pushMessages.css'

import PushTagtForm from './push-target-form/PushTagtForm'
import PushTagtResult from './push-target-result/PushTagtResult'
import PushContent from './push-content/PushContent'

@Form.create()
export default class PushMessages extends React.Component {
  render() {
    return (
      <div styleName="content-container">
        <div styleName="push-target">推送对象</div>
        <div styleName="target-form">
          <PushTagtForm form={this.props.form} />
        </div>
        <div styleName="result-num">共匹配到<span style={{color: '#199ED8'}}> 52 </span>个发送对象</div>
        <div styleName="result-card">
          <PushTagtResult />
        </div>
        <div styleName="push-content-title">推送内容编辑</div>
        <div styleName="content-edit">
          <PushContent />
          <div>
            <div>
              <Checkbox>同时发布到动态</Checkbox>
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
