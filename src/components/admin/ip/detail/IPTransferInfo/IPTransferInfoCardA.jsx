import React from 'react'
import './IPTransferInfoCardA.css'

import TransferInfo from '../common/transfer-info/TransferInfo'

export default class IPTransferInfoA extends React.Component {
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
        <TransferInfo patent={this.props.patent} />
      </div>
    )
  }
}
