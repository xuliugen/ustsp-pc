import React from 'react'
import { FormTitle } from '../../common'
import './RAward.css'
import NewRAwardItem from './new-r-award-item/NewRAwardItem'
import RAwardItem from './r-award-item/RAwardItem'

export default class RAward extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false,
      RAwards: []
    }
    this.closeModal = this.closeModal.bind(this)
    this.confirmAdd = this.confirmAdd.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  confirmAdd(status, RAwrad) {
    this.setState(pre => ({
      visible: status,
      RAwards: pre.RAwards.concat(RAwrad)
    }))
  }

  closeModal(status) {
    this.setState(pre => ({
      visible: status
    }))
  }
  render() {
    const RAwardItems = this.state.RAwards.map((rAwardItem, idx) => <RAwardItem RAward={rAwardItem} key={idx} />)
    return (
      <div styleName="r-award">
        <FormTitle title={'科研获奖'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {RAwardItems}
          <NewRAwardItem visible={this.state.visible} closeModal={this.closeModal} confirmAdd={this.confirmAdd} />
        </div>
      </div>
    )
  }
}
