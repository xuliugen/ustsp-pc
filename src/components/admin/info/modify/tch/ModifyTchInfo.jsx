import React from 'react'
import './modifyTchInfo.css'
import { Form, message } from 'antd'
import { TchInfoApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

import { TchEduExp, TchResearchExp, TchIpExp, TchAwardExp,
  TchBaseForm, TchRemuseForm } from 'components/common/info'

@withRouter
@Form.create()
export default class ModifyTchInfo extends React.Component {
  state = {
    tchPhoto: null,
    tchCertificate: null,
    userInfo: {},
    tchInfo: {}
  }

  constructor(props) {
    super(props)
    this.setTchPhoto = this.setTchPhoto.bind(this)
    this.setTchCertificate = this.setTchCertificate.bind(this)
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

  async getInfo() {
    const { data } = await TchInfoApi.getTeacherInfo(this.props.userId)
    this.setState({
      userInfo: data.userInfoDTO,
      tchInfo: data.teacherInfoDTO,
      tchPhoto: data.teacherInfoDTO.photo,
      tchCertificate: data.teacherInfoDTO.certificate
    })
  }

  handleModifyClick = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const tchInfo = {
          id: this.props.userId,
          realName: values.realName,
          sex: values.sex,
          birth: values.birth ? values.birth.valueOf() : null,
          wechat: values.wechat,
          qq: Number(values.qq),
          certificate: this.state.tchCertificate,
          school: values.school ? values.school[values.school.length - 1] : null,
          college: values.college,
          major: values.major ? values.major[1] : null,
          title: values.title,
          researchArea: values.researchArea,
          teachInfo: values.teachInfo,
          scienceIntroduction: values.scienceIntroduction,
          academicExperience: values.academicExperience,
          publishPaper: values.publishPaper,
          introduction: values.introduction,
          photo: this.state.tchPhoto
          // isRealName: this.props.registerStore.isClaimDataAccept
        }
        try {
          await TchInfoApi.updateTeacherInfo(tchInfo)
          message.success('修改信息成功')
          this.props.history.push('/admin/info/detail')
        } catch (e) {
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
      }
    })
  }

  componentDidMount() {
    this.getInfo()
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title-wrapper">
          <span styleName="title">修改信息</span>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" styleName="baseInfo-form">
            <TchBaseForm
              form={this.props.form}
              tchInfo={this.state.tchInfo}
              tchCertificate={this.state.tchCertificate}
              setTchCertificate={this.setTchCertificate}
              tchPhoto={this.state.tchPhoto}
              setTchPhoto={this.setTchPhoto} />
            <TchRemuseForm
              form={this.props.form}
              tchInfo={this.state.tchInfo} />
          </Form>
          <TchEduExp editable />
          <TchResearchExp editable />
          <TchIpExp editable />
          <TchAwardExp editable isResearch />
          <TchAwardExp editable />
          <button onClick={this.handleModifyClick} styleName="confirm-button">确认修改</button>
        </div>
      </div>
    )
  }
}
