import React from 'react'
import { Form, Row, Col, Input, DatePicker, Select } from 'antd'
import { FormTitle, UploadAvatar } from '../../common'
import './enterBaseInfo.css'
import UploadLicensePic from '../upload-license-picture/UploadLicensePic'
import { major } from 'src/common/dataset'

const FormItem = Form.Item
const Option = Select.Option

export default class EnterBaseInfo extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="base-info" >
        <FormTitle title={'基本信息'} />
        <div styleName="content" >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="企业名">
                {getFieldDecorator('realName', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入企业名' }
                  ]
                })(
                  <Input placeholder="企业名" />
                )}
              </FormItem>
              <FormItem label="行业">
                {getFieldDecorator('industry', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择企业行业' }
                  ]
                })(
                  <Select placeholder="行业" >
                    {major.map(name => <Option key={name}>{name}</Option>)}
                  </Select>
                )}
              </FormItem>
              <FormItem label="成立时间">
                {getFieldDecorator('birth')(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="规模">
                {getFieldDecorator('scale', {
                  validateTrigger: 'onBlur'
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="10~20人">10~20人</Option>
                    <Option value="20~50人">20~50人</Option>
                    <Option value="50人以上">50人以上</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label="性质">
                {getFieldDecorator('nature', {
                  validateTrigger: 'onBlur'
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="私营企业">私营企业</Option>
                    <Option value="国有企业">国有企业</Option>
                    <Option value="外商投资企业">外商投资企业</Option>
                  </Select>
                )}
              </FormItem>
              <FormItem label="企业营业执照号">
                {getFieldDecorator('businessLicence', {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="企业营业执照号" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar photo={this.props.photo} setPhoto={this.props.setPhoto} />
              <FormItem label="地点" style={{ marginTop: '12px' }}>
                {getFieldDecorator('place', {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="地点" />
                )}
              </FormItem>
              <FormItem label="发展阶段">
                {getFieldDecorator('stage', {
                  validateTrigger: 'onBlur'
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="不需要融资">不需要融资</Option>
                    <Option value="天使轮">天使轮</Option>
                    <Option value="A轮">A轮</Option>
                    <Option value="B轮">B轮</Option>
                    <Option value="C轮">C轮</Option>
                    <Option value="D轮及以上">D轮及以上</Option>
                    <Option value="上市公司">上市公司</Option>
                  </Select>
                )}
              </FormItem>
              {/* <FormItem label="企业营业执照号">
                {getFieldDecorator('businessLicence', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入企业营业执照号' }
                  ]
                })(
                  <Input placeholder="企业营业执照号" />
                )}
              </FormItem> */}
            </Col>
          </Row>
          <FormItem label="企业营业执照照片">
            <UploadLicensePic license={this.props.license} setLicense={this.props.setLicense} />
          </FormItem>
        </div>
      </div>
    )
  }
}
