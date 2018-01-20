import React from 'react'
import './newIPItem.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { TchInfoApi } from 'src/ajax'

const FormItem = Form.Item

@inject('registerStore')
@observer
class NewIPItem extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }
  handleConfirm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const ip = {
          userId: this.props.registerStore.initial.uid,
          type: values.type,
          country: values.country,
          name: values.name,
          registrationNumber: values.registrationNumber,
          applyDate: values.applyDate.valueOf(),
          applyUnit: values.applyUnit,
          inventor: values.inventor,
          rank: Number(values.rank)
        }
        this.setState({ loading: true })
        try {
          await TchInfoApi.completeIntellectualProperty(ip)
          message.success('添加成功')
          this.setState({ loading: false })
          this.props.confirmAdd(false, ip)
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
          title="知识产权"
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
            <div styleName="new-ip-item" layout="vertical" >
              <Row gutter={20} >
                <Col span={12} >
                  <FormItem label="产权名称" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('name', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入产权名称' }
                      ]
                    })(
                      <Input placeholder="产权名称" />
                    )}
                  </FormItem>
                  <FormItem label="产权类别" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('type', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入产权类别' }
                      ]
                    })(
                      <Input placeholder="产权类别" type="number" />
                    )}
                  </FormItem>
                  <FormItem label="发明人" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('inventor', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请填写发明人' }
                      ]
                    })(
                      <Input placeholder="发明人" />
                    )}
                  </FormItem>
                  <FormItem label="产权排名" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('rank', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="产权排名" type="number" />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="国家" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('country', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="产权归属地" />
                    )}
                  </FormItem>
                  <FormItem label="产权登记编号" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('registrationNumber', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入产权注册号' }
                      ]
                    })(
                      <Input placeholder="产权注册号" type="number" />
                    )}
                  </FormItem>
                  <FormItem label="申请单位" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('applyUnit', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="申请单位" />
                    )}
                  </FormItem>
                  <FormItem label="申请时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('applyDate', {
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

export default Form.create()(NewIPItem)
