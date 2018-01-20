import React from 'react'
import './newExpItem.css'
import { Form, Input, Row, Col, DatePicker, Modal, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker

@inject('registerStore')
@observer
class NewExpItem extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  handleOk = (e) => {
    e.preventDefault()
    this.props.form.validateFields((err, values) => {
      if (!err) {
        console.log(values)
        const expItem = {
          userId: this.props.registerStore.initial.uid,
          school: values.school,
          college: values.college,
          major: values.major,
          level: values.level,
          startTime: values.date.valueOf(),
          endTime: values.finishTime.valueOf()
        }
        this.props.confirmAdd(expItem)
        this.props.closeModel()
      } else {
        message.error('请先完善必填信息')
      }
    })
    // this.setState({
    //   loading: true
    // })
  }

  handleCancel = () => {
    this.props.closeModel()
  }

  render() {
    const { getFieldDecorator } = this.props.form
    return (
      <div>
        <Modal
          visible={this.props.visible}
          title="教育经历"
          destroyOnClose="true"
          onOK={this.handleOK}
          onCancel={this.handleCancel}
          footer={[
            <Button key="back" onClick={this.handleCancel} >取消</Button>,
            <Button key="submit" type="primary" loading={this.state.loading} onClick={this.handleOk} >保存</Button>
          ]}
        >
          <Form layout="vertical" styleName="newEdu-form">
            <FormItem label="学历级别">
              {getFieldDecorator('level', {
                validateTrigger: 'onBlur',
                rules: [{ required: true, message: '请输入学历级别' }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="学校">
              {getFieldDecorator('school', {
                validateTrigger: 'onBlur',
                rules: [{ required: true, message: '请输入就职学校' }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="学院">
              {getFieldDecorator('college', {
                validateTrigger: 'onBlur',
                rules: [{ required: true, message: '请输入学院' }]
              })(
                <Input />
              )}
            </FormItem>
            <FormItem label="专业">
              {getFieldDecorator('major', {
                validateTrigger: 'onBlur',
                rules: [{ required: true, message: '请输入就读专业' }]
              })(
                <Input />
              )}
            </FormItem>
            <Row gutter={20}>
              <Col span={12} >
                <FormItem label="入学时间">
                  {getFieldDecorator('date', {
                    rules: [{ required: true, message: '请选择入学时间' }]
                  })(
                    <MonthPicker />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="毕业时间">
                  {getFieldDecorator('finishTime', {
                    rules: [{ required: true, message: '请选择毕业时间' }]
                  })(
                    <MonthPicker />
                  )}
                </FormItem>
              </Col>
            </Row>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(NewExpItem)
