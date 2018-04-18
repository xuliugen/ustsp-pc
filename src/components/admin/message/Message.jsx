import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { SystemMsg, DemandNews, FriendsMsg } from '.'

export default class Message extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/system-msg`} component={SystemMsg} />
        <Route path={`${match.url}/demand-news`} component={DemandNews} />
        <Route path={`${match.url}/friends-msg`} component={FriendsMsg} />
      </Switch>
    )
  }
}
