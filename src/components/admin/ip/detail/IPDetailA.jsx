import React from 'react'
import './ipDetail.css'
// import IPTransferInfoA from './IPTransferInfo/IPTransferInfoCardA'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardA from './enquiry-card-a/EnquiryCardA'
import SignCardA from './sign-card-a/SignCardA'
import IPTransferInfoA from './IPTransferInfo/IPTransferInfoCardA'

import { withRouter } from 'react-router-dom'
import { IpApi } from 'src/ajax'

@withRouter
export default class IPDetailA extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {},
      partyB: [],
      status: null
    }
    this.dispatchPatentDetail = this.dispatchPatentDetail.bind(this)
  }

  componentDidMount() {
    this.dispatchPatentDetail()
  }

  async dispatchPatentDetail() {
    try {
      const { data } = await IpApi.fetchPatentDetail(this.props.match.params.id)
      this.setState({
        detail: data.patentDTO,
        partyB: data.patentJointCommands,
        status: data.status
      })
    } catch (error) {
      console.log(error)
    }
  }

  getCard() {
    // 状态
    // audit 审核
    // enquiry 询价
    // sign 签订
    // publicity 公示
    const partySign = this.state.partyB.filter((item) => item.status === 'sign')[0]
    const partyPub = this.state.partyB.filter((item) => item.status === 'publicity')[0]

    switch (this.state.status) {
      case 'enquiry':
        return <EnquiryCardA partyB={this.state.partyB} ip={this.state.detail} dispatch={this.dispatchPatentDetail} />
      case 'sign':
        return <SignCardA ip={this.state.detail} partyB={partySign} />
      case 'publicity':
        return <IPTransferInfoA patent={this.state.detail} partyB={partyPub} />
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <DetailInfo info={this.state.detail} status={this.state.status} />
        <div styleName="card-wrapper">
          {this.getCard()}
        </div>
      </div>
    )
  }
}
