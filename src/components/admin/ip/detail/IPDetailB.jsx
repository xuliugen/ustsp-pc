import React from 'react'
import DetailInfo from './detail-info/DetailInfo'
import SignCardB from './sign-card-b/SignCardB'
import './ipDetail.css'

export default class IPDetailB extends React.Component {
  render() {
    return (
      <div>
        <DetailInfo />
        <div styleName="card-wrapper">
          <SignCardB />
        </div>
      </div>
    )
  }
}
