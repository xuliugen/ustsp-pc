// @flow
import React from 'react'
import { Switch, Route, Redirect, withRouter } from 'react-router-dom'
import { observer } from 'mobx-react'

import Home from 'src/containers/home/Home'
import Login from 'src/containers/login/Login'

@withRouter
@observer
export default class App extends React.Component<Object> {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/login" component={Login} />
          <Redirect from="/" to="/" />
        </Switch>
      </div>
    )
  }
}
