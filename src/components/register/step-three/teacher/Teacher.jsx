import React from 'react'
import './teacher.css'
import { withRouter, Link } from 'react-router-dom'
import { Form, message } from 'antd'
import { observer, inject } from 'mobx-react'
import TchBaseInfo from './base-info/TchBaseInfo'
import PersonalExperience from './personal-experience/TchPersonalExperience'
import TchEdicationalExperience from './educational-experience/TchEduExp'
import Research from './research/Research'
import IP from './ip/IP'
import Award from './r-award/Award'
import { TchInfoApi } from 'src/ajax'

@withRouter
@inject('registerStore')
@observer
class StepThreeTeacher extends React.Component<{}> {
  constructor() {
    super()
    this.handleOnClickConfirm = this.handleOnClickConfirm.bind(this)
    this.setTchCertificate = this.setTchCertificate.bind(this)
    this.setTchPhoto = this.setTchPhoto.bind(this)
    this.state = {
      tchCertificate: null,
      tchPhoto: null
    }
  }

  componentDidMount() {
    const { form } = this.props
    const { claimData, isClaimDataAccept } = this.props.registerStore

    if (isClaimDataAccept) {
      form.setFieldsValue({
        realName: claimData.name,
        render: claimData.gender === '男' ? '0' : '1',
        school: claimData.university,
        college: claimData.school,
        title: claimData.title,
        introduction: claimData.introduction,
        academicExperience: claimData.experience,
        scienceIntroduction: claimData.project,
        publishPaper: claimData.paper
      })
      this.setState({
        tchPhoto: claimData.icon
      })
    }
  }

  setTchPhoto(photo) {
    this.setState({
      tchPhoto: photo
    })
  }

  setTchCertificate(certificate) {
    this.setState({
      tchCertificate: certificate
    })
  }

  handleOnClickConfirm(e) {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const tchInfo = {
          id: this.props.registerStore.initial.uid,
          realName: values.realName,
          sex: values.render,
          birth: values.birth ? values.birth.valueOf() : null,
          wechat: values.wechat,
          qq: Number(values.qq),
          certificate: this.state.tchCertificate,
          school: values.school[values.school.length - 1],
          college: values.college,
          major: values.major,
          title: values.title,
          researchArea: values.researchArea,
          teachInfo: values.teachInfo,
          scienceIntroduction: values.scienceIntroduction,
          academicExperience: values.academicExperience,
          publishPaper: values.publishPaper,
          introduction: values.introduction,
          photo: this.state.tchPhoto,
          isRealName: this.props.registerStore.isClaimDataAccept
        }
        console.log(tchInfo)
        try {
          await TchInfoApi.completeTchInfo(tchInfo)
          message.success('完善信息成功')
          this.props.history.push('/')
        } catch (e) {
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <Link styleName="next-step" to="/">|&nbsp;&nbsp;&nbsp;跳过此步骤</Link>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" styleName="baseInfo-form">
            <TchBaseInfo form={this.props.form}
              tchCertificate={this.state.tchCertificate}
              setTchCertificate={this.setTchCertificate}
              tchPhoto={this.state.tchPhoto}
              setTchPhoto={this.setTchPhoto}
            />
            <PersonalExperience form={this.props.form} />
          </Form>
          <TchEdicationalExperience />
          <Research />
          <IP />
          <Award title={'科研获奖'} isResearch={1} />
          <Award title={'非科研获奖'} isResearch={0} />
          <button onClick={this.handleOnClickConfirm} styleName="confirm-button">确认</button>
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeTeacher)
