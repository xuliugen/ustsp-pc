import React from 'react'
import { observer, inject } from 'mobx-react'
import './search.css'

import { Header, Footer } from 'components/common/'
import { SearchBar, ProjectResult, TalentResult } from 'components/search'

@inject('searchStore')
@observer
export default class Search extends React.Component {
  render() {
    let SearchResult = null
    switch (this.props.searchStore.type) {
      case 'project':
        SearchResult = ProjectResult
        break
      case 'talent':
        SearchResult = TalentResult
        break
      default:
        break
    }
    return (
      <div styleName="search-page">
        <Header />
        <SearchBar />
        <div styleName="result-wrapper" className="clearfix">
          <div styleName="left-container">
            <SearchResult />
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
