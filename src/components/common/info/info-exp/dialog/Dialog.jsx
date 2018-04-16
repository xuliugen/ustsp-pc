import React from 'react'
import { Modal } from 'antd'

export default class Dialog extends React.Component {
  handleOk = (e) => {
    e.preventDefault()
    this.props.onDialogConfirm()
  }

  handleCancel = () => {
    this.props.onDialogCancel()
  }

  render() {
    const { title, visible, children: Form } = this.props
    return (
      <Modal
        title={title}
        visible={visible}
        destroyOnClose
        maskClosable={false}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <Form {...this.props} />
      </Modal>
    )
  }
}
