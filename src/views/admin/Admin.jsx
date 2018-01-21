import React from 'react'
import { Switch, Route } from 'react-router-dom'
import './admin.css'

import { Header, Sidebar, Home, Demand, Mgnt } from 'components/admin'

export default class Admin extends React.Component {
  state = {
    collapsed: false
  }

  render() {
    const { match } = this.props
    return (
      <div styleName="admin">
        <Header />
        <aside styleName="sidebar-wrapper">
          <Sidebar />
        </aside>
        <div styleName="content-wrapper">
          <Switch>
            <Route exact path={`${match.url}/`} component={Home} />
            <Route path={`${match.url}/demand`} component={Demand} />
            <Route path={`${match.url}/mgnt`} component={Mgnt} />
          </Switch>
        </div>
      </div>
    )
  }
}
