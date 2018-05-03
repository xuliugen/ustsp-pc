import React from 'react'
import './rejectCardB.css'

export default class FinishedCard extends React.Component {
  setstatus(status) {
    switch (status) {
      case 2:
        return '待签单'
      case 3:
        return '正在进行'
      case 4:
        return '待验收'
      case 5:
        return '评价'
      case 6:
        return '完成'
      default:
        return null
    }
  }

  render() {
    const status = this.setstatus(this.props.status)
    return (
      <div>
        <div styleName="title">{status}</div>
        <div styleName="content">
          甲方已与其他人签订合同
        </div>
      </div>
    )
  }
}
