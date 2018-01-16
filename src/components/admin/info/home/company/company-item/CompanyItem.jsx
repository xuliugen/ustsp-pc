// @flow
import React from 'react'
import './companyItem.css'
import ImgBrand from '../../../../../../assets/company.png'
import ImgLocation from '../../../../../../assets/location.png'

export default class CompanyItem extends React.Component<{}> {
  render() {
    return (
      <div styleName="company-card">
        <div styleName="company-brand">
          <img src={ImgBrand} />
        </div>
        <div styleName="detail">
          <div styleName="name">{this.props.company.name}</div>
          <div styleName="field">{this.props.company.field}</div>
          <div styleName="location">
            <span><img src={ImgLocation} />&nbsp;&nbsp;{this.props.company.location}</span>
          </div>
        </div>
      </div>
    )
  }
}
