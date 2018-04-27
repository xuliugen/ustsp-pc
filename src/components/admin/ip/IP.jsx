import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { NewIP, TransferIP, BuyIP, IPDetailA, IPDetailB, ModifyIP } from '.'

export default class IP extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/new-ip`} component={NewIP} />
        <Route path={`${match.url}/transfer-ip`} exact component={TransferIP} />
        <Route path={`${match.url}/transfer-ip/:id`} component={IPDetailA} />
        <Route path={`${match.url}/buy-ip`} exact component={BuyIP} />
        <Route path={`${match.url}/buy-ip/:id`} component={IPDetailB} />
        <Route path={`${match.url}/modify/:id`} component={ModifyIP} />
      </Switch>
    )
  }
}
