import React from 'react'
import './demandDetail.css'
import ApplyCard from './apply-card/ApplyCard'
import OrderDetail from './order-detail/OrderDetail'
import { observer, inject } from 'mobx-react'

@inject('userStore', 'demandStore')
@observer
export default class DemandDetail extends React.Component {
  componentWillMount() {
    this.props.demandStore.setProjectId(this.props.match.params.id)
    this.props.demandStore.dispatchGetDemandInfo()
  }

  componentWillUnmount() {
    this.props.demandStore.setProjectId('')
  }

  render() {
    return (
      <div>
        <OrderDetail />
        <div styleName="apply-card-wrapper">
          {this.props.demandStore.currentStatus === 1 && <ApplyCard />}
        </div>
      </div>
    )
  }
}
