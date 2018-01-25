import React from 'react'

import { Header } from 'components/common/'
import { SearchBar, ProjectResult } from 'components/search'

export default class Search extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <SearchBar />
        <ProjectResult />
      </div>
    )
  }
}
