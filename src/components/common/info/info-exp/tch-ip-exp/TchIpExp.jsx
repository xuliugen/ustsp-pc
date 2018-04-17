import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

import InfoExp from '../InfoExp'
import IpItem from './ip-item/IpItem'
import TchIpForm from './tch-ip-form/TchIpForm'
import CreateDialog from './create-dialog/CreateDialog'
import UpdateDialog from './update-dialog/UpdateDialog'

@inject('userStore', 'registerStore')
@observer
export default class TchIpExp extends React.Component {
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
      const { data } = await UserInfoApi.fetchIp(id)
      this.setState({
        items: data
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    const props = {
      options: {
        title: '知识产权',
        editable: this.props.editable,
        items: this.state.items
      },
      ItemComp: IpItem,
      FormComp: TchIpForm,
      CreateDialog: CreateDialog,
      UpdateDialog: UpdateDialog
    }
    return (
      <InfoExp {...props} />
    )
  }
}
