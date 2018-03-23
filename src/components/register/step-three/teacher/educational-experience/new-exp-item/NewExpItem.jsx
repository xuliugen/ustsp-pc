import React from 'react'
import './newExpItem.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, message, Cascader } from 'antd'
import { observer, inject } from 'mobx-react'
import { TchInfoApi } from 'src/ajax'
import { province, school, subject } from 'src/common/dataset'

const FormItem = Form.Item

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

@inject('registerStore')
@observer
class NewExpItem extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  handleConfirm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const educationExperience = {
          userId: this.props.registerStore.initial.uid,
          school: values.school ? values.school[1] : null,
          college: values.college,
          major: values.major ? values.major[1] : null,
          level: values.level,
          startTime: values.startTime ? values.startTime.valueOf() : null, // get timestamp
          endTime: values.endTime ? values.endTime.valueOf() : null
        }
        this.setState({ loading: true })
        try {
          await TchInfoApi.completeEducation(educationExperience)
          message.success('添加成功')
          this.setState({ loading: false })
          this.props.confirmAdd(false, educationExperience)
        } catch (e) {
          console.log(e)
          this.setState({ loading: false })
        }
      }
    })
  }

  handleCancel = () => {
    this.props.closeModal(false)
  }

  displayRender(label) {
    return label[label.length - 1]
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="教育经历"
          destroyOnClose="true"
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
                      rules: [ { required: true, message: '请输入专业' } ]
                    })(
                      <Cascader placeholder="就读专业" options={subjectsOptions}
                        expandTrigger="hover"
                        displayRender={this.displayRender}
                      />
                    )}
                  </FormItem>
                  <FormItem label="开始时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('startTime', {
                      rules: [{ required: true, message: '请选择开始时间' }]
                    })(
                      <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
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
                  <FormItem label="学位">
                    {getFieldDecorator('level', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入学位' }
                      ]
                    })(
                      <Input placeholder="学位" />
                    )}
                  </FormItem>
                  <FormItem label="结束时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('endTime', {
                      rules: [{ required: true, message: '请选择结束时间' }]
                    })(
                      <DatePicker placeholder="请选择" style={{ width: '100%', marginTop: '10px' }} />
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

export default Form.create()(NewExpItem)
