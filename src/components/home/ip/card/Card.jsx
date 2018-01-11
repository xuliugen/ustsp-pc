// @flow
import React from 'react'
import './card.css'
import ImgTouxiang from './wdf.png'

type IPObj = {
  title: string,
  type: string,
  productID: string,
  patentNum: string,
  name: string,
  time: string
}

type Props = {
  ip: IPObj
}

export default class IpCard extends React.Component<Props> {
  render() {
    const { ip } = this.props
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
          <span styleName="ip-card-touxiang"><img src={ImgTouxiang} /></span>
          <div styleName="ip-card-detail">
            <span styleName="ip-card-name">{ip.name}</span>
            <br />
            <span styleName="ip-card-time">发布于 {ip.time}</span>
          </div>
          <button styleName="ip-card-checked">查看</button>
        </div>
      </div>
    )
  }
}
