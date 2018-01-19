import React from 'react'
import { FormTitle } from '../../common'
import './award.css'
import NewAwardItem from './new-award-item/NewAwardItem'
import AwardItem from './award-item/AwardItem'

export default class Award extends React.Component<{}> {
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
    const RAwardItems = this.state.RAwards.map((rAwardItem, idx) => <AwardItem RAward={rAwardItem} key={idx} />)
    return (
      <div styleName="r-award">
        <FormTitle title={this.props.title} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {RAwardItems}
          <NewAwardItem
            title={this.props.title}
            visible={this.state.visible}
            closeModal={this.closeModal}
            confirmAdd={this.confirmAdd}
            isResearch={this.props.isResearch} />
        </div>
      </div>
    )
  }
}
