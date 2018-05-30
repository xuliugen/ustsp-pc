// @flow
import React from 'react'
import './header.css'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('searchStore')
@observer
export default class Header extends React.Component<{}> {
  render() {
    return (
      <div styleName="title">
        <span>项目库</span>
        <Link to="/search" styleName="more" onClick={() => { this.props.searchStore.setType('project') }}>更多</Link>
      </div>
    )
  }
}
