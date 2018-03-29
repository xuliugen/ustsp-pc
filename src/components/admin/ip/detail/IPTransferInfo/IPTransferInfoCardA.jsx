import React from 'react'
import './IPTransferInfoCardA.css'

import TransferInfo from '../common/transfer-info/TransferInfo'

export default class IPTransferInfoA extends React.Component {
  constructor() {
    super()
    this.state = {
      header: '',
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

  componentDidMount() {
    // 请求相应信息
  }

  render() {
    return (
      <div styleName="content-wrapper">
        <div styleName="title">
          <span styleName="title-text">转让公示</span>
        </div>
        <div styleName="text-head">
          <span>专利转让公示</span>
        </div>
        <div styleName="explanation">
          <div>根据国务院印发的《实施〈中华人民共和国促进科技成果转化若干规定〉》和《暨南大学促进科技成果转化管理办法》相关规定，现拟将我校以下发明专利转让有关事项予以公示：</div>
        </div>
        <TransferInfo info={this.state} />
      </div>
    )
  }
}
