import React from 'react'
import './stuEduExp.css'

import FormTitle from '../form-title/FormTitle'
import EduExpItem from '../edu-exp-item/EduExpItem'
import NewStuEduDialog from './new-stu-edu-dialog/NewStuEduDialog'

export default class StuEduExp extends React.Component {
  state = {
    visible: false,
    expItems: []
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
    const { editable } = this.props
    return (
      <div styleName="educational-experience" ref={this.props.containerRef}>
        <FormTitle title={'教育经历'} hasAddBtn={editable} handleAddClick={this.showModal} />
        <div styleName="content">
          {this.state.expItems.map((item, idx) => <EduExpItem key={idx} exp={item} />)}
        </div>
        {editable && <NewStuEduDialog visible={this.state.visible} closeModel={this.closeModel} confirmAdd={this.confirmAdd} />}
      </div>
    )
  }
}
