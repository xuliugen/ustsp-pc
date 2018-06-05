import { Modal, Button } from 'antd'
import React from 'react'
import FeedbackForm from './feedback-form/FeedbackForm'

export default class ModalButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: false
    }
    this.handleOk = this.handleOk.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  handleOk = () => {
    setTimeout(() => {
      this.setState({ visible: false })
    }, 500)
  }

  handleCancel = () => {
    this.setState({ visible: false })
  }

  render() {
    const {visible} = this.state
    return (
      <div>
        <Button type="primary" onClick={this.showModal}>
          用户反馈
        </Button>
        <Modal
          visible={visible}
          title="前端用户反馈"
          onOk={this.handleOk}
          onCancel={this.handleCancel}
          destroyOnClose={'true'}
          footer={null}
          width={580}
        >
          <FeedbackForm handleOk={this.handleOk} />
        </Modal>
      </div>
    )
  }
}
