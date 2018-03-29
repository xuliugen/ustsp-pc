import React from 'react'
import './ipDetail.css'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardB from './enquiry-card-b/EnquiryCardB'

export default class IPDetailB extends React.Component {
  render() {
    return (
      <div>
        <DetailInfo />
        <div styleName="card-wrapper">
          <EnquiryCardB />
        </div>
      </div>
    )
  }
}
