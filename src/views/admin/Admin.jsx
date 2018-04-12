import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import './admin.css'

import { Header, Sidebar, Home, Info, Demand, Mgnt, News, IP, Contacts } from 'components/admin'

export default class Admin extends React.Component {
  state = {
    collapsed: false
  }

  render() {
    const { match } = this.props
    return (
      <div styleName="admin">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <aside styleName="sidebar-wrapper">
          <Sidebar />
        </aside>
        <div styleName="content-wrapper">
          <Switch>
            <Route exact path={`${match.url}/`} component={Home} />
            <Route path={`${match.url}/info`} component={Info} />
            <Route path={`${match.url}/demand`} component={Demand} />
            <Route path={`${match.url}/mgnt`} component={Mgnt} />
            <Route path={`${match.url}/news`} component={News} />
            <Route path={`${match.url}/ip`} component={IP} />
            <Route path={`${match.url}/contacts`} component={Contacts} />
            <Redirect from={`${match.url}/`} to={`${match.url}/`} />
          </Switch>
        </div>
      </div>
    )
  }
}
