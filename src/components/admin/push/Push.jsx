import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PushMessages, PushRecords } from '.'
import PostDetail from 'components/common/post-detail/PostDetail'

export default class Push extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/push-messages`} component={PushMessages} />
        <Route path={`${match.url}/push-records`} component={PushRecords} exact />
        <Route path={`${match.url}/push-records/:id`} component={PostDetail} />
      </Switch>
    )
  }
}
