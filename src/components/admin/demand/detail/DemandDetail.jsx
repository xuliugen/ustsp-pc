import React from 'react'
import './demandDetail.css'
import RegisteredPerson from './registered-person/RegisteredPerson'
import FollewedPerson from './follewed-person/FollewedPerson'

export default class DemandDetail extends React.Component {
  render() {
    return (
      <div>
        <div styleName="title">
          <span styleName="title-text">报名/关注详情</span>
          <button styleName="title-button">查看全部</button>
        </div>
        <div styleName="persons">
          <div styleName="registered" >
            <div styleName="persons-title">已报名(19)</div>
            <div styleName="persons-form">
              <RegisteredPerson />
              <RegisteredPerson />
            </div>
          </div>
          <div styleName="followed">
            <div styleName="persons-title">已关注(7)</div>
            <div styleName="persons-form">
              <FollewedPerson />
              <FollewedPerson />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
