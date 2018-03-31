import React from 'react'
import './card.css'
import { withRouter } from 'react-router-dom'
import moment from 'moment'

@withRouter
export default class IpCard extends React.Component {
  handleClick = (id) => {
    this.props.history.push(`/ip/${id}`)
  }

  render() {
    const { ip } = this.props
    if (!ip.patentDTO) {
      ip.patentDTO = {}
    }
    return (
      <div styleName="ip-card">
        <div styleName="ip-card-basic">
          <span styleName="ip-card-title">{ip.patentDTO.patentName}</span>
          <div styleName="ip-card-type">
            <span>{ip.patentDTO.patentType}</span>
          </div>
          <span styleName="ip-card-productID">产品ID: {ip.patentDTO.applicationNumber}</span>
          <span styleName="ip-card-patentNum">行业类型: {ip.patentDTO.industryCategory}</span>
        </div>
        <div styleName="ip-card-publisher">
          <span styleName="ip-card-avatar"><img src={ip.photo} /></span>
          <div styleName="ip-card-detail">
            <span styleName="ip-card-name">{ip.name}</span>
            <br />
            <span styleName="ip-card-time">发布于 {moment(ip.patentDTO.publicationDate).format('MM-DD')}</span>
          </div>
          <button styleName="ip-card-checked" onClick={this.handleClick.bind(this, ip.patentDTO.id)}>查看</button>
        </div>
      </div>
    )
  }
}
