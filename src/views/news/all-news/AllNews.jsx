import React from 'react'
import './allNews.css'

import { Header, Footer, ProjectsRmd, TalentsRmd, News } from 'components/common'
import { AllNewsContent } from 'components/news'
import { Others } from 'components/detail/common'

export default class AllNews extends React.Component {
  render() {
    let RmdContent = null

    const pathname = this.props.location.pathname
    switch (pathname.split('/')[1]) {
      case 'project':
        RmdContent = <ProjectsRmd />
        break
      case 'teacher':
        RmdContent = (
          <div>
            <TalentsRmd />
            {/* <CommonFriends /> */}
            <Others />
          </div>
        )
        break
      case 'student':
        RmdContent = (
          <div>
            <News />
            <TalentsRmd />
            {/* <CommonFriends /> */}
          </div>
        )
        break
    }

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
