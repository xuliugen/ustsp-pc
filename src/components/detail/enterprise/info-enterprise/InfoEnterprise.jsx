import React from 'react'
import { Button } from 'antd'
import './infoEnterprise.css'
import imgView from 'src/assets/ico_eye.png'
import imgAuth from './authority.png'

export default class InfoEnterprise extends React.Component {
  render() {
    const { company } = this.props
    return (
      <div styleName="root">
        <div>
          <img src={imgView} />
          <span styleName="view">{company.pageView}</span>
        </div>
        <div styleName="detail">
          <img styleName="brand" src={company.photo} />
          <div styleName="name">
            <span>{company.realName}</span>
            {company.isValid ? <img src={imgAuth} style={{ verticalAlign: 'top' }} /> : ''}
          </div>
          {/* <div styleName="slogan">成为互联网的水和电</div> */}
          <div styleName="basic">{company.place} | {company.industry} | {company.scale} | {company.nature}</div>
          <div styleName="contact">
            <span>{company.indexPage && '企业主页：' + company.indexPage}</span>
            <span styleName="wechat">{company.wechat && '微信公众号：' + company.wechat}</span>
          </div>
        </div>
        <Button type="primary" size="large">关注</Button>
      </div>
    )
  }
}
