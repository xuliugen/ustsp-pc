import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NewDemand, PublishedDemand } from '.'

export default class DemandModule extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/new-demand`} component={NewDemand} />
        <Route path={`${match.url}/published-demand`} component={PublishedDemand} />
      </Switch>
    )
  }
}
