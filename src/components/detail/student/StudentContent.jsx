import React from 'react'
import { Divider } from 'antd'
import './studentContent.css'
import { withRouter } from 'react-router-dom'
import StudentCard from 'components/detail/student/student-card/StudentCard'
import Introduction from './introduction/Introduction'
import Educations from './educations/Educations'
import { DetailOptions } from '../common'
import { StuInfoApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

@withRouter
@inject('userStore')
@observer
export default class StudentContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      stuInfo: {
        id: '5f7afed348164f0db1f3ae321568fbc3',
        phone: null,
        password: null,
        email: null,
        avatar: null,
        pageView: null,
        userType: 0,
        isValid: true,
        createTime: 1516712893000,
        updateTime: 1516712893000,
        qq: '',
        wechat: '',
        realName: '',
        sex: '0',
        location: null,
        birth: 1449072000000,
        stuLevel: '',
        school: '',
        college: '',
        major: '',
        grade: 2,
        skill: 'JAVA',
        introduction: '',
        photo: 'http://ufind-10067447.cossh.myqcloud.com/userAvatar/defaultAvatar.svg',
        isRealName: true,
        domainName: null,
        idNumber: null,
        idValidTerm: null,
        idPhotoUrlFont: null,
        idPhotoUrlBack: null,
        type: '1'
      },
      introduction: '',
      educations: []
    }
  }

  componentWillReceiveProps(nextProps) {
    this.getStuDetail(nextProps.match.params.id)
  }

  componentDidMount() {
    this.getStuDetail(this.props.match.params.id)
  }

  async getStuDetail(sid) {
    try {
      const res = await StuInfoApi.getInfo(sid)
      const eduRes = await StuInfoApi.getEduInfo(sid)

      res.data.studentInfoDTO.email = res.data.userInfoDTO.email
      res.data.studentInfoDTO.pageView = res.data.userInfoDTO.pageView
      this.setState({
        stuInfo: res.data.studentInfoDTO,
        introduction: res.data.studentInfoDTO.introduction,
        educations: eduRes.data
      })
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const intro = (
      <div>
        {/* <Divider><span styleName="divider">TA参与的平台项目</span></Divider> */}
        {/* <ProjectsJoin /> */}
        <Divider><span styleName="divider">个人简介</span></Divider>
        <Introduction introduction={this.state.introduction} />
        <Divider><span styleName="divider">教育经历</span></Divider>
        <Educations educations={this.state.educations} />
      </div>
    )
    return (
      <div>
        <StudentCard stuInfo={this.state.stuInfo} />
        <DetailOptions type="student" intro={intro} />
      </div>
    )
  }
}
