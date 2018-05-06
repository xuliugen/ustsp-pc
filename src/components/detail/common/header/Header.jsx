// @flow
import React from 'react'
import './header.css'

type Props = {
  title: string
}

export default class FriendHeader extends React.Component<Props> {
  render() {
    return (
      <div styleName="header-warpper">
        <span styleName="title">{ this.props.title }</span>
        {/* {this.props.title === '其他内容' ? '' : <span styleName="more">更多</span>} */}
      </div>
    )
  }
}
