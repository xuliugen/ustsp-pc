import React from 'react'
import './detail.css'

import { Header, Footer, ProjectsRmd, TalentsRmd, News } from 'components/common'
import { ProjectContent, TeacherContent, StudentContent, IPContent } from 'components/detail'
import { Others } from 'components/detail/common'

export default class Detail extends React.Component {
  render() {
    let Nav = null
    let MainContent = null
    let RmdContent = null

    const pathname = this.props.location.pathname
    switch (pathname.split('/')[1]) {
      case 'project':
        MainContent = <ProjectContent />
        RmdContent = <ProjectsRmd />
        break
      case 'teacher':
        MainContent = <TeacherContent />
        RmdContent = (
          <div>
            <TalentsRmd />
            {/* <CommonFriends /> */}
            <Others />
          </div>
        )
        break
      case 'student':
        MainContent = <StudentContent />
        RmdContent = (
          <div>
            <News />
            <TalentsRmd />
            {/* <CommonFriends /> */}
          </div>
        )
        break
      default:
        MainContent = <IPContent />
        RmdContent = null
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
