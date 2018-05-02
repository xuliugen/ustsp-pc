import React from 'react'
import './stuBaseForm.css'
import { Form, Input, Radio, DatePicker, Row, Col } from 'antd'
import FormTitle from '../../form-title/FormTitle'
import UploadAvatar from '../../upload-avatar/UploadAvatar'
import moment from 'moment'
import { inject, observer } from 'mobx-react'

const RadioGroup = Radio.Group
const FormItem = Form.Item

@inject('userStore')
@observer
export default class StuBaseForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { stuInfo, mode, userStore } = this.props
    const disableNameIpt = mode === 'modify' && userStore.user.realName

    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="姓名（注册之后不可以修改）">
                {getFieldDecorator('realName', {
                  initialValue: stuInfo && stuInfo.realName,
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: '请输入姓名' }]
                })(
                  <Input placeholder="姓名" disabled={disableNameIpt} />
                )}
              </FormItem>
              <FormItem label="性别">
                {getFieldDecorator('sex', {
                  initialValue: stuInfo && Number(stuInfo.sex),
                  validateTrigger: 'onBlur',
                  rules: [{ required: true, message: '请选择性别' }]
                })(
                  <RadioGroup styleName="gender" name="radiogroup">
                    <Radio styleName="gender-radio" value={0}>男</Radio>
                    <Radio styleName="gender-radio" value={1}>女</Radio>
                  </RadioGroup>
                )}
              </FormItem>
              <FormItem label="选择出生日期">
                {getFieldDecorator('birth', {
                  initialValue: stuInfo && moment(stuInfo.birth)
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="微信">
                {getFieldDecorator('wechat', {
                  initialValue: stuInfo && stuInfo.wechat
                })(
                  <Input placeholder="微信" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar photo={this.props.stuPhoto} setPhoto={this.props.setStuPhoto} />
              <FormItem styleName="qq" label="QQ">
                {getFieldDecorator('qq', {
                  initialValue: stuInfo && stuInfo.qq
                })(
                  <Input placeholder="QQ" />
                )}
              </FormItem>
            </Col>
          </Row>
        </div>
      </div>
    )
  }
}
