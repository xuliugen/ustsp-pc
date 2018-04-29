import React from 'react'
import Card from '../common/card/Card'
import { Icon, Button, Modal, message } from 'antd'
import './enquiryCardB.css'
import { IpApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

const confirm = Modal.confirm

export default class EnquiryCardB extends React.Component {
  render() {
    const { partyB, patent, dispatch } = this.props
    let content = null
    switch (partyB.status) {
      case 'enquiry':
        content = <div>已经拒绝购买，请重新询价</div>
        break
      case 'apply':
        content = <Enquiry />
        break
      case 'sended':
        content = <Purchase partyB={partyB} patent={patent} dispatch={dispatch} />
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

@inject('userStore')
@observer
@withRouter
class Purchase extends React.Component {
  state = { dialogVisible: false }

  async handleConfirm() {
    try {
      await IpApi.changePatentStatus(this.props.match.params.id, this.props.partyB.partyId, 'wonder', this.props.userStore.user.id)
      message.success('已发起购买请求')
      this.props.dispatch()
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

  handleCancelBuy = () => {
    confirm({
      title: '是否确认取消购买',
      // content: '',
      onOk: async () => {
        try {
          await IpApi.changePatentStatus(this.props.match.params.id, this.props.partyB.partyId, 'cancelBuy', this.props.userStore.user.id)
          message.success('取消购买成功')
          this.props.history.replace(`/ip/${this.props.patent.id}`)
        } catch (err) {
          console.log(err)
        }
      }
      // onCancel() { }
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
        <Button style={{ marginLeft: '15px' }} onClick={this.handleCancelBuy}>不购买</Button>
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
