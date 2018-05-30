// @flow
import React from 'react'
import { TalentApi } from 'src/ajax'
import './talent.css'

import TalentHeader from './header/TalentHeader'
import TalentItem from './talent-item/TalentItem'

export default class Talent extends React.Component<{}> {
  state = {
    talents: []
  }

  async componentWillMount() {
    try {
      const { data } = await TalentApi.fetchTalents()
      if (Array.isArray(data)) {
        this.setState({
          talents: data.slice(0, 5)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const talentItems = this.state.talents.map((talent, idx) => {
      return <li key={idx}><TalentItem talent={talent} /></li>
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
