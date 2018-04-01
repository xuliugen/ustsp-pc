import React from 'react'
import './ipItem.css'
import { Link } from 'react-router-dom'

export default class IPItem extends React.Component {
  render() {
    const { patent } = this.props
    return (
      <div styleName="root">
        <div styleName="header">
          <Link to={`/ip/${patent.id}`}><span styleName="name">{patent.patentName}</span></Link>
          <span styleName="status">{patent.legalStatus}</span>
        </div>
        <div styleName="info">
          <div>
            <span>行业分类：</span>
            <span>{patent.industryCategory}</span>
          </div>
          <div style={{marginLeft: '50px'}}>
            <span>专类类型：</span>
            <span>{patent.patentType}</span>
          </div>
        </div>
      </div>
    )
  }
}
