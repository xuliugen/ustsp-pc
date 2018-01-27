import React from 'react'
import './detail.css'

import { Header, Footer } from 'components/common'
import DemandInfo from 'components/detail/project/demand-info/DemandInfo'
import { ProjectsRmd } from 'components/detail/common'

export default class Detail extends React.Component {
  render() {
    let Nav = null
    let MainContent = null
    let RmdContent = null

    const pathname = this.props.location.pathname
    switch (pathname.split('/')[1]) {
      case 'project':
        MainContent = <DemandInfo />
        RmdContent = <ProjectsRmd />
        break
      case 'teacher':
        break
      case 'student':
        break
      default:
        break
    }

    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="mid-container" className="clearfix">
          <div styleName="nav-container">
            {Nav}
          </div>
          <main styleName="left-container">
            {MainContent}
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
