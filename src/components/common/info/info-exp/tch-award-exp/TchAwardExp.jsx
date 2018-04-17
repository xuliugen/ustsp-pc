import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import InfoExp from '../InfoExp'
import AwardItem from './award-item/AwardItem'
import TchAwardForm from './tch-award-form/TchAwardForm'
import CreateDialog from './create-dialog/CreateDialog'
import UpdateDialog from './update-dialog/UpdateDialog'

@inject('userStore', 'registerStore')
@observer
export default class TchResearchExp extends React.Component {
  state = {
    items: []
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
      const { data } = await UserInfoApi.fetchAward(id)
      const type = this.props.isResearch ? 1 : 0
      this.setState({
        items: data.filter(({ isResearch }) => isResearch === type)
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const props = {
      options: {
        title: this.props.isResearch ? '科研获奖' : '非科研获奖',
        editable: this.props.editable,
        items: this.state.items,
        isResearch: this.props.isResearch
      },
      ItemComp: AwardItem,
      FormComp: TchAwardForm,
      CreateDialog: CreateDialog,
      UpdateDialog: UpdateDialog
    }
    return (
      <InfoExp {...props} />
    )
  }
}
