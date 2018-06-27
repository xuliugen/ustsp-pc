import React from 'react'
import './pushRecords.css'

import PushMethod from '../push-messages/push-content/push-method/PushMethod'
import RecordCard from './record-card/RecordCard'

export default class PushRecords extends React.Component {
  render() {
    return (
      <div styleName="container">
        <div styleName="records-title">推送记录</div>
        <div styleName="records-content">
          <div styleName="push-methods">
            <PushMethod styleName="push-method">站内信</PushMethod>
            <PushMethod styleName="push-method">邮件</PushMethod>
            <PushMethod styleName="push-method">手机短信</PushMethod>
          </div>
          <div>
            <RecordCard />
          </div>
        </div>
      </div>
    )
  }
}
