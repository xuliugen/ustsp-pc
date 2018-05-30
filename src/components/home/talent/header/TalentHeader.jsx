// @flow
import React from 'react'
import './talentHeader.css'
import { Link } from 'react-router-dom'
import { inject, observer } from 'mobx-react'

@inject('searchStore')
@observer
export default class TalentHeader extends React.Component<{}> {
  render() {
    return (
      <header styleName="talent-header">
        <div styleName="talent-title">人才库</div>
        <Link to="/search" styleName="talent-more" onClick={() => { this.props.searchStore.setType('talent') }}>更多</Link>
      </header>
    )
  }
}
