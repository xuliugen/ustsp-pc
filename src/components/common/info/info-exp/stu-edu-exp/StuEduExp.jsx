import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import InfoExp from '../InfoExp'
import EduExpItem from '../edu-exp-item/EduExpItem'
import StuEduForm from './stu-edu-form/StuEduForm'
import CreateDialog from './create-dialog/CreateDialog'
import UpdateDialog from './update-dialog/UpdateDialog'

@inject('userStore', 'registerStore')
@observer
export default class StuEduExp extends React.Component {
  state = {
    expItems: []
  }

  componentDidMount() {
    this.retrieveItems()
  }

  async retrieveItems() {
    try {
      let id
      if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
        id = this.props.registerStore.initial.uid
      } else if (this.props.userStore.user && this.props.userStore.user.id) {
        id = this.props.userStore.user.id
      }
      const { data } = await UserInfoApi.fetchEdu(id)
      this.setState({
        expItems: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const props = {
      options: {
        title: '教育经历',
        editable: this.props.editable,
        items: this.state.expItems
      },
      ItemComp: EduExpItem,
      FormComp: StuEduForm,
      CreateDialog: CreateDialog,
      UpdateDialog: UpdateDialog
    }
    return (
      <InfoExp {...props} />
    )
  }
}
