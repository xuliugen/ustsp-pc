import React from 'react'
import './tchResumeForm.css'
import { Form, Input, Row, Col, Cascader, Select } from 'antd'
import { province, school, subject, title, college } from 'src/common/dataset'

import FormTitle from '../../form-title/FormTitle'

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
const [...subjects] = Object.keys(subject).map(item => ({
  value: item,
  label: item,
  children: [...subject[item].map(majors => ({
    value: majors,
    label: majors
  }))]
}))

export default class TchResumeForm extends React.Component {
  displayRender(label) {
    return label[label.length - 1]
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { tchInfo } = this.props
    let provinceOfSchool, categoryOfMajor
    if (tchInfo) {
      for (let len = options.length, i = 0; i < len; i++) {
        if (options[i].children.some(({ value }) => value === tchInfo.school)) {
          provinceOfSchool = options[i].value
          break
        }
      }
      for (let len = subjects.length, i = 0; i < len; i++) {
        if (subjects[i].children.some(({ value }) => value === tchInfo.major)) {
          categoryOfMajor = subjects[i].value
          break
        }
      }
    }
    return (
      <div styleName="root">
        <FormTitle title={'个人履历'} />
        <div styleName="personal-experience-item" layout="vertical" >
          <Row gutter={20}>
            <Col span={12} >
              <FormItem label="学校" style={{ flexFlow: '1' }}>
                {getFieldDecorator('school', {
                  initialValue: tchInfo && [provinceOfSchool, tchInfo.school],
                  validateTrigger: 'onChange',
                  rules: [
                    { required: true, message: '请输入学校' }
                  ]
                })(
                  <Cascader placeholder="学校" options={options}
                    expandTrigger="hover"
                    displayRender={this.displayRender}
                  />
                )}
              </FormItem>
              <FormItem label="专业" style={{ flexFlow: '1' }}>
                {getFieldDecorator('major', {
                  initialValue: tchInfo && [categoryOfMajor, tchInfo.major],
                  validateTrigger: 'onChange',
                  rules: [
                    { required: true, message: '请输入专业' }
                  ]
                })(
                  <Cascader placeholder="专业" options={subjects}
                    expandTrigger="hover"
                    displayRender={this.displayRender}
                  />
                )}
              </FormItem>
            </Col>
            <Col span={12}>
              <FormItem label="学院">
                {getFieldDecorator('college', {
                  initialValue: tchInfo && tchInfo.college,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请输入学院' }
                  ]
                })(
                  <Select showSearch allowClear style={{ width: '100%' }}>
                    {college.map(item => <Option key={item}>{item}</Option>)}
                  </Select>
                )}
              </FormItem>
              <FormItem label="职称">
                {getFieldDecorator('title', {
                  initialValue: tchInfo && tchInfo.title,
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
              initialValue: tchInfo && tchInfo.researchArea,
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="教学情况">
            {getFieldDecorator('teachInfo', {
              initialValue: tchInfo && tchInfo.teachInfo,
              validateTrigger: 'onBlur'
            })(
              <Input size="large" />
            )}
          </FormItem>
          <FormItem label="个人简介">
            {getFieldDecorator('introduction', {
              initialValue: tchInfo && tchInfo.introduction,
              validateTrigger: 'onBlur',
              rules: [
                { max: 3000, message: '字数不能超过3000' }
              ]
            })(
              <TextArea rows={8} maxLength={3000} />
            )}
          </FormItem>
          <FormItem label="学术经历">
            {getFieldDecorator('academicExperience', {
              initialValue: tchInfo && tchInfo.academicExperience,
              validateTrigger: 'onBlur',
              rules: [
                { max: 3000, message: '字数不能超过3000' }
              ]
            })(
              <TextArea rows={8} maxLength={3000} />
            )}
          </FormItem>
          <FormItem label="科研简介">
            {getFieldDecorator('scienceIntroduction', {
              initialValue: tchInfo && tchInfo.scienceIntroduction,
              validateTrigger: 'onBlur',
              rules: [
                { max: 3000, message: '字数不能超过3000' }
              ]
            })(
              <TextArea rows={8} maxLength={3000} />
            )}
          </FormItem>
          <FormItem label="发表文章">
            {getFieldDecorator('publishPaper', {
              initialValue: tchInfo && tchInfo.publishPaper,
              validateTrigger: 'onBlur',
              rules: [
                { max: 3000, message: '字数不能超过3000' }
              ]
            })(
              <TextArea rows={8} maxLength={3000} />
            )}
          </FormItem>
        </div>
      </div>
    )
  }
}
