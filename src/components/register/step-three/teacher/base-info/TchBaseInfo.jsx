import React from 'react'
import { Form, Input, Radio, DatePicker, Row, Col } from 'antd'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import { FormTitle, UploadAvatar } from '../../common'
import './tchBaseInfo.css'
import uploadTchPhoto from './upload-tch-photo/uploadTchPhoto'
const RadioGroup = Radio.Group
const FormItem = Form.Item

@withRouter
@inject('registerStore')
@observer
export default class TchBaseInfo extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="姓名">
                {getFieldDecorator('realName', {
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
                {getFieldDecorator('render', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择性别' }
                  ],
                  initialValue: '0'
                })(
                  <RadioGroup styleName="gender" name="radiogroup" >
                    <Radio styleName="gender-radio" value={'0'}>男</Radio>
                    <Radio styleName="gender-radio" value={'1'}>女</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem label="选择出生日期">
                {getFieldDecorator('birth', {
                  rules: [{ required: true, message: '请选择出生日期' }]
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="微信">
                {getFieldDecorator('wechat', {
                  validateTrigger: 'onBlur'
                })(
                  <Input
                    placeholder="微信" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar />
              <FormItem styleName="qq" label="QQ">
                {getFieldDecorator('qq', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { type: 'number', message: '请输入纯数字', transform: val => Number(val) }
                  ]
                })(
                  <Input
                    placeholder="QQ" />
                )}
              </FormItem>
            </Col>
          </Row>
          <Row>
            <uploadTchPhoto />
          </Row>
        </div>
      </div>
    )
  }
}
