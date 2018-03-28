import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NewIP } from '.'

export default class IP extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/new-ip`} component={NewIP} />
      </Switch>
    )
  }
}
