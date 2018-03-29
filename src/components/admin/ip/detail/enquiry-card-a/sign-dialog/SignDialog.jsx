import React from 'react'
import { Modal } from 'antd'

export default class SignDialog extends React.Component {
  handleOk = () => {
    this.props.changeSignDialogStatus(false)
  }

  handleCancel = () => {
    this.props.changeSignDialogStatus(false)
  }

  render() {
    return (
      <Modal
        title="确认签订"
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
