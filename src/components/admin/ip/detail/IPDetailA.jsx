import React from 'react'
import './ipDetail.css'
import IPTransferInfoA from './IPTransferInfo/IPTransferInfoCardA'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardA from './enquiry-card-a/EnquiryCardA'

export default class IPDetailA extends React.Component {
  render() {
    return (
      <div>
        <DetailInfo />
        <div styleName="card-wrapper">
          <EnquiryCardA />
          <IPTransferInfoA />
        </div>
      </div>
    )
  }
}
