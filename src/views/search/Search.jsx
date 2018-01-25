import React from 'react'
import './search.css'

import { Header, Footer } from 'components/common/'
import { SearchBar, ProjectResult } from 'components/search'

export default class Search extends React.Component {
  render() {
    return (
      <div styleName="search-page">
        <Header />
        <SearchBar />
        <div styleName="result-wrapper" className="clearfix">
          <div styleName="left-container">
            <ProjectResult />
          </div>
          <div styleName="right-container">
            23
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
