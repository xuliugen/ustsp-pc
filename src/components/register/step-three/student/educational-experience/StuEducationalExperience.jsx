import React from 'react'
import { FormTitle } from '../../common'
import './stuEducationalExperience.css'
import ExpItem from './exp-item/ExpItem'
import NewExpItem from './new-exp-item/NewExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false,
      expItems: []
    }
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  closeModel = () => {
    this.setState({
      visible: false
    })
  }

  confirmAdd = (expItem) => {
    this.setState((prev) => ({
      visible: false,
      expItems: prev.expItems.concat(expItem)
    }))
  }

  render() {
    const expItems = this.state.expItems.map((item, idx) => {
      return (
        <ExpItem key={idx} exp={item} />
      )
    })
    return (
      <div styleName="educational-experience" ref={this.props.containerRef}>
        <FormTitle title={'教育经历'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {expItems}
          <NewExpItem visible={this.state.visible} closeModel={this.closeModel} confirmAdd={this.confirmAdd} />
        </div>
      </div>
    )
  }
}
