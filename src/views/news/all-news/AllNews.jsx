import React from 'react'
import './allNews.css'

import { Header, Footer, ProjectsRmd, TalentsRmd } from 'components/common'
import { AllNewsContent } from 'components/news'

export default class AllNews extends React.Component {
  render() {
    let RmdContent = (<div>
      <TalentsRmd />
      <ProjectsRmd />
    </div>)

    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="mid-container" className="clearfix">
          <main styleName="left-container">
            <AllNewsContent />
          </main>
          <div styleName="right-container">
            {RmdContent}
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
