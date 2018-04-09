import React from 'react'
import { Link } from 'react-router-dom'
import './ipItem.css'

export default class ipitems extends React.Component {
  render() {
    const ips = this.props.item
    return (
      <div styleName="ipitems">
        <Link to={''}>
          <div styleName="ip-name">{ips.ipname}</div>
        </Link>
        <div styleName="ip-category">{ips.category}</div>
      </div>
    )
  }
}
