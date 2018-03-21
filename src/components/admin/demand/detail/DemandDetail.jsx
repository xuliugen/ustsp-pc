import React from 'react'
import './demandDetail.css'
import ApplyCard from './apply-card/ApplyCard'
import SignCardA from './sign-card-a/SignCardA'
import OrderDetail from './order-detail/OrderDetail'
import { observer, inject } from 'mobx-react'

@inject('userStore', 'demandStore')
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
