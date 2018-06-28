import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PushMessages } from '.'

export default class Push extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/push-messages`} component={PushMessages} />
      </Switch>
    )
  }
}
