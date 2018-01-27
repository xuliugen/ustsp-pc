import React from 'react'
import { Divider } from 'antd'
import './student.css'

import { Header, Footer } from 'components/common'
import { Nav, ProjectsJoin, Introduction, Educations, Awards, Experiences, TalentsRmd, CommonFriends } from 'components/detail/common'
import StudentCard from 'components/detail/student/student-card/StudentCard'
import StdNews from 'components/detail/student/std-news/StdNews'

export default class Student extends React.Component {
  state = {
    pid: this.props.match.params.id
  }

  render() {
    return (
      <div styleName="page-wrapper">
        <div styleName="header-wrapper">
          <Header />
        </div>
        <div styleName="mid-container" className="clearfix">
          <div styleName="nav-container">
            <Nav />
          </div>
          <main styleName="left-container">
            <StudentCard />
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
          </main>
          <div styleName="right-container">
            <StdNews />
            <TalentsRmd />
            <CommonFriends />
          </div>
        </div>
        <div styleName="footer-wrapper">
          <Footer />
        </div>
      </div>
    )
  }
}
