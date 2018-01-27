import React from 'react'
import { Divider } from 'antd'
import './teacherContent.css'

import InfoTeacher from 'components/detail/teacher/info-teacher/InfoTeacher'
import Awards from './awards/Awards'
import Experiences from './experiences/Experiences'
import Educations from './educations/Educations'
import Introduction from './introduction/Introduction'

import { TchInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

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
      userAwardInfos: [{
        id: '6a388d38dd6c4ce5a16807e7be5b989e',
        userId: 'd54abc32cbbd4a159adc3990e4103a12',
        name: '12323',
        introduction: '321123',
        time: 1516961680000,
        level: '123231',
        rank: 123213,
        isResearch: 1,
        createTime: 1516356882000,
        updateTime: 1517047577000
      }],
      userEducationInfos: [{
        id: 'd54abc32cbbd4a159adc3990e4103a12',
        userId: 'd54abc32cbbd4a159adc3990e4103a12',
        school: 'asdfaf',
        college: 'dsfaf',
        major: 'dsafdasfasf',
        level: 'asdfasf',
        startTime: 1517043119000,
        endTime: 1517043119000,
        createTime: 1516259241000,
        updateTime: 1517043119000
      }],
      researchInfos: [{
        id: '04d359ee7b204d4e807f3b846f42521e',
        userId: 'd54abc32cbbd4a159adc3990e4103a12',
        projectName: '科研项目一',
        projectLevel: '省级',
        funding: 10000,
        startTime: 1514961409000,
        endTime: 1517035005000,
        createTime: 1516430212000,
        updateTime: 1517043123000
      }]
    }
  }
  async componentDidMount() {
    const { data } = await TchInfoApi.getTeacherInfo(this.props.userStore.user.id)
    const res = await TchInfoApi.getOtherAddInfo(this.props.userStore.user.id)
    console.log(res)
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
    console.log()
  }

  render() {
    return (
      <div>
        <InfoTeacher infoTeacher={this.state.infoTeacher} />
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
  }
}
