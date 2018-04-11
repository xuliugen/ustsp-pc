import React from 'react'
import './stuEduExp.css'

import FormTitle from '../form-title/FormTitle'
import EduExpItem from '../edu-exp-item/EduExpItem'
import CreateStuEduDialog from './create-stu-edu-dialog/CreateStuEduDialog'
import UpdateStuEduDialog from './update-stu-edu-dialog/UpdateStuEduDialog'

export default class StuEduExp extends React.Component {
  state = {
    createDialogVisible: false,
    updateDialogVisible: false,
    expItems: []
  }

  showModal = () => {
    this.setState({
      createDialogVisible: true
    })
  }

  closeModel = () => {
    this.setState({
      createDialogVisible: false
    })
  }

  confirmAdd = (expItem) => {
    this.setState((prev) => ({
      createDialogVisible: false,
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
        { editable && <CreateStuEduDialog visible={this.state.createDialogVisible} closeModel={this.closeModel} confirmAdd={this.confirmAdd} /> }
        { editable && <UpdateStuEduDialog visible={this.state.updateDialogVisible} closeModel={this.closeModel} confirmAdd={this.confirmAdd} /> }
      </div>
    )
  }
}
