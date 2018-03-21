import React from 'react'
import { observer, inject } from 'mobx-react'
import OrderDetail from './order-detail/OrderDetail'
import './demandDetail.css'

@inject('demandStore')
@observer
export default class DemandDetailB extends React.Component {
  componentWillMount() {
    this.props.demandStore.setProjectId(this.props.match.params.id)
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
      // case 2:
      //   return
      // case 3:
      //   return
      // case 4:
      //   return
      // case 5:
      //   return
      // case 6:
      //   return
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
