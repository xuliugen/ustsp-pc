import React from 'react'
import { Modal } from 'antd'

export default class SendDialog extends React.Component {
  handleOk = () => {
    this.props.changeSendDialogStatus(false)
  }

  handleCancel = () => {
    this.props.changeSendDialogStatus(false)
  }

  render() {
    return (
      <Modal
        title="发送评估问价"
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Modal>
    )
  }
}
