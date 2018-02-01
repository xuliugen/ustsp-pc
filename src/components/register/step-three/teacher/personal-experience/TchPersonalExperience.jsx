import React from 'react'
import { Form, Input, Row, Col, Cascader, Select } from 'antd'
import { FormTitle } from '../../common'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'
import './tchPersonalExperience.css'
import { province, school, major, title } from 'src/common/dataset'

const FormItem = Form.Item
const { TextArea } = Input
const Option = Select.Option
const [...options] = province.map(item => ({
  value: item,
  label: item,
  children: [...school[item].map(university => ({
    value: university,
    label: university
  }))]
}))

@withRouter
@inject('registerStore')
@observer
export default class PersonalExperience extends React.Component {
  displayRender(label) {
    return label[label.length - 1]
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="personal-experience">
        <FormTitle title={'个人履历'} />
        <div styleName="personal-experience-item" layout="vertical" >
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="就职学校" style={{ flexFlow: '1' }}>
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
                    { required: true, message: '请输入专业' }
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
              <FormItem label="职称">
                {getFieldDecorator('title', {
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入职称' }
                  ]
                })(
                  <Select placeholder="职称" >
                    {title.map(name => <Option key={name}>{name}</Option>)}
                  </Select>
                )}
              </FormItem>
            </Col>
          </Row>
          <FormItem label="研究方向">
            {getFieldDecorator('researchArea', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="教学情况">
            {getFieldDecorator('teachInfo', {
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 2000, message: '字数不能超过2000' }
              ]
            })(
              <TextArea rows={8} maxLength={2000} />
            )}
          </FormItem>
          <FormItem label="学术经历">
            {getFieldDecorator('academicExperience', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 2000, message: '字数不能超过2000' }
              ]
            })(
              <TextArea rows={8} maxLength={2000} />
            )}
          </FormItem>
          <FormItem label="科研简介">
            {getFieldDecorator('scienceIntroduction', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 2000, message: '字数不能超过2000' }
              ]
            })(
              <TextArea rows={8} maxLength={2000} />
            )}
          </FormItem>
          <FormItem label="发表文章">
            {getFieldDecorator('publishPaper', {
              validateTrigger: 'onBlur',
              rules: [
                { max: 2000, message: '字数不能超过2000' }
              ]
            })(
              <TextArea rows={8} maxLength={2000} />
              // <div styleName="intro-container">
              //   <TextArea rows={8} />
              //   <span styleName="word-limit">字数限制: 0/2000</span>
              // </div>
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
