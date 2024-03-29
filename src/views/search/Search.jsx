import React from 'react'
import { observer, inject } from 'mobx-react'
import './search.css'

import { Header, Footer, ProjectsRmd, TalentsRmd, IpRmd, NewsRmd } from 'components/common/'
import { SearchBar, TalentFilterBox, ProjectFilterBox, ProjectResult, TalentResult,
  IPResult, PatentFilterBox, NewsResult, NewsFilterBox } from 'components/search'

@inject('searchStore')
@observer
export default class Search extends React.Component {
  render() {
    let searchPanel = null
    let rmd = null
    switch (this.props.searchStore.type) {
      case 'project':
        searchPanel = (
          <div>
            <ProjectFilterBox />
            <ProjectResult />
          </div>
        )
        rmd = (
          <div>
            <ProjectsRmd />
            <TalentsRmd />
            <IpRmd />
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
        rmd = (
          <div>
            <TalentsRmd />
            <ProjectsRmd />
            <IpRmd />
          </div>
        )
        break
      case 'ip':
        searchPanel = (
          <div>
            <PatentFilterBox />
            <IPResult />
          </div>
        )
        rmd = (
          <div>
            <IpRmd />
          </div>
        )
        break
      case 'news':
        searchPanel = (
          <div>
            <NewsFilterBox />
            <NewsResult />
          </div>
        )
        rmd = (
          <div>
            <NewsRmd />
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
            {rmd}
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
