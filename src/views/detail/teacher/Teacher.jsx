import React from 'react'
import { Header, Footer } from 'components/common'
import { Divider } from 'antd'
import './teacher.css'
import InfoTeacher from 'components/detail/teacher/info-teacher/InfoTeacher'

import { TalentsRmd, CommonFriends, Others, Nav, ProjectsJoin, Introduction, Educations, Awards, Experiences } from 'components/detail/common'

export default class Teacher extends React.Component {
  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="nav-container">
          <Nav />
        </div>
        <div styleName="mid-container">
          <div styleName="left-container">
            <InfoTeacher />
            <Divider><span styleName="divider">TA参与的平台项目</span></Divider>
            <ProjectsJoin />
            <Divider><span styleName="divider">个人简介</span></Divider>
            <Introduction />
            <Divider><span styleName="divider">教育经历</span></Divider>
            <Educations />
            <Divider><span styleName="divider">获奖经历</span></Divider>
            <Awards />
            <Divider><span styleName="divider">项目经验</span></Divider>
            <Experiences />
          </div>
          <div styleName="right-container">
            <TalentsRmd />
            <CommonFriends />
            <Others />
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
