import React from 'react'
import Card from '../common/card/Card'
import { Icon, Button, Modal } from 'antd'
import './enquiryCardB.css'

export default class EnquiryCardB extends React.Component {
  render() {
    return (
      <Card title="询价 & 购买">
        <Enquiry />
        <Purchase />
      </Card>
    )
  }
}

const Enquiry = () => {
  return (
    <div styleName="message">
      <Icon type="check-circle" style={{ color: '#62f326', fontSize: '30px' }} />
      <div styleName="hint">询价请求已经发送，代收专业评估文件。</div>
    </div>
  )
}

class Purchase extends React.Component {
  state = { dialogVisible: false }

  handleConfirm() {
    this.changeDialogVisible(false)
  }

  changeDialogVisible(visible) {
    this.setState({
      dialogVisible: visible
    })
  }

  render() {
    return (
      <div>
        <div styleName="title">甲方预设专利转让价格： <span styleName="money">111</span>元</div>
        <div styleName="title">收到甲方发送专利评估文件： <a src="#">filename</a></div>
        <div styleName="title">在确认有购买意愿后与甲方沟通，发起购买请求</div>
        <Button type="primary" onClick={() => { this.changeDialogVisible(true) }}>发起购买请求</Button>
        <Button style={{ marginLeft: '15px' }}>不购买</Button>
        <Modal
          visible={this.state.dialogVisible}
          onOk={this.handleConfirm.bind(this)}
          onCancel={() => { this.changeDialogVisible(false) }}>
          <p>确认发起购买请求？</p>
        </Modal>
      </div>
    )
  }
}
