import React from 'react'
import { observer, inject } from 'mobx-react'
import './search.css'

import { Header, Footer } from 'components/common/'
import { SearchBar, TalentFilterBox, ProjectFilterBox, ProjectResult, TalentResult } from 'components/search'

@inject('searchStore')
@observer
export default class Search extends React.Component {
  render() {
    let searchPanel = null
    switch (this.props.searchStore.type) {
      case 'project':
        searchPanel = (
          <div>
            <ProjectFilterBox />
            <ProjectResult />
          </div>
        )
        break
      case 'talent':
        searchPanel = (
          <div>
            <TalentFilterBox />
            <TalentResult />
          </div>
        )
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
            {searchPanel}
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
