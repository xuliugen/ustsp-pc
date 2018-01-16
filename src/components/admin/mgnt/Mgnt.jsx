import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { UserMgnt } from '.'

export default class MgntModule extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/user-mgnt`} component={UserMgnt} />
      </Switch>
    )
  }
}
