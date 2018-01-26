import React from 'react'
import { Header, Footer } from 'components/common'
import { Divider } from 'antd'
import './teacher.css'
import Similar from 'components/detail/common/similar/Similar'
import Friend from 'components/detail/common/friend/Friend'
import Others from 'components/detail/common/others/Others'
import Nav from 'components/detail/teacher/nav/Nav'
import InfoTeacher from 'components/detail/teacher/info-teacher/InfoTeacher'
import Projects from 'components/detail/teacher/projects/Projects'
import Introduction from 'components/detail/teacher/introduction/Introduction'
import Educations from 'components/detail/teacher/educations/Educations'
import Awards from 'components/detail/teacher/awards/Awards'
import Experiences from 'components/detail/teacher/experiences/Experiences'

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
          <div styleName="right-container">
            <Similar />
            <Friend />
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
