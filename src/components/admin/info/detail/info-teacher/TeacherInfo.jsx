import React from 'react'
import TeacherBasicInfo from './teacher-basic-info/TeacherBasicInfo'
import TeacherPersonalExp from './teacher-personal-exp/TeacherPersonalExp'
import { inject, observer } from 'mobx-react'
import { message } from 'antd'
import { TchInfoApi } from 'src/ajax'
import './teacherInfo.css'

@observer
@inject('userStore')
export default class TeacherInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      tchBasicInfo: {},
      tchPersonalExp: {}
    }
  }

  componentDidMount = async () => {
    const userId = this.props.userStore.user.id
    const sexArray = ['男', '女']
    try {
      const { data } = await TchInfoApi.getTeacherInfo(userId)
      console.log(data)
      this.setState({
        tchBasicInfo: {
          name: data.teacherInfoDTO.realName,
          sex: sexArray[parseInt(data.teacherInfoDTO.sex)],
          birth: data.teacherInfoDTO.birth,
          wechat: data.teacherInfoDTO.wechat,
          avatar: data.teacherInfoDTO.photo,
          qq: data.teacherInfoDTO.qq,
          certificate: data.teacherInfoDTO.certificate,
          phone: data.teacherInfoDTO.phone,
          email: data.teacherInfoDTO.email
        },
        tchPersonalExp: {
          university: data.teacherInfoDTO.school,
          major: data.teacherInfoDTO.major,
          college: data.teacherInfoDTO.college,
          title: data.teacherInfoDTO.title,
          researchArea: data.teacherInfoDTO.researchArea,
          teachInfo: data.teacherInfoDTO.teachInfo,
          introduction: data.teacherInfoDTO.introduction,
          academicExperience: data.teacherInfoDTO.academicExperience,
          scienceIntroduction: data.teacherInfoDTO.scienceIntroduction,
          publishPaper: data.teacherInfoDTO.publishPaper
        }
      })
    } catch (e) {
      message.error('教师信息请求失败')
      console.log(e)
    }
  }

  render() {
    return (
      <div styleName="content-wrapper">
        <TeacherBasicInfo tchBasicInfo={this.state.tchBasicInfo} />
        <TeacherPersonalExp tchPersonalExp={this.state.tchPersonalExp} />
      </div>
    )
  }
}
