import React from 'react'
import { Form, Input, Select, Row, Col, Cascader } from 'antd'
import { FormTitle } from '../../common'
import './stuPersonalExperience.css'
import { province, school, major } from 'src/common/dataset'
const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input

const [...options] = province.map(item => ({
  value: item,
  label: item,
  children: [...school[item].map(university => ({
    value: university,
    label: university
  }))]
}))

export default class PersonalExperience extends React.Component {
  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="personal-experience" ref={this.props.containerRef}>
        <FormTitle title={'个人履历'} />
        <div styleName="content">
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="现读学校" style={{ flexFlow: '1' }}>
                {getFieldDecorator('school', {
                  validateTrigger: 'onChange',
                  rules: [
                    { required: true, message: '请输入学校' }
                  ]
                })(
                  <Cascader placeholder="就职学校" options={options}
                    expandTrigger="hover"
                    displayRender={this.displayRender}
                  />
                )}
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                {getFieldDecorator('major', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请选择专业' }
                  ]
                })(
                  <Select placeholder="专业" >
                    {major.map(name => <Option key={name}>{name}</Option>)}
                  </Select>
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                {getFieldDecorator('college', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入学院' }
                  ]
                })(
                  <Input placeholder="学院" />
                )}
              </FormItem>
              <FormItem label="年级">
                {getFieldDecorator('stuLevel', {
                  initialValue: '大一'
                })(
                  <Select style={{ width: '100%' }} >
                    <Option value="大一">大一</Option>
                    <Option value="大二">大二</Option>
                    <Option value="大三">大三</Option>
                    <Option value="大四">大四</Option>
                    <Option value="研一">研一</Option>
                    <Option value="研二">研二</Option>
                    <Option value="研三">研三</Option>
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem label="擅长技能">
            {getFieldDecorator('skill', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              validateTrigger: 'onBlur'
            })(
              <div styleName="intro-container">
                <TextArea rows={8} />
                <span styleName="word-limit">字数限制: 0/400</span>
              </div>
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
