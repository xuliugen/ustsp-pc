import React from 'react'
import './demandDetail.css'
import { observer, inject } from 'mobx-react'

import OrderDetail from './order-detail/OrderDetail'
import ApplyCard from './apply-card/ApplyCard'
import SignCardA from './sign-card-a/SignCardA'
import UnderwayCardA from './underway-card-a/UnderwayCardA'
import CheckCardA from './check-card-a/CheckCardA'

@inject('demandStore')
@observer
export default class DemandDetail extends React.Component {
  componentWillMount() {
    this.props.demandStore.setProjectId(this.props.match.params.id)
  }

  componentDidMount() {
    this.props.demandStore.dispatchGetDemandInfo()
  }

  componentWillUnmount() {
    this.props.demandStore.setProjectId('')
  }

  getCard() {
    /* toAudit(0, "审核"),
    applying(1, "报名中"),
    toSign(2, "待签单"),
    underway(3, "进行中"),
    toCheck(4, "待验收"),
    toEvaluate(5, "评价"),
    finished(6, "完成"), */
    switch (this.props.demandStore.currentStatus) {
      case 1:
        return <ApplyCard />
      case 2:
        return <SignCardA />
      case 3:
        return <UnderwayCardA />
      case 4:
        return <CheckCardA />
      // case 5:
      // case 6:
      default:
        return null
    }
  }

  render() {
    return (
      <div>
        <OrderDetail />
        <div styleName="apply-card-wrapper">
          {this.getCard()}
        </div>
      </div>
    )
  }
}
