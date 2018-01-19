import React from 'react'
import { FormTitle } from '../../common'
import './ip.css'
import NewIPItem from './new-ip-item/NewIPItem'
import IPItem from './ip-item/IPItem'

export default class IP extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false,
      ips: []
    }
    this.closeModal = this.closeModal.bind(this)
    this.confirmAdd = this.confirmAdd.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  confirmAdd(status, ip) {
    this.setState(pre => ({
      visible: status,
      ips: pre.ips.concat(ip)
    }))
  }

  closeModal(status) {
    this.setState(pre => ({
      visible: status
    }))
  }

  render() {
    const ipItems = this.state.ips.map((ipItem, idx) => <IPItem ip={ipItem} key={idx} />)
    return (
      <div styleName="ip">
        <FormTitle title={'知识产权'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {ipItems}
          <NewIPItem visible={this.state.visible} closeModal={this.closeModal} confirmAdd={this.confirmAdd} />
        </div>
      </div>
    )
  }
}
