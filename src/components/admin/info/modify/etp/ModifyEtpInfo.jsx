import React from 'react'
import './modifyEtpInfo.css'
import { Form, message } from 'antd'
import { EtpInfoApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

import { EtpBaseForm, EtpOthersForm } from 'components/common/info'

@withRouter
@Form.create()
export default class ModifyEtpInfo extends React.Component {
  state = {
    etpInfo: {},
    etpPhoto: null,
    etpLicense: null
  }

  constructor(props) {
    super(props)
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

  async getInfo() {
    const { data } = await EtpInfoApi.getEnterpriseInfo(this.props.userId)
    this.setState({
      etpInfo: data,
      etpPhoto: data.photo,
      etpLicense: data.businessPhoto
    })
  }

  handleModifyClick = (e) => {
    e.preventDefault()
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const etpInfo = {
          id: this.props.userId,
          photo: this.state.etpPhoto,
          businessPhoto: this.state.etpLicense,
          ...values,
          birth: values.birth ? values.birth.valueOf() : null
        }
        try {
          await EtpInfoApi.updateInfo(etpInfo)
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
            <EtpBaseForm
              mode="modify"
              form={this.props.form}
              etpInfo={this.state.etpInfo}
              etpPhoto={this.state.etpPhoto}
              etpLicense={this.state.etpLicense}
              setEtpPhoto={this.setEtpPhoto}
              setEtpLicense={this.setEtpLicense} />
            <EtpOthersForm
              form={this.props.form}
              etpInfo={this.state.etpInfo} />
          </Form>
          <button onClick={this.handleModifyClick} styleName="confirm-button">确认修改</button>
        </div>
      </div>
    )
  }
}
