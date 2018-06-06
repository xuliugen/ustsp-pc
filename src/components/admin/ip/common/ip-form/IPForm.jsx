import React from 'react'
import './ipForm.css'
import { Form, Row, Col, Input, Select, DatePicker, Upload, Icon } from 'antd'
import moment from 'moment'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input
const Dragger = Upload.Dragger

export default class IPForm extends React.Component {
  state = {
    document: [],
    appraisalDocument: [],
    propsChangeCount: 0
  }

  componentWillReceiveProps(nextProps) {
    this.setState(pre => ({
      propsChangeCount: pre.propsChangeCount + 1
    }))
    if (this.state.propsChangeCount < 1) {
      const { ip } = nextProps
      if (ip) {
        if (ip.document) {
          this.setState({
            document: [{
              uid: -1,
              name: 'pdf全文',
              status: 'done',
              url: ip.document
            }]
          })
        }
        if (ip.appraisalDocument) {
          this.setState({
            appraisalDocument: [{
              uid: -2,
              name: '评估文件',
              status: 'done',
              url: ip.appraisalDocument
            }]
          })
        }
      }
    }
  }

  normFile = (e) => {
    if (e.file.status === 'uploading') {
      return null
    } else if (e.file.status === 'done') {
      let files = e.file.response
      // let result = JSON.parse(files[0].result)
      return files[0].file_url
    }
  }

  handleFileChange(fileType, info) {
    let fileList = info.fileList

    // 1. Limit the number of uploaded files
    //    Only to show one recent uploaded files, and old ones will be replaced by the new
    fileList = fileList.slice(-1)

    // 2. read from response and show file link
    fileList = fileList.map((file) => {
      if (file.response) {
        // Component will show file.url as link
        file.response = file.response[0]
        const fromTecent = JSON.parse(file.response.result)
        file.url = fromTecent.data.access_url
        file.name = file.response.original_name
      }
      return file
    })

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.status === 'done'
      }
      return true
    })

    if (fileType === 'document') {
      this.setState({
        document: fileList
      })
    } else {
      this.setState({
        appraisalDocument: fileList
      })
    }
  }

  render() {
    const uploadProps = {
      name: 'files',
      multiple: false
    }
    const { getFieldDecorator } = this.props.form
    const { ip } = this.props
    return (
      <div styleName="root">
        <Form>
          <Row gutter={20}>
            <Col span={12}>
              <FormItem label="专利名称">
                {getFieldDecorator('patentName', {
                  initialValue: ip && ip.patentName,
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
                  initialValue: ip && ip.applicationNumber,
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
                  initialValue: ip && moment(ip.applicationDate),
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
                  initialValue: ip && ip.patentType,
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
                  initialValue: ip && ip.industryCategory,
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
                  initialValue: ip && ip.legalStatus,
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
                    <Option value="权利终止，等恢复">权利终止等恢复</Option>
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
                  initialValue: ip && ip.publicationNumber,
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
                  initialValue: ip && moment(ip.publicationDate),
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
                  initialValue: ip && ip.applicant,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请填写' },
                    { max: 30, message: '字数不能超过30' }
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
                  initialValue: ip && ip.inventor,
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
                  initialValue: ip && ip.classificationNumber,
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
                  initialValue: ip && ip.classNumber,
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
                  initialValue: ip && ip.address,
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
                  initialValue: ip && ip.provinceCode,
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
                  initialValue: ip && ip.abstracts,
                  validateTrigger: 'onBlur',
                  rules: [
                    { required: true, message: '请填写' },
                    { max: 500, message: '字数不能超过500' }
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
                  initialValue: ip && ip.document,
                  getValueFromEvent: this.normFile,
                  rules: [
                    { required: true, message: '请上传' }
                  ]
                })(
                  <Dragger
                    {...uploadProps}
                    onChange={this.handleFileChange.bind(this, 'document')}
                    fileList={this.state.document}
                    action={`${window.config.API_ORIGIN}/upload/patent?fileType=patentOriginal`}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">点击或拖拽到此上传文件</p>
                    <p className="ant-upload-hint">支持上传一个文件，格式为.pdf,.doc,.ppt,.rar,.zip，大小不超过20M</p>
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
                  initialValue: ip && ip.appraisalDocument,
                  getValueFromEvent: this.normFile
                })(
                  <Dragger
                    {...uploadProps}
                    onChange={this.handleFileChange.bind(this, 'appraisalDocument')}
                    fileList={this.state.appraisalDocument}
                    action={`${window.config.API_ORIGIN}/upload/patent?fileType=patentEvalute`}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">点击或拖拽到此上传文件</p>
                    <p className="ant-upload-hint">支持上传一个文件，格式为.pdf,.doc,.ppt,.rar,.zip，大小不超过20M</p>
                  </Dragger>
                )}
              </FormItem>
            </Col>
          </Row>
        </Form>
      </div>
    )
  }
}
