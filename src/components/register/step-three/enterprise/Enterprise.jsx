import React from 'react'
import './enterprise.css'
import { Form, message } from 'antd'
import { EtpInfoApi } from 'src/ajax'
import { Link } from 'react-router-dom'
import { observer, inject } from 'mobx-react'

import EnterBaseInfo from './base-info/EnterBaseInfo'
import EnterOtherInfo from './other-info/EnterOtherInfo'

@inject('registerStore')
@observer
class StepThreeEnterprise extends React.Component {
  state = {
    photo: ''
  }

  constructor() {
    super()
    this.setPhoto = this.setPhoto.bind(this)
  }

  setPhoto(url) {
    this.setState({
      photo: url
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
          businessPhoto: '',
          ...values,
          birth: values.birth ? values.birth.valueOf() : null
        })
        message.success('注册成功')
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
            <EnterBaseInfo
              form={this.props.form}
              photo={this.state.photo}
              setPhoto={this.setPhoto} />
            <EnterOtherInfo form={this.props.form} />
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
