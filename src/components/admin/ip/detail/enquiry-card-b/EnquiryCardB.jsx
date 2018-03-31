import React from 'react'
import Card from '../common/card/Card'
import { Icon, Button, Modal, message } from 'antd'
import './enquiryCardB.css'
import { IpApi } from 'src/ajax'

export default class EnquiryCardB extends React.Component {
  render() {
    const { partyB } = this.props
    let content = null
    switch (partyB.status) {
      case 'apply':
        content = <Enquiry />
        break
      case 'sended':
        content = <Purchase partyB={partyB} />
        break
      case 'wonder':
        content = <div>甲方已收到购买意愿</div>
    }
    return (
      <Card title="询价 & 购买">
        {content}
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

  async handleConfirm() {
    try {
      await IpApi.changePatentStatus(this.props.match.params.id, this.props.partyB.partyId, 'wonder')
      message.success('已发起购买请求')
    } catch (err) {
      console.log(err)
      message.error('出了点问题')
    }
    this.changeDialogVisible(false)
  }

  changeDialogVisible(visible) {
    this.setState({
      dialogVisible: visible
    })
  }

  render() {
    const { patent } = this.props
    return (
      <div>
        <div styleName="title">甲方预设专利转让价格： <span styleName="money">{patent.money}</span>元</div>
        <div styleName="title">收到甲方发送专利评估文件： <a src={patent.appraisalDocument}>评估文件</a></div>
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
