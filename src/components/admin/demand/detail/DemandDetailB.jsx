import React from 'react'
import { observer, inject } from 'mobx-react'
import OrderDetail from './order-detail/OrderDetail'
import './demandDetail.css'
import SignCardB from './sign-card-b/SignCardB'
import UnderwayCardB from './underway-card-b/UnderwayCardB'
import CheckCardB from './check-card-b/CheckCardB'
import EvaluateCardB from './evaluate-card-b/EvaluateCardB'
import FinishedCard from './finished-card/FinishedCard'
import RejectCardB from './reject-card-b/RejectCardB'

@inject('demandStore', 'userStore')
@observer
export default class DemandDetailB extends React.Component {
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
    const status = this.props.demandStore.currentStatus
    if (status >= 2 && this.props.demandStore.partyB.partyId !== this.props.userStore.user.id) {
      return <RejectCardB status={status} />
    }
    switch (status) {
      case 2:
        return <SignCardB />
      case 3:
        return <UnderwayCardB />
      case 4:
        return <CheckCardB />
      case 5:
        return <EvaluateCardB />
      case 6:
        return <FinishedCard />
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
