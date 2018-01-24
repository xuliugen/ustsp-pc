import React from 'react'
import './demandDetail.css'
import ApplyCard from './apply-card/ApplyCard'
import OrderDetail from './order-detail/OrderDetail'

export default class DemandDetail extends React.Component {
  render() {
    return (
      <div>
        <OrderDetail />
        <div styleName="apply-card-wrapper">
          <ApplyCard />
        </div>
      </div>
    )
  }
}
