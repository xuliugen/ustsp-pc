// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import FriendItem from './friend-item/FriendItem'
import avatar1 from 'src/assets/avatar1.png'
import './commonFriends.css'

type FriendObj = {
  name: string,
  avatar: string
}

type State = {
  friends: Array<FriendObj>
}

export default class CommonFriends extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      friends: [
        { name: '陈独秀', avatar: avatar1 },
        { name: '陈独秀', avatar: avatar1 },
        { name: '陈独秀', avatar: avatar1 },
        { name: '陈独秀', avatar: avatar1 },
        { name: '陈独秀', avatar: avatar1 },
        { name: '陈独秀', avatar: avatar1 }
      ]
    }
  }
  render() {
    const friendItem = this.state.friends.map((item, idx) => {
      return <FriendItem friend={item} key={idx} />
    })
    return (
      <div styleName="friend">
        <Header title="共同好友" />
        <div styleName="friend-item-wrapper">
          { friendItem }
        </div>
      </div>
    )
  }
}