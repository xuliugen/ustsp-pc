import React from 'react'
import { UserInfoApi } from 'src/ajax'
import { message } from 'antd'
import { observer, inject } from 'mobx-react'

const updateDecorator = WrappedComponent => {
  @inject('registerStore', 'userStore')
  @observer
  class _class extends React.Component {
    constructor(props) {
      super(props)
      this.dispatchUpdate = this.dispatchUpdate.bind(this)
    }

    async dispatchUpdate(expItem) {
      try {
        if (this.props.registerStore.initial && this.props.registerStore.initial.uid) {
          expItem.userId = this.props.registerStore.initial.uid
        } else if (this.props.userStore.user && this.props.userStore.user.id) {
          expItem.userId = this.props.userStore.user.id
        }
        // todo: change api
        await UserInfoApi.updateEdu(expItem)
        message.success('教育经历更新成功')
        this.props.confirmUpdate(expItem)
      } catch (e) {
        message.error('更新失败')
        console.log(e)
      }
    }

    render() {
      return (
        <WrappedComponent dispatchOperate={this.dispatchUpdate} {...this.props} />
      )
    }
  }

  return _class
}

export default updateDecorator
