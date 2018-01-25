import React from 'react'

import { Header } from 'components/common/'
import { SearchBar, SearchProject } from 'components/search'

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <SearchProject />
      </div>
    )
  }
}
