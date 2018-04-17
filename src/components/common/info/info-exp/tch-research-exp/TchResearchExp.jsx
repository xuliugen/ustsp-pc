import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import InfoExp from '../InfoExp'
import ResearchItem from './research-item/ResearchItem'
import TchResearchForm from './tch-research-form/TchResearchForm'
import CreateDialog from './create-dialog/CreateDialog'
import UpdateDialog from './update-dialog/UpdateDialog'

@inject('userStore', 'registerStore')
@observer
export default class TchResearchExp extends React.Component {
  state = {
    researchItems: []
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
      const { data } = await UserInfoApi.fetchResearch(id)
      this.setState({
        researchItems: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const props = {
      options: {
        title: '科研情况',
        editable: this.props.editable,
        items: this.state.researchItems
      },
      ItemComp: ResearchItem,
      FormComp: TchResearchForm,
      CreateDialog: CreateDialog,
      UpdateDialog: UpdateDialog
    }
    return (
      <InfoExp {...props} />
    )
  }
}
