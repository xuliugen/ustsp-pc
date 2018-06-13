import React from 'react'
import { inject, observer } from 'mobx-react'
import { MessageApi } from 'src/ajax'
import { message } from 'antd'

const addFriend = WrappedComponent => inject('userStore')(observer(class extends React.Component {
  constructor() {
    super()
    this.handleAddFriend = this.handleAddFriend.bind(this)
  }

  async handleAddFriend(ownerId, partyId) {
    if (partyId === ownerId) {
      message.warn('请不要加自己为好友~')
    } else {
      const isComplete = this.props.userStore.checkIfInfoCompleted()
      if (isComplete) {
        try {
          await MessageApi.sendAddFirend(ownerId, partyId)
          message.success('发送添加好友请求成功')
        } catch (error) {
          console.log(error)
        }
      }
    }
  }

  render() {
    const props = {
      ...this.props,
      handleAddFriend: this.handleAddFriend
    }
    return (
      <WrappedComponent {...props} />
    )
  }
}))

export default addFriend
