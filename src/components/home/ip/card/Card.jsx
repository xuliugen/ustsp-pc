import React from 'react'
import './card.css'
import { withRouter } from 'react-router-dom'

@withRouter
export default class IpCard extends React.Component {
  handleClick = () => {
    this.props.history.push(`/ip/${this.props.ip.productID}`)
  }

  render() {
    const { ip, avatar } = this.props
    return (
      <div styleName="ip-card">
        <div styleName="ip-card-basic">
          <span styleName="ip-card-title">{ip.title}</span>
          <div styleName="ip-card-type">
            <span>{ip.type}</span>
          </div>
          <span styleName="ip-card-productID">产品ID: {ip.productID}</span>
          <span styleName="ip-card-patentNum">专利编号: {ip.patentNum}</span>
        </div>
        <div styleName="ip-card-publisher">
          <span styleName="ip-card-avatar"><img src={avatar} /></span>
          <div styleName="ip-card-detail">
            <span styleName="ip-card-name">{ip.name}</span>
            <br />
            <span styleName="ip-card-time">发布于 {ip.time}</span>
          </div>
          <button styleName="ip-card-checked" onClick={this.handleClick}>查看</button>
        </div>
      </div>
    )
  }
}
