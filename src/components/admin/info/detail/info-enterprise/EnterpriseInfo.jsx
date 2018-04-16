import React from 'react'
import EnterPriseBasicInfo from './enterprise-basic-info/EnterpriseBasicInfo'
import EnterPriseOtherInfo from './enterprise-other-info/EnterpriseOtherInfo'
import './enterpriseInfo.css'

export default class EnterpriseInfo extends React.Component {
  render() {
    return (
      <div styleName="content-wrapper">
        <EnterPriseBasicInfo />
        <EnterPriseOtherInfo />
      </div>
    )
  }
}
