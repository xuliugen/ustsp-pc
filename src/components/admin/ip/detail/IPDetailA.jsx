import React from 'react'
import './ipDetail.css'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardA from './enquiry-card-a/EnquiryCardA'
// import SignCardA from './sign-card-a/SignCardA'
// import IPTransferInfoA from './IPTransferInfo/IPTransferInfoCardA'

import { withRouter } from 'react-router-dom'
import { IpApi } from 'src/ajax'

@withRouter
export default class IPDetailA extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {}
    }
  }

  async componentDidMount() {
    try {
      const {data} = await IpApi.fetchPatentDetail(this.props.match.params.id)
      this.setState({
        detail: data.patentDTO
      })
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <DetailInfo info={this.state.detail} />
        <div styleName="card-wrapper">
          <EnquiryCardA />
          {/* <SignCardA /> */}
          {/* <IPTransferInfoA /> */}
        </div>
      </div>
    )
  }
}
