import React from 'react'
import './tchBaseForm.css'
import { Form, Input, Radio, DatePicker, Row, Col } from 'antd'
import moment from 'moment'

import FormTitle from '../../form-title/FormTitle'
import UploadAvatar from '../../upload-avatar/UploadAvatar'
import UploadTchPhoto from './upload-tch-license/UploadTchLicense'

const RadioGroup = Radio.Group
const FormItem = Form.Item

export default class TchBaseInfo extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { tchInfo } = this.props
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="姓名">
                {getFieldDecorator('realName', {
                  initialValue: tchInfo && tchInfo.realName,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入姓名' }
                  ]
                })(
                  <Input
                    placeholder="姓名" />
                )}
              </FormItem>
              <FormItem label="性别">
                {getFieldDecorator('sex', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择性别' }
                  ],
                  initialValue: (tchInfo && tchInfo.sex) || '0'
                })(
                  <RadioGroup styleName="gender" name="radiogroup" >
                    <Radio styleName="gender-radio" value={'0'}>男</Radio>
                    <Radio styleName="gender-radio" value={'1'}>女</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem label="选择出生日期">
                {getFieldDecorator('birth', {
                  initialValue: tchInfo && moment(tchInfo.birth)
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="微信">
                {getFieldDecorator('wechat', {
                  initialValue: tchInfo && tchInfo.wechat,
                  validateTrigger: 'onBlur'
                })(
                  <Input
                    placeholder="微信" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar
                photo={this.props.tchPhoto}
                setPhoto={this.props.setTchPhoto}
              />
              <FormItem styleName="qq" label="QQ">
                {getFieldDecorator('qq', {
                  initialValue: tchInfo && tchInfo.qq,
                  validateTrigger: 'onBlur'
                })(
                  <Input
                    placeholder="QQ" type="number" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <UploadTchPhoto tchCertificate={this.props.tchCertificate} setTchCertificate={this.props.setTchCertificate} />
          </Row>
        </div>
      </div>
    )
  }
}
