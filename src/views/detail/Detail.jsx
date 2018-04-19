import React from 'react'
import './detail.css'

import { Header, Footer, ProjectsRmd, TalentsRmd, NewsRmd } from 'components/common'
import { ProjectContent, TeacherContent, StudentContent, IPContent } from 'components/detail'

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
            <NewsRmd />
          </div>
        )
        break
      case 'student':
        MainContent = <StudentContent />
        RmdContent = (
          <div>
            <NewsRmd />
            <TalentsRmd />
            {/* <CommonFriends /> */}
          </div>
        )
        break
      case 'ip':
        MainContent = <IPContent />
        RmdContent = <ProjectsRmd />
        break
      default:
        MainContent = null
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
