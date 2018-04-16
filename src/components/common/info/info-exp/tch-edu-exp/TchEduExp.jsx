import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import InfoExp from '../InfoExp'
import EduExpItem from '../edu-exp-item/EduExpItem'
import TchEduForm from './tch-edu-form/TchEduForm'
import CreateDialog from './create-dialog/CreateDialog'
import UpdateDialog from './update-dialog/UpdateDialog'

@inject('userStore')
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
      const { data } = await UserInfoApi.fetchEdu(this.props.userStore.user.id)
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
      FormComp: TchEduForm,
      CreateDialog: CreateDialog,
      UpdateDialog: UpdateDialog
    }
    return (
      <InfoExp {...props} />
    )
  }
}
