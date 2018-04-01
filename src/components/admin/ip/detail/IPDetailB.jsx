import React from 'react'
import './ipDetail.css'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardB from './enquiry-card-b/EnquiryCardB'
import SignCardB from './sign-card-b/SignCardB'
import TransferInfo from './IPTransferInfo/IPTransferInfoCardA'

@inject('userStore')
@observer
export default class IPDetailB extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {},
      partyB: {},
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
        partyB: data.patentJointCommands.filter((item) => {
          return item.partyId === this.props.userStore.user.id
        })[0] || {},
        status: data.status
      })
    } catch (error) {
      console.log(error)
    }
  }

  getCard() {
    switch (this.state.status) {
      case 0:
        return null
      case 'enquiry':
        return <EnquiryCardB patent={this.state.detail} partyB={this.state.partyB} dispatch={this.dispatchPatentDetail} />
      case 'sign':
        return <SignCardB patent={this.state.detail} dispatch={this.dispatchPatentDetail} />
      case 'publicity':
        return <TransferInfo patent={this.state.detail} />
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
