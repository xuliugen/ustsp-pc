import React from 'react'
import { Form, Input, Row, Col, DatePicker, Cascader } from 'antd'
import { province, school, subject } from 'src/common/dataset'
import moment from 'moment'
import { disabledStartDate, disabledEndDate } from 'src/common/dateRange.js'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker

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

export default class TchEduForm extends React.Component {
  displayRender(label) {
    return label[label.length - 1]
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { exp } = this.props
    let provinceOfSchool, categoryOfMajor
    if (exp) {
      for (let len = options.length, i = 0; i < len; i++) {
        if (options[i].children.some(({ value }) => value === exp.school)) {
          provinceOfSchool = options[i].value
          break
        }
      }
      for (let len = subjects.length, i = 0; i < len; i++) {
        if (subjects[i].children.some(({ value }) => value === exp.major)) {
          categoryOfMajor = subjects[i].value
          break
        }
      }
    }

    return (
      <Form layout="vertical">
        <Row gutter={20}>
          <Col span={12} >
            <FormItem label="就职学校" style={{ flexFlow: '1' }}>
              {getFieldDecorator('school', {
                validateTrigger: 'onChange',
                initialValue: exp && [provinceOfSchool, exp.school],
                rules: [{ required: true, message: '请输入就读学校' }]
              })(
                <Cascader placeholder="就读学校" options={options}
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                />
              )}
            </FormItem>
            <FormItem label="专业" style={{ flexFlow: '1' }}>
              {getFieldDecorator('major', {
                validateTrigger: 'onChange',
                initialValue: exp && [categoryOfMajor, exp.major],
                rules: [{ required: true, message: '请输入专业' }]
              })(
                <Cascader placeholder="就读专业" options={subjects}
                  expandTrigger="hover"
                  displayRender={this.displayRender}
                />
              )}
            </FormItem>
            <FormItem label="开始时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('startTime', {
                initialValue: exp && moment(exp.date),
                rules: [{ required: true, message: '请选择开始时间' }]
              })(
                <MonthPicker
                  disabledDate={disabledStartDate.bind(this, 'endTime')}
                  placeholder="请选择"
                  style={{ width: '100%', marginTop: '10px' }} />
              )}
            </FormItem>
          </Col>
          <Col span={12}>
            <FormItem label="学院">
              {getFieldDecorator('college', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.college,
                rules: [
                  { required: true, message: '请输入学院' }
                ]
              })(
                <Input placeholder="学院" />
              )}
            </FormItem>
            <FormItem label="学位">
              {getFieldDecorator('level', {
                validateTrigger: 'onBlur',
                initialValue: exp && exp.level,
                rules: [
                  { required: true, message: '请输入学位' }
                ]
              })(
                <Input placeholder="学位" />
              )}
            </FormItem>
            <FormItem label="结束时间" style={{ flexFlow: '1' }}>
              {getFieldDecorator('endTime', {
                initialValue: exp && moment(exp.endTime),
                rules: [{ required: true, message: '请选择结束时间' }]
              })(
                <MonthPicker
                  disabledDate={disabledEndDate.bind(this, 'startTime')}
                  placeholder="请选择"
                  style={{ width: '100%', marginTop: '10px' }} />
              )}
            </FormItem>
          </Col>
        </Row>
      </Form>
    )
  }
}
