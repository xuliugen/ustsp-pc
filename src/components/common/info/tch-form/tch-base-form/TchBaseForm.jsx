import React from 'react'
import './tchBaseForm.css'
import { Form, Input, Radio, DatePicker, Row, Col } from 'antd'
import moment from 'moment'

import FormTitle from '../../form-title/FormTitle'
import UploadAvatar from '../../upload-avatar/UploadAvatar'
import UploadTchPhoto from './upload-tch-license/UploadTchLicense'
import { inject, observer } from 'mobx-react'

const RadioGroup = Radio.Group
const FormItem = Form.Item

@inject('userStore')
@observer
export default class TchBaseInfo extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { tchInfo, mode, userStore } = this.props
    const disableNameIpt = Boolean(mode === 'modify' && userStore.user.realName)

    return (
      <div>
        <FormTitle title={'教师基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="姓名（注册之后不可以修改）">
                {getFieldDecorator('realName', {
                  initialValue: tchInfo && tchInfo.realName,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入姓名' }
                  ]
                })(
                  <Input placeholder="姓名" disabled={disableNameIpt} />
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
                  initialValue: tchInfo && tchInfo.birth && moment(tchInfo.birth)
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
