// @flow
import React from 'react'
import './ipHeader.css'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('searchStore')
@observer
export default class IpHeader extends React.Component<{}> {
  render() {
    return (
      <div styleName="ip-title">
        <span>知识产权库</span>
        <Link to="/search" styleName="more" onClick={() => { this.props.searchStore.setType('achievement') }}>更多</Link>
      </div>
    )
  }
}
