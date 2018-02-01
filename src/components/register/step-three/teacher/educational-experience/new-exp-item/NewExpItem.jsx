import React from 'react'
import './newExpItem.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { TchInfoApi } from 'src/ajax'

const FormItem = Form.Item

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
          school: values.school,
          college: values.college,
          major: values.major,
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
        }
      }
    })
  }

  handleCancel = () => {
    this.props.closeModal(false)
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
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入学校' }
                      ]
                    })(
                      <Input placeholder="就职学校" />
                    )}
                  </FormItem>
                  <FormItem label="专业" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('major', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入专业' }
                      ]
                    })(
                      <Input placeholder="专业" />
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
