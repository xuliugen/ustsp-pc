import React from 'react'
import { Form, Row, Col, Input, DatePicker, Select } from 'antd'
import './etpBaseForm.css'
import UploadEtpLicense from './upload-etp-license/UploadEtpLicense'
import { major } from 'src/common/dataset'
import moment from 'moment'
import { inject, observer } from 'mobx-react'

import FormTitle from '../../form-title/FormTitle'
import UploadAvatar from '../../upload-avatar/UploadAvatar'

const FormItem = Form.Item
const Option = Select.Option

@inject('userStore')
@observer
export default class EtpBaseForm extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    const { etpInfo, mode, userStore } = this.props
    const disableNameIpt = mode === 'modify' && userStore.user.realName

    return (
      <div>
        <FormTitle title={'基本信息'} />
        <div styleName="content" >
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="企业名">
                {getFieldDecorator('realName', {
                  initialValue: etpInfo && etpInfo.realName,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入企业名' }
                  ]
                })(
                  <Input placeholder="企业名" disabled={disableNameIpt} />
                )}
              </FormItem>
              <FormItem label="行业">
                {getFieldDecorator('industry', {
                  initialValue: etpInfo && etpInfo.industry,
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
                {getFieldDecorator('birth', {
                  initialValue: (etpInfo && etpInfo.birth) && moment(etpInfo.birth)
                })(
                  <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                )}
              </FormItem>
              <FormItem label="规模">
                {getFieldDecorator('scale', {
                  initialValue: etpInfo && etpInfo.scale
                }, {
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
                  initialValue: etpInfo && etpInfo.nature
                }, {
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
                  initialValue: etpInfo && etpInfo.businessLicence
                }, {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="企业营业执照号" />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <UploadAvatar photo={this.props.etpPhoto} setPhoto={this.props.setEtpPhoto} />
              <FormItem label="地点" style={{ marginTop: '12px' }}>
                {getFieldDecorator('place', {
                  initialValue: etpInfo && etpInfo.place
                }, {
                  validateTrigger: 'onBlur'
                })(
                  <Input placeholder="地点" />
                )}
              </FormItem>
              <FormItem label="发展阶段">
                {getFieldDecorator('stage', {
                  initialValue: etpInfo && etpInfo.stage
                }, {
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
            <UploadEtpLicense license={this.props.etpLicense} setLicense={this.props.setEtpLicense} />
          </FormItem>
        </div>
      </div>
    )
  }
}
