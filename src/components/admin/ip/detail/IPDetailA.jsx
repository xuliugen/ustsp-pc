import React from 'react'
import DetailInfo from './detail-info/DetailInfo'
import SignCardA from './sign-card-a/SignCardA'

export default class IPDetailA extends React.Component {
  render() {
    return (
      <div>
        <DetailInfo />
        <div style={{ marginTop: '30px' }}>
          <SignCardA />
        </div>
      </div>
    )
  }
}
