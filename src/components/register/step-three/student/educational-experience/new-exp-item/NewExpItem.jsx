import React from 'react'
import './newExpItem.css'
import { Form, Input, Row, Col, DatePicker, Modal, Button, message, Select, Cascader } from 'antd'
import { observer, inject } from 'mobx-react'
import { StuInfoApi } from 'src/ajax'
import { province, school, subject } from 'src/common/dataset'

const FormItem = Form.Item
const MonthPicker = DatePicker.MonthPicker
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
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const expItem = {
          userId: this.props.registerStore.initial.uid,
          school: values.school[values.school.length - 1],
          college: values.college,
          major: values.major[values.major.length - 1],
          level: values.level,
          startTime: values.date ? values.date.valueOf() : null,
          endTime: values.finishTime ? values.finishTime.valueOf() : null
        }
        this.setState({ loading: true })
        try {
          await StuInfoApi.completeStuEducation(expItem)
          message.success('教育经历添加成功')
          this.setState({ loading: false })
          this.props.confirmAdd(expItem)
        } catch (e) {
          this.setState({ loading: false })
          console.log(e)
        }
      } else {
        message.error('请先完善必填信息')
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
            <Row gutter={20}>
              <Col span={12} >
                <FormItem label="学历级别">
                  {getFieldDecorator('level', {
                    validateTrigger: 'onChange',
                    rules: [{ required: true, message: '请输入学历级别' }]
                  })(
                    <Select>
                      <Option value="专科">专科</Option>
                      <Option value="本科">本科</Option>
                      <Option value="硕士研究生">硕士研究生</Option>
                      <Option value="博士研究生">博士研究生</Option>
                    </Select>
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
                <FormItem label="入学时间">
                  {getFieldDecorator('date', {
                    rules: [{ required: true, message: '请选择入学时间' }]
                  })(
                    <MonthPicker style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="学校">
                  {getFieldDecorator('school', {
                    validateTrigger: 'onChange',
                    rules: [{ required: true, message: '请输入就读学校' }]
                  })(
                    <Cascader placeholder="就读学校" options={options}
                      expandTrigger="hover"
                      displayRender={this.displayRender}
                    />
                  )}
                </FormItem>
                <FormItem label="专业">
                  {getFieldDecorator('major', {
                    validateTrigger: 'onChange',
                    rules: [{ required: true, message: '请输入就读专业' }]
                  })(
                    <Cascader placeholder="就读专业" options={subjects}
                      expandTrigger="hover"
                      displayRender={this.displayRender}
                    />
                  )}
                </FormItem>
                <FormItem label="毕业时间">
                  {getFieldDecorator('finishTime', {
                    rules: [{ required: true, message: '请选择毕业时间' }]
                  })(
                    <MonthPicker style={{ width: '100%' }} />
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
