import React from 'react'
import './newResearchItem.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { TchInfoApi } from 'src/ajax'

const FormItem = Form.Item

@inject('registerStore')
@observer
class NewResearchItem extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  handleConfirm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const rea = {
          userId: this.props.registerStore.initial.uid,
          projectName: values.projectName,
          projectLevel: values.projectLevel,
          funding: values.funding,
          startTime: values.startTime.valueOf(),
          endTime: values.endTime.valueOf() // get timestamp
        }
        this.setState({ loading: true })
        try {
          await TchInfoApi.completeResearch(rea)
          message.success('添加成功')
          this.setState({ loading: false })
          this.props.confirmAdd(false, rea)
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
          title="科研情况"
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
            <div styleName="new-research-item" layout="vertical" >
              <Row gutter={20} >
                <Col span={12} >
                  <FormItem label="科研标题" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('projectName', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入科研标题' }
                      ]
                    })(
                      <Input placeholder="科研标题" />
                    )}
                  </FormItem>
                  <FormItem label="项目级别" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('projectLevel', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="项目级别" />
                    )}
                  </FormItem>
                  <FormItem label="结束时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('endTime', {
                    })(
                      <DatePicker placeholder="请选择" style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="经费">
                    {getFieldDecorator('funding', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="经费" />
                    )}
                  </FormItem>
                  <FormItem label="开始时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('startTime', {
                    })(
                      <DatePicker placeholder="请选择" style={{ width: '100%' }} />
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

export default Form.create()(NewResearchItem)
