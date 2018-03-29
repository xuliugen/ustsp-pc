import React from 'react'
import { Button } from 'antd'
import TransferInfo from '../common/transfer-info/TransferInfo'
import './signCardB.css'

export default class SignCardB extends React.Component {
  constructor() {
    super()
    this.state = {
      info: {
        ipName: '高硬韧低合金耐磨钢及其应用',
        ipID: 'ZL200910037500.1',
        owners: ['李卫', '刘英'],
        transferMethod: '专利权转让',
        taker: '韶关韶瑞铸钢有限公司',
        price: 50.0,
        evaluateCompany: '广州同嘉资产评估有限公司',
        evaluatePrice: 9.9413
      }
    }
  }

  render() {
    return (
      <div>
        <div styleName="title">签订合同</div>
        <div styleName="content">
          <div styleName="message">甲方发起签订转让合同请求，摘要信息如下，请在与甲方确认后完成签订。</div>
          <div styleName="abstract">
            <TransferInfo info={this.state.info} />
          </div>
          <div styleName="btns">
            <Button type="primary" style={{ paddingLeft: '20px', paddingRight: '20px' }}>确认签订</Button>
            <span styleName="cancel">取消签订</span>
          </div>
        </div>
      </div>
    )
  }
}
