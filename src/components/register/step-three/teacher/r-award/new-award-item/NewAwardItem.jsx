import React from 'react'
import './newAwardItem.css'
import { Form, Row, Col, Input, DatePicker, Modal, Button, message } from 'antd'
import { observer, inject } from 'mobx-react'
import { TchInfoApi } from 'src/ajax'

const FormItem = Form.Item
const { TextArea } = Input

@inject('registerStore')
@observer
class NewAwardItem extends React.Component<{}> {
  constructor() {
    super()
    this.state = {
      loading: false
    }
  }

  handleConfirm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (!err) {
        const newRAwrad = {
          userId: this.props.registerStore.initial.uid,
          name: values.name,
          introduction: values.introduction,
          time: values.time.valueOf(),
          level: values.level,
          rank: values.rank,
          isResearch: this.props.isResearch
        }
        this.setState({ loading: true })
        try {
          await TchInfoApi.completeAward(newRAwrad)
          message.success('添加成功')
          this.setState({ loading: false })
          this.props.confirmAdd(false, newRAwrad)
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
          title={this.props.title}
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
            <div styleName="new-RA-ward-item" layout="vertical" >
              <Row gutter={20} >
                <Col span={12} >
                  <FormItem label="获奖名称" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('name', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入获奖名称' }
                      ]
                    })(
                      <Input placeholder="产权名称" />
                    )}
                  </FormItem>
                  <FormItem label="级别" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('level', {
                      validateTrigger: 'onBlur',
                      rules: [
                        { required: true, message: '请输入类别' }
                      ]
                    })(
                      <Input placeholder="级别" />
                    )}
                  </FormItem>
                </Col>
                <Col span={12}>
                  <FormItem label="排名" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('rank', {
                      validateTrigger: 'onBlur'
                    })(
                      <Input placeholder="排名" />
                    )}
                  </FormItem>
                  <FormItem label="获奖时间" style={{ flexFlow: '1' }}>
                    {getFieldDecorator('time', {
                      rules: [{ required: true, message: '请选择获奖时间' }]
                    })(
                      <DatePicker placeholder="请选择" style={{ width: '100%' }} />
                    )}
                  </FormItem>
                </Col>
              </Row>
            </div>
            <FormItem label="获奖描述" style={{ flexFlow: '1' }}>
              {getFieldDecorator('introduction', {
                validateTrigger: 'onBlur'
              })(
                <TextArea rows={4} />
              )}
            </FormItem>
          </Form>
        </Modal>
      </div>
    )
  }
}

export default Form.create()(NewAwardItem)
