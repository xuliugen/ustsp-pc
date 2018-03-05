// @flow
import React from 'react'
import './newsHeader.css'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('searchStore')
@observer
export default class NewsHeader extends React.Component<{}> {
  render() {
    return (
      <div styleName="title">
        <span>最新动态</span>
        <Link to="/search" styleName="more" onClick={() => { this.props.searchStore.setType('info') }}>更多</Link>
      </div>
    )
  }
}
