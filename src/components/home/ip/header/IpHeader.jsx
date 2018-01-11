// @flow
import React from 'react'
import './ipHeader.css'

export default class IpHeader extends React.Component<{}> {
  render() {
    return (
      <div styleName="ip-title">
        <span>知识产权库</span>
        <a href="#" styleName="more">更多</a>
      </div>
    )
  }
}
