import React from 'react'
import './teacher.css'
import { Form, message } from 'antd'
import { observer, inject } from 'mobx-react'
import TchBaseInfo from './base-info/TchBaseInfo'
import PersonalExperience from './personal-experience/TchPersonalExperience'
import TchEdicationalExperience from './educational-experience/TchEduExp'
import Research from './research/Research'
import IP from './ip/IP'
import RAward from './r-award/RAward'
import NRAward from './nr-award/NRAward'
import { TchInfoApi } from 'src/ajax'

@inject('registerStore')
@observer
class StepThreeTeacher extends React.Component<{}> {
  constructor() {
    super()
    this.handleOnClickConfirm = this.handleOnClickConfirm.bind(this)
  }

  handleOnClickConfirm(e) {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const tchInfo = {
          id: 'd761509f597d4963b7aa3a31f0a5318a',
          realName: values.realName,
          sex: values.render,
          birth: values.birth,
          wechat: values.wechat,
          qq: values.qq,
          certificate: values.certificate,
          school: values.school,
          college: values.college,
          major: values.major,
          title: values.title,
          researchArea: values.researchArea,
          teachInfo: values.teachInfo,
          scienceIntroduction: values.scienceIntroduction,
          academicExperience: values.academicExperience,
          publishPaper: values.publishPaper,
          introduction: values.introduction,
          photo: 'values.photo',
          isRealName: 'true'
        }
        await TchInfoApi.completeTchInfo(tchInfo)
        message.success('注册成功，进入下一步')
      }
    })
  }

  render() {
    return (
      <div styleName="container">
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <span styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</span>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" styleName="baseInfo-form">
            <TchBaseInfo form={this.props.form} />
            <PersonalExperience form={this.props.form} />
          </Form>
          <TchEdicationalExperience />
          <Research />
          <IP />
          <RAward />
          <NRAward />
          <button onClick={this.handleOnClickConfirm} styleName="confirm-button">确认</button>
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeTeacher)
