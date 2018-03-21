import React from 'react'
import './signCardB.css'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { message } from 'antd'

@inject('demandStore', 'userStore')
@observer
export default class SignCardB extends React.Component {
  handleConfirmSign = async () => {
    await DemandApi.changeDemandStatus({
      projectId: this.props.demandStore.projectId,
      ownerId: this.props.demandStore.demand.ownerId,
      partyId: this.props.userStore.user.id,
      status: 'underway'
    })
    message.success('签单成功')
    this.props.demandStore.dispatchGetDemandInfo()
  }

  render() {
    return (
      <div style={{ backgroundColor: 'white', height: '100px' }}>
        <button onClick={this.handleConfirmSign}>确认签单</button>
      </div>
    )
  }
}
