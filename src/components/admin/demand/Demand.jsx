import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { NewDemand, PublishedDemand, DemandDetail, UndertakenDemand } from '.'
import OrderDetail from './detail/order-detail/OrderDetail'

export default class DemandModule extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/new-demand`} component={NewDemand} />
        <Route path={`${match.url}/published-demand`} component={PublishedDemand} exact />
        <Route path={`${match.url}/published-demand/:id`} component={DemandDetail} />
        <Route path={`${match.url}/undertaken-demand`} component={UndertakenDemand} exact />
        <Route path={`${match.url}/undertaken-demand/:id`} component={OrderDetail} />
      </Switch>
    )
  }
}
