import React from 'react'
import { Divider } from 'antd'
import './studentContent.css'

import { ProjectsJoin, Introduction, Educations, Awards, Experiences } from 'components/detail/common'
import StudentCard from 'components/detail/student/student-card/StudentCard'

export default class StudentContent extends React.Component {
  render() {
    return (
      <div>
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
      </div>
    )
  }
}
