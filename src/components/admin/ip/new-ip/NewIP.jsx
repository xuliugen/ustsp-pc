import React from 'react'
import './newIP.css'
import { Form, Row, Col, Input, Select, DatePicker, Upload, Icon, message, Button } from 'antd'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { withRouter } from 'react-router-dom'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input
const Dragger = Upload.Dragger

@withRouter
@inject('userStore')
@observer
@Form.create()
export default class NewIP extends React.Component {
  state = {
    document: null,
    appraisalDocument: null
  }
  submitForm = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('请完善信息')
      } else {
        values.applicationDate = values.applicationDate && values.applicationDate.valueOf()
        values.publicationDate = values.publicationDate && values.publicationDate.valueOf()
        values.ownerId = this.props.userStore.user.id
        try {
          await IpApi.publishPatent(values)
          message.success('发布成功')
          this.props.history.push('/admin/ip/transfer-ip')
        } catch (err) {
          console.log(err)
        }
      }
    })
  }

  normFile = (e) => {
    if (e.file.status === 'uploading') {
      return null
    } else if (e.file.status === 'done') {
      let files = e.file.response
      let result = JSON.parse(files[0].result)
      return result.data.access_url
    }
  }

  render() {
    const uploadProps = {
      name: 'files',
      multiple: false,
      onChange(info) {
        const status = info.file.status
        if (status !== 'uploading') {
          console.log(info.file, info.fileList)
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`)
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`)
        }
      }
    }
    const { getFieldDecorator } = this.props.form
    return (
      <div styleName="root">
        <div styleName="title">
          <span styleName="titleName">发布专利</span>
        </div>
        <div styleName="form-wrapper">
          <Form>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利名称">
                  {getFieldDecorator('patentName', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利申请号">
                  {getFieldDecorator('applicationNumber', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="申请日">
                  {getFieldDecorator('applicationDate', {
                    rules: [
                      { required: true, message: '请选择时间' }
                    ]
                  })(
                    <DatePicker style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利类型">
                  {/* to mod */}
                  {getFieldDecorator('patentType', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请选择' }
                    ]
                  })(
                    <Select style={{ width: '100%' }}>
                      <Option value="发明">发明</Option>
                      <Option value="实用新型">实用新型</Option>
                      <Option value="外观设计">外观设计</Option>
                      <Option value="其他">其他</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="行业分类">
                  {/* to mod */}
                  {getFieldDecorator('industryCategory', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请选择' }
                    ]
                  })(
                    <Select style={{ width: '100%' }}>
                      <Option value="A：人类生活需要">A：人类生活需要</Option>
                      <Option value="B：作业运输">B：作业运输</Option>
                      <Option value="C：化学，冶金">C：化学，冶金</Option>
                      <Option value="D：纺织和造纸">D：纺织和造纸</Option>
                      <Option value="E：固定构造">E：固定构造</Option>
                      <Option value="F：机械工程，照明，加热，武器，爆破">F：机械工程，照明，加热，武器，爆破</Option>
                      <Option value="G：物理">G：物理</Option>
                      <Option value="H：电学">H：电学</Option>
                      <Option value="其他">其他</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="法律状态">
                  {getFieldDecorator('legalStatus', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请选择' }
                    ]
                  })(
                    <Select style={{ width: '100%' }}>
                      <Option value="等年登印费">等年登印费</Option>
                      <Option value="等待恢复">等待恢复</Option>
                      <Option value="专利权维持">专利权维持</Option>
                      <Option value="等年费滞纳金">等年费滞纳金</Option>
                      <Option value="权利终止，等恢复">权利终止，等恢复</Option>
                      <Option value="权利失效">权利失效</Option>
                    </Select>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="公开号">
                  {getFieldDecorator('publicationNumber', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="公开日">
                  {getFieldDecorator('publicationDate', {
                    rules: [
                      { required: true, message: '请选择时间' }
                    ]
                  })(
                    <DatePicker style={{ width: '100%' }} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利权人">
                  {getFieldDecorator('applicant', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="发明人">
                  {getFieldDecorator('inventor', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="主分类号">
                  {getFieldDecorator('classificationNumber', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="分类号">
                  {getFieldDecorator('classNumber', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="地址">
                  {getFieldDecorator('address', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="国省代码">
                  {getFieldDecorator('provinceCode', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <Input />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="摘要">
                  {getFieldDecorator('abstracts', {
                    validateTrigger: 'onBlur',
                    rules: [
                      { required: true, message: '请填写' }
                    ]
                  })(
                    <TextArea rows={8} />
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="PDF全文">
                  {getFieldDecorator('document', {
                    // valuePropName: 'fileList',
                    getValueFromEvent: this.normFile,
                    rules: [
                      { required: true, message: '请上传' }
                    ]
                  })(
                    <Dragger {...uploadProps} action={`${window.config.API_ORIGIN}/upload/patent?fileType=patentOriginal`}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </Dragger>
                  )}
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="评估文件">
                  {getFieldDecorator('appraisalDocument', {
                    // valuePropName: 'fileList',
                    getValueFromEvent: this.normFile
                  })(
                    <Dragger {...uploadProps} action={`${window.config.API_ORIGIN}/upload/patent?fileType=patentEvalute`}>
                      <p className="ant-upload-drag-icon">
                        <Icon type="inbox" />
                      </p>
                      <p className="ant-upload-text">Click or drag file to this area to upload</p>
                      <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                    </Dragger>
                  )}
                </FormItem>
              </Col>
            </Row>
            <div styleName="pubBtn-wrapper">
              <Button type="primary" size="large" onClick={this.submitForm}>发布</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}