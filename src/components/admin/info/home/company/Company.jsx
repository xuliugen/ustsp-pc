// @flow
import React from 'react'
import CardHeader from '../common/header/CardHeader'
import CompanyItem from '../company/company-item/CompanyItem'
import './company.css'

type CompanyObj = {
  name: string,
  field: string,
  location: string
}

type State = {
  company: Array<CompanyObj>
}

export default class Company extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      company: [
        { name: '腾讯科技', field: '移动互联网 / 游戏', location: '中国·深圳' },
        { name: '华为HUAWEI', field: '移动互联网 / 企业服务', location: '中国·深圳' },
        { name: 'tap4fun', field: '移动互联网 / 游戏', location: '中国·成都' },
        { name: 'Intel英特尔（中国）', field: '移动互联网', location: '中国·北京' }
      ]
    }
  }

  render() {
    return (
      <div styleName="company-interested">
        <div styleName="header-wrapper">
          <CardHeader title="可能感兴趣的企业" />
        </div>
        <div styleName="company-cards">
          {this.state.company.map((item, idx) => {
            return (
              <div styleName="company-card-wrapper">
                <CompanyItem company={item} />
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
