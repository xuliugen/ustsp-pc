import React from 'react'
import { FormTitle } from '../../common'
import './tchEduExp.css'
import NewExpItem from './new-exp-item/NewExpItem'

export default class StuEdicationalExperience extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      visible: false
    }
  }
  showModal = () => {
    this.setState({
      visible: true
    })
  }

  closeModal=(status) => {
    this.setState({
      visible: status
    })
  }

  render() {
    return (
      <div styleName="educational-experience">
        <FormTitle title={'教育经历'} hasAddBtn handleAddClick={this.showModal} />
        <div styleName="content">
          <NewExpItem visible={this.state.visible} closeModal={this.closeModal} />
        </div>
      </div>
    )
  }
}
