import React from 'react'
import { FormTitle } from '../../common'
import './tchEduExp.css'
import ExpItem from './exp-item/ExpItem'
import NewExpItem from './new-exp-item/NewExpItem'

export default class TchEdicationalExperience extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false,
      exps: []
    }
    this.closeModal = this.closeModal.bind(this)
    this.confirmAdd = this.confirmAdd.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  confirmAdd(status, exp) {
    this.setState(pre => ({
      visible: status,
      exps: pre.exps.concat(exp)
    }))
  }

  closeModal(status) {
    this.setState(pre => ({
      visible: status
    }))
  }

  render() {
    const expItems = this.state.exps.map((expItem, idx) => <ExpItem exp={expItem} key={idx} />)
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {expItems}
          <NewExpItem visible={this.state.visible} closeModal={this.closeModal} confirmAdd={this.confirmAdd} />
        </div>
      </div>
    )
  }
}
