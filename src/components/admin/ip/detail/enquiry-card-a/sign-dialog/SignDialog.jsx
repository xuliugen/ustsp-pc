import React from 'react'
import { Modal, Avatar } from 'antd'
import './signDialog.css'

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
        <div styleName="content">
          <Avatar size="large" />
          <div>
            <p styleName="confirm-text">确认与此人签订专业转让合同?</p>
            <p styleName="hint">请在与购买者沟通后且手续齐全的情况下确认</p>
          </div>
        </div>
      </Modal>
    )
  }
}
