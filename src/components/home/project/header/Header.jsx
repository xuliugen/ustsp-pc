// @flow
import React from 'react'
import './header.css'

export default class Header extends React.Component<{}> {
  render() {
    return (
      <div styleName="title">
        <span>项目库</span>
        <a href="#" styleName="more">更多</a>
      </div>
    )
  }
}
