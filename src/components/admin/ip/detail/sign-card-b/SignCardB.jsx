import React from 'react'
import { Button, message } from 'antd'
import TransferInfo from '../common/transfer-info/TransferInfo'
import './signCardB.css'
import { IpApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'
import {inject, observer} from 'mobx-react'

@withRouter
@inject('userStore')
@observer
export default class SignCardB extends React.Component {
  handelSign = async () => {
    try {
      await IpApi.changePatentStatus(this.props.match.params.id, this.props.userStore.user.id, 'publicity')
      message.success('签订成功')
      this.props.dispatch()
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <div styleName="title">签订合同</div>
        <div styleName="content">
          <div styleName="message">甲方发起签订转让合同请求，摘要信息如下，请在与甲方确认后完成签订。</div>
          <div styleName="abstract">
            <TransferInfo patent={this.props.patent} />
          </div>
          <div styleName="btns">
            <Button type="primary" onClick={this.handelSign} style={{ paddingLeft: '20px', paddingRight: '20px' }}>确认签订</Button>
            <span styleName="cancel">取消签订</span>
          </div>
        </div>
      </div>
    )
  }
}
