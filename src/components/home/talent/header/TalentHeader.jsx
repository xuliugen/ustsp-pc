// @flow
import React from 'react'
import './talentHeader.css'

export default class TalentHeader extends React.Component<{}> {
  render() {
    return (
      <header styleName="talent-header">
        <div styleName="talent-title">人才库</div>
        <a href="/" styleName="talent-more">更多</a>
      </header>
    )
  }
}
