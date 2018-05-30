import React from 'react'
import { addFriend } from 'components/common'
import { Button } from 'antd'
import { inject, observer } from 'mobx-react'
import { MessageApi } from 'src/ajax'

@addFriend
@inject('userStore')
@observer
export default class AddFriendBtn extends React.Component {
  constructor() {
    super()
    this.state = {
      isFriend: false
    }
  }

  componentWillReceiveProps(nextProps) {
    this.checkIsFriend(nextProps)
  }

  componentDidMount() {
    if (this.props.info.id) {
      this.checkIsFriend(this.props)
    }
  }

  async checkIsFriend(prop) {
    const { userStore } = this.props
    if (!userStore.isLogin) {
      return
    }
    try {
      const msg = await MessageApi.checkIsFriend(this.props.userStore.user.id, prop.info.id)
      if (msg.data > 0) {
        this.setState({
          isFriend: true
        })
      }
    } catch (error) {
      console.log(error)
    }
  }

  handleAdd = () => {
    this.props.handleAddFriend(this.props.userStore.user.id, this.props.info.id)
  }

  render() {
    const addBtn = this.state.isFriend ? (
      <Button icon="check" size="small" style={{ color: '#1dbbae', border: 'none' }}>互为好友</Button>
    ) : (
      <Button icon="plus" size="small" onClick={this.handleAdd} >加好友</Button>
    )
    return (
      <div>
        {addBtn}
      </div>
    )
  }
}
