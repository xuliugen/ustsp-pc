import React from 'react'
import './header.css'

export default class RmdHeader extends React.Component {
  render() {
    return (
      <div styleName="header-warpper">
        <span styleName="title">{ this.props.title }</span>
        {/* {this.props.title === '其他内容' ? '' : <span styleName="more">更多</span>} */}
      </div>
    )
  }
}
