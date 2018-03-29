import React from 'react'
import './enquiryCardA.css'

import EnquiryPerson from './enquiry-person/EnquiryPerson'
import SendPerson from './send-person/SendPerson'
import SendDialog from './send-dialog/SendDialog'
import SignDialog from './sign-dialog/SignDialog'

export default class EnquiryCardA extends React.Component {
  state = {
    sendDialogVisible: false,
    signDialogVisible: false
  }

  constructor() {
    super()
    this.changeDialogStatus = this.changeDialogStatus.bind(this)
  }

  changeDialogStatus(type, visible) {
    switch (type) {
      case 'send':
        this.setState({
          sendDialogVisible: visible
        })
        break
      case 'sign':
        this.setState({
          signDialogVisible: visible
        })
    }
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          询价情况 & 购买意愿
        </div>
        <div styleName="content">
          <div styleName="enquiry">
            <div styleName="persons-title">询价(10)</div>
            <EnquiryPerson changeSendDialogStatus={this.changeDialogStatus.bind(this, 'send')} />
          </div>
          <div styleName="send">
            <div styleName="persons-title">已发送文件(10)</div>
            <SendPerson changeSignDialogStatus={this.changeDialogStatus.bind(this, 'sign')} />
          </div>
        </div>
        <SendDialog visible={this.state.sendDialogVisible} changeSendDialogStatus={this.changeDialogStatus.bind(this, 'send')} />
        <SignDialog visible={this.state.signDialogVisible} changeSignDialogStatus={this.changeDialogStatus.bind(this, 'sign')} />
      </div>
    )
  }
}
