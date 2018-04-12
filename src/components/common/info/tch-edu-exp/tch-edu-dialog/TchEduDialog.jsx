import React from 'react'
import './tchEduDialog.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, Cascader } from 'antd'
import { province, school, subject } from 'src/common/dataset'
import moment from 'moment'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker

const [...schoolOptions] = province.map(item => ({
  value: item,
  label: item,
  children: [...school[item].map(university => ({
    value: university,
    label: university
  }))]
}))
const [...subjectsOptions] = Object.keys(subject).map(item => ({
  value: item,
  label: item,
  children: [...subject[item].map(majors => ({
    value: majors,
    label: majors
  }))]
}))

@Form.create()
export default class TchEduDialog extends React.Component {
  state = {
    loading: false
  }

  handleConfirm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const expItem = {
          userId: '',
          school: values.school ? values.school[1] : null,
          college: values.college,
          major: values.major ? values.major[1] : null,
          level: values.level,
          startTime: values.startTime ? values.startTime.valueOf() : null, // get timestamp
          endTime: values.endTime ? values.endTime.valueOf() : null
        }
        this.props.dispatchOperate(expItem)
      }
    })
  }

  handleCancel = () => {
    this.props.closeModel()
  }

  displayRender(label) {
    return label[label.length - 1]
  }

  render() {
    const { getFieldDecorator } = this.props.form
    const { exp } = this.props
    let provinceOfSchool, categoryOfMajor
    if (exp) {
      for (let len = schoolOptions.length, i = 0; i < len; i++) {
        if (schoolOptions[i].children.some(({ value }) => value === exp.school)) {
          provinceOfSchool = schoolOptions[i].value
          break
        }
      }
      for (let len = subjectsOptions.length, i = 0; i < len; i++) {
        if (subjectsOptions[i].children.some(({ value }) => value === exp.major)) {
          categoryOfMajor = subjectsOptions[i].value
          break
        }
      }
    }
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="教育经历"
          maskClosable={false}
          destroyOnClose
          onOk={this.handleConfirm}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel}>返回</Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleConfirm}>
              确认
            </Button>
          ]}
        >
          <Form layout="vertical" styleName="baseInfo-form">
            <div styleName="personal-experience-item" layout="vertical" >
              <Row gutter={20}>
                <Col span={12} >
                  <FormItem label="就职学校" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('school', {
                      validateTrigger: 'onChange',
                      initialValue: exp && [provinceOfSchool, exp.school],
                      rules: [{ required: true, message: '请输入就读学校' }]
                    })(
                      <Cascader placeholder="就读学校" options={schoolOptions}
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
                      <Cascader placeholder="就读专业" options={subjectsOptions}
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
                      <MonthPicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
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
                      <MonthPicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
          </Form>
        </Modal>
      </div>
    )
  }
}
