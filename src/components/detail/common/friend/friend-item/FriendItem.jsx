// @flow
import React from 'react'
import './friendItem.css'

type FriendObj = {
  name: string,
  avatar: string
}

type Props = {
  friend: Array<FriendObj>
}

export default class FriendItem extends React.Component<Props> {
  render() {
    const { friend } = this.props
    return (
      <div styleName="friend-item">
        <img styleName="avatar" src={friend.avatar} />
        <span styleName="name">{friend.name}</span>
      </div>
    )
  }
}
