import React from 'react'
import './newIP.css'
import { Form, message, Button } from 'antd'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import IPForm from '../common/ip-form/IPForm'

@withRouter
@inject('userStore')
@observer
@Form.create()
export default class NewIP extends React.Component {
  state = {
    document: null,
    appraisalDocument: null
  }
  submitForm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('请完善信息')
      } else {
        values.applicationDate = values.applicationDate && values.applicationDate.valueOf()
        values.publicationDate = values.publicationDate && values.publicationDate.valueOf()
        values.ownerId = this.props.userStore.user.id
        try {
          await IpApi.publishPatent(values)
          message.success('发布成功')
          this.props.history.push('/admin/ip/transfer-ip')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title-wrapper">
          <span styleName="title">发布专利</span>
        </div>
        <IPForm form={this.props.form} ip={this.state.ip} />
        <div styleName="modBtn-container">
          <Button size="large" type="primary" onClick={this.submitForm}>发布</Button>
        </div>
      </div>
    )
  }
}
