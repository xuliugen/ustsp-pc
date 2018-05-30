import React from 'react'
import { Link } from 'react-router-dom'
import './ipItem.css'

export default class ipitems extends React.Component {
  render() {
    const ips = this.props.item
    return (
      <div styleName="ipitems">
        <Link to={`/ip/${ips.id}`}>
          <div styleName="ip-name">{ips.patentName}</div>
        </Link>
        <div styleName="ip-category">{ips.industryCategory}</div>
      </div>
    )
  }
}
