import React from 'react'
import { Switch, Route } from 'react-router-dom'

import { PubNews, NewsMgnt } from '.'

export default class News extends React.Component {
  render() {
    const { match } = this.props
    return (
      <Switch>
        <Route path={`${match.url}/pub-news`} component={PubNews} />
        <Route path={`${match.url}/news-mgnt`} component={NewsMgnt} />
      </Switch>
    )
  }
}
