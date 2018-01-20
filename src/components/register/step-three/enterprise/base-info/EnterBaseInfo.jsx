// @flow
import React from 'react'
import { Form, Row, Col, Input, DatePicker, Select } from 'antd'
import { FormTitle, UploadAvatar } from '../../common'
import './enterBaseInfo.css'
import UploadLicensePic from '../upload-license-picture/UploadLicensePic'

const FormItem = Form.Item
const Option = Select.Option

export default class EnterBaseInfor extends React.Component<{}> {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="base-info">
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
              <FormItem label="地点">
                {getFieldDecorator('place', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入地点' }
                  ]
                })(
                  <Input placeholder="地点" />
                )}
              </FormItem>
              <FormItem label="成立时间">
                {getFieldDecorator('birth', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入成立时间' }
                  ]
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="规模">
                {getFieldDecorator('scale', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择企业规模' }
                  ]
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
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择企业性质' }
                  ]
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
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入企业营业执照号' }
                  ]
                })(
                  <Input placeholder="企业营业执照号" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar />
              <FormItem label="行业" style={{ marginTop: '12px' }}>
                {getFieldDecorator('industry', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入企业行业' }
                  ]
                })(
                  // <Select style={{ width: '100%' }} >
                  //   <Option value="计算机网络/大金融">计算机网络/大金融</Option>
                  // </Select>
                  <Input placeholder="行业" />
                )}
              </FormItem>
              <FormItem label="发展阶段">
                {getFieldDecorator('stage', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择发展阶段' }
                  ]
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
            <UploadLicensePic />
          </FormItem>
        </div>
      </div>
    )
  }
}
