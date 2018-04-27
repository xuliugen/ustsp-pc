import React from 'react'
import './enterprise.css'
import { Form, message } from 'antd'
import { EtpInfoApi } from 'src/ajax'
import { withRouter, Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import { EtpBaseForm, EtpOthersForm } from 'components/common/info'

@withRouter
@inject('registerStore')
@observer
class StepThreeEnterprise extends React.Component {
  state = {
    etpInfo: {},
    etpPhoto: null,
    etpLicense: null
  }

  constructor() {
    super()
    this.setEtpPhoto = this.setEtpPhoto.bind(this)
    this.setEtpLicense = this.setEtpLicense.bind(this)
  }

  setEtpPhoto(photo) {
    this.setState({
      etpPhoto: photo
    })
  }

  setEtpLicense(license) {
    this.setState({
      etpLicense: license
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      console.log(err)
      try {
        await EtpInfoApi.completeInfo({
          id: this.props.registerStore.initial.uid,
          photo: this.state.photo,
          businessPhoto: this.state.license,
          ...values,
          birth: values.birth ? values.birth.valueOf() : null
        })
        message.success('注册成功')
        this.props.registerStore.clearRegData()
        this.props.history.push('/')
      } catch (e) {
        console.log(e)
      }
    })
  }

  render() {
    return (
      <div styleName="container" className="element-container" >
        <div styleName="title-wrapper">
          <span styleName="title">step 3：完善详细信息</span>
          <Link to="/" styleName="next-step">|&nbsp;&nbsp;&nbsp;跳过此步骤</Link>
        </div>
        <div styleName="form-container">
          <Form layout="vertical" onSubmit={this.handleSubmit}>
            <EtpBaseForm
              form={this.props.form}
              etpInfo={this.state.etpInfo}
              etpPhoto={this.state.etpPhoto}
              etpLicense={this.state.etpLicense}
              setEtpPhoto={this.setEtpPhoto}
              setEtpLicense={this.setEtpLicense} />
            <EtpOthersForm
              form={this.props.form}
              etpInfo={this.state.etpInfo} />
            <div styleName="confirm-btn">
              <button type="submit">确认</button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}

export default Form.create()(StepThreeEnterprise)
