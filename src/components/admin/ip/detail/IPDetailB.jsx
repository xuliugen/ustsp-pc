import React from 'react'
import './ipDetail.css'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import DetailInfo from './detail-info/DetailInfo'
import EnquiryCardB from './enquiry-card-b/EnquiryCardB'
import SignCardB from './sign-card-b/SignCardB'

@inject('userStore')
@observer
export default class IPDetailB extends React.Component {
  constructor() {
    super()
    this.state = {
      detail: {},
      partyB: {}
    }
  }

  async componentDidMount() {
    try {
      const { data } = await IpApi.fetchPatentDetail(this.props.match.params.id)
      const partyB = data.patentJointCommands.filter(person => {
        return person.partyId === this.props.userStore.user.id
      })[0]
      this.setState({
        detail: data.patentDTO,
        partyB: partyB || {}
      })
    } catch (error) {
      console.log(error)
    }
  }

  getCard() {
    switch (this.state.detail.status) {
      case 0:
        return null
      case 1:
        return <EnquiryCardB patent={this.state.detail} partyB={this.state.partyB} />
      case 2:
        return <SignCardB />
      case 3:
        return null
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <DetailInfo info={this.state.detail} />
        <div styleName="card-wrapper">
          {this.getCard()}
        </div>
      </div>
    )
  }
}
