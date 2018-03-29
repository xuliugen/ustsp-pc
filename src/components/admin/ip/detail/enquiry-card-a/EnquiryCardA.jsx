import React from 'react'
import './enquiryCardA.css'
import EnquiryPerson from './enquiry-person/EnquiryPerson'
import SendPerson from './send-person/SendPerson'

export default class EnquiryCardA extends React.Component {
  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          询价情况 & 购买意愿
        </div>
        <div styleName="content">
          <div styleName="enquiry">
            <div styleName="persons-title">询价(10)</div>
            <EnquiryPerson />
          </div>
          <div styleName="send">
            <div styleName="persons-title">已发送文件(10)</div>
            <SendPerson />
          </div>
        </div>
      </div>
    )
  }
}
