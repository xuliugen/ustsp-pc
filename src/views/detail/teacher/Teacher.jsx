import React from 'react'
import { Header, Footer } from 'components/common'
import { Divider } from 'antd'
import './teacher.css'
import Nav from 'components/detail/teacher/nav/Nav'
import InfoTeacher from 'components/detail/teacher/info-teacher/InfoTeacher'
import Projects from 'components/detail/teacher/projects/Projects'
import Introduction from 'components/detail/teacher/introduction/Introduction'
import Educations from 'components/detail/teacher/educations/Educations'
import Awards from 'components/detail/teacher/awards/Awards'
import Experiences from 'components/detail/teacher/experiences/Experiences'

import { TalentsRmd, CommonFriends, Others } from 'components/detail/common'

export default class Teacher extends React.Component {
  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="inf-container">
          <Nav />
          <div styleName="info-detail">
            <InfoTeacher />
            <Divider><span styleName="divider">TA参与的平台项目</span></Divider>
            <Projects />
            <Divider><span styleName="divider">个人简介</span></Divider>
            <Introduction />
            <Divider><span styleName="divider">教育经历</span></Divider>
            <Educations />
            <Divider><span styleName="divider">获奖经历</span></Divider>
            <Awards />
            <Divider><span styleName="divider">项目经验</span></Divider>
            <Experiences />
          </div>
          <div styleName="inf-more">
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
