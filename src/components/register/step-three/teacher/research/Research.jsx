import React from 'react'
import { FormTitle } from '../../common'
import './research.css'
import NewResearchItem from './new-research-item/NewResearchItem'
import ResearchItem from './research-item/ResearchItem'

export default class Research extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false,
      reas: []
    }
    this.closeModal = this.closeModal.bind(this)
    this.confirmAdd = this.confirmAdd.bind(this)
  }

  showModal = () => {
    this.setState({
      visible: true
    })
  }

  confirmAdd(status, rea) {
    this.setState(pre => ({
      visible: status,
      reas: pre.reas.concat(rea)
    }))
  }

  closeModal(status) {
    this.setState(pre => ({
      visible: status
    }))
  }
  render() {
    const researchItems = this.state.reas.map((reaItem, idx) => <ResearchItem rea={reaItem} key={idx} />)
    return (
      <div styleName="research">
        <FormTitle title={'科研情况'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          {researchItems}
          <NewResearchItem visible={this.state.visible} closeModal={this.closeModal} confirmAdd={this.confirmAdd} />
        </div>
      </div>
    )
  }
}
