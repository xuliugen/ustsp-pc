import React from 'react'
import { Modal, Avatar, message } from 'antd'
import './signDialog.css'
import {IpApi} from 'src/ajax'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@withRouter
@inject('userStore')
@observer
export default class SignDialog extends React.Component {
  handleOk = async () => {
    try {
      await IpApi.changePatentStatus(this.props.match.params.id, this.props.person.partyId, 'sign')
      message.success('签订成功')
      this.props.dispatch()
      this.props.changeSignDialogStatus(false)
    } catch (error) {
      console.log(error)
    }
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
          <Avatar src={this.props.person.partyPhoto} size="large" />
          <div>
            <p styleName="confirm-text">确认与此人签订专业转让合同?</p>
            <p styleName="hint">请在与购买者沟通后且手续齐全的情况下确认</p>
          </div>
        </div>
      </Modal>
    )
  }
}
