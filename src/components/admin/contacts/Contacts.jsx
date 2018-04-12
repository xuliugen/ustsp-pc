import React from 'react'
import { Switch, Route } from 'react-router-dom'
import { FriendsNews, MyFriends, SecondDegreeContacts } from '.'

export default class Contacts extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/friends`} component={MyFriends} />
        <Route path={`${match.url}/friends-news`} component={FriendsNews} />
        <Route path={`${match.url}/second-degree-contacts`} component={SecondDegreeContacts} />
      </Switch>
    )
  }
}
