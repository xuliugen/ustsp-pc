// @flow
import React from 'react'
import './talent.css'
import TalentHeader from './header/TalentHeader'
import TalentItem from './talent-item/TalentItem'

export default class Talent extends React.Component<{}> {
  render() {
    const talentItems = [null, null, null, null, null].map((item, idx) => {
      return <li key={idx}><TalentItem /></li>
    })
    return (
      <div styleName="talent">
        <TalentHeader />
        <ul styleName="talent-items">
          {talentItems}
        </ul>
      </div>
    )
  }
}
