import React from 'react'
import './stuEduExp.css'
import { StuInfoApi } from 'src/ajax'
import { inject } from 'mobx-react'

import FormTitle from '../form-title/FormTitle'
import EduExpItem from '../edu-exp-item/EduExpItem'
import CreateStuEduDialog from './create-stu-edu-dialog/CreateStuEduDialog'
import UpdateStuEduDialog from './update-stu-edu-dialog/UpdateStuEduDialog'

@inject('userStore')
export default class StuEduExp extends React.Component {
  state = {
    createDialogVisible: false,
    updateDialogVisible: false,
    expItems: [],
    selectedExp: null
  }

  async componentDidMount() {
    try {
      const { data } = await StuInfoApi.getEduInfo(this.props.userStore.user.id)
      this.setState({
        expItems: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  showModal(type, exp) {
    switch (type) {
      case 'create':
        this.setState({
          createDialogVisible: true
        })
        break
      case 'update':
        this.setState({
          updateDialogVisible: true,
          selectedExp: exp
        })
        break
    }
  }

  closeModel = (type) => {
    switch (type) {
      case 'create':
        this.setState({
          createDialogVisible: false
        })
        break
      case 'update':
        this.setState({
          updateDialogVisible: false
        })
        break
    }
  }

  handleConfirm = (type, expItem) => {
    switch (type) {
      case 'create':
        this.setState((prev) => ({
          createDialogVisible: false,
          expItems: prev.expItems.concat(expItem)
        }))
        break
      case 'update':
        const expIdx = this.state.expItems.findIndex(exp => exp.id === this.state.selectedExp.id)
        let newExpItems = this.state.expItems
        newExpItems.splice(expIdx, 1, expItem)
        this.setState(pre => ({
          updateDialogVisible: false,
          expItems: newExpItems,
          selectedExp: null
        }))
        break
    }
  }

  render() {
    const { editable } = this.props
    return (
      <div styleName="educational-experience" ref={this.props.containerRef}>
        <FormTitle title={'教育经历'} hasAddBtn={editable} handleAddClick={this.showModal.bind(this, 'create')} />
        <div styleName="content">
          {this.state.expItems.map((item) =>
            <EduExpItem key={item.id} exp={item} showModal={this.showModal.bind(this, 'update')} />)}
        </div>
        {editable && <CreateStuEduDialog
          visible={this.state.createDialogVisible}
          closeModel={this.closeModel.bind(this, 'create')}
          confirmAdd={this.handleConfirm.bind(this, 'create')}
        />}
        {editable && <UpdateStuEduDialog
          exp={this.state.selectedExp}
          visible={this.state.updateDialogVisible}
          closeModel={this.closeModel.bind(this, 'update')}
          confirmUpdate={this.handleConfirm.bind(this, 'update')}
        />}
      </div>
    )
  }
}
