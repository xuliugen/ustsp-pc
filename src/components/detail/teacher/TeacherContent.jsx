import React from 'react'
import { Divider } from 'antd'
import './teacherContent.css'
import { withRouter } from 'react-router-dom'
import InfoTeacher from 'components/detail/teacher/info-teacher/InfoTeacher'
import Awards from './awards/Awards'
import Experiences from './experiences/Experiences'
import Educations from './educations/Educations'
import Introduction from './introduction/Introduction'
import { DetailOptions } from '../common'

import { TchInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

@withRouter
@inject('userStore')
@observer
export default class TeacherContent extends React.Component {
  constructor() {
    super()
    this.state = {
      intro: {
        introduction: '',
        academicExperience: '',
        scienceIntroduction: '',
        publishPaper: ''
      },
      infoTeacher: {
        name: '王德福',
        avatar: '',
        read: 1145,
        title: '教授 / 博士',
        school: '中国科学院 /计算技术研究所',
        major: '擅长领域:计算技术 / 前端编程',
        wechat: 'wfd560823',
        qq: 999999999,
        email: 'wfd@163.com'
      },
      userAwardInfos: [],
      userEducationInfos: [],
      researchInfos: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getTeacherDetail(nextProps.match.params.id)
  }

  componentDidMount() {
    this.getTeacherDetail(this.props.match.params.id)
  }

  async getTeacherDetail(tid) {
    try {
      const { data } = await TchInfoApi.getTeacherInfo(tid)
      const res = await TchInfoApi.getOtherAddInfo(tid)
      data.teacherInfoDTO.email = data.userInfoDTO.email
      data.teacherInfoDTO.pageView = (data.userInfoDTO.pageView || data.teacherInfoDTO.pageView) || 0
      this.setState({
        intro: {
          introduction: data.teacherInfoDTO.introduction,
          academicExperience: data.teacherInfoDTO.academicExperience,
          scienceIntroduction: data.teacherInfoDTO.scienceIntroduction,
          publishPaper: data.teacherInfoDTO.publishPaper
        },
        infoTeacher: data.teacherInfoDTO,
        userAwardInfos: res.data.userAwardInfoDTO,
        userEducationInfos: res.data.userEducationInfoDTO,
        researchInfos: res.data.researchInfoDTO
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const intro = (
      <div>
        <Divider><span styleName="divider">个人履历</span></Divider>
        <Introduction introduction={this.state.intro} />
        {/* <Divider><span styleName="divider">TA参与的平台项目</span></Divider>
        <ProjectsJoin /> */}
        <Divider><span styleName="divider">教育经历</span></Divider>
        <Educations userEducationInfos={this.state.userEducationInfos} />
        <Divider><span styleName="divider">科研情况</span></Divider>
        <Experiences researchInfos={this.state.researchInfos} />
        <Divider><span styleName="divider">获奖经历</span></Divider>
        <Awards userAwardInfos={this.state.userAwardInfos} />
      </div>
    )
    return (
      <div>
        <InfoTeacher infoTeacher={this.state.infoTeacher} />
        <DetailOptions type="teacher" intro={intro} />
      </div>
    )
  }
}
