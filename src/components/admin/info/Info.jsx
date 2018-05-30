import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { InfoDetail, InfoModify, ChangePwd } from '.'

export default class IP extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/detail`} component={InfoDetail} />
        <Route path={`${match.url}/modify`} component={InfoModify} />
        <Route path={`${match.url}/change-pwd`} component={ChangePwd} />
      </Switch>
    )
  }
}
