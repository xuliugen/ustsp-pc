import React from 'react'
import './newIP.css'
import { Form, Row, Col, Input, Select, DatePicker, Upload, Icon, message, Button } from 'antd'

const FormItem = Form.Item
const Option = Select.Option
const { TextArea } = Input
const Dragger = Upload.Dragger

export default class NewIP extends React.Component {
  render() {
    const uploadProps = {
      name: 'file',
      multiple: true,
      action: '//jsonplaceholder.typicode.com/posts/',
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
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利申请号">
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="申请日">
                  <DatePicker style={{ width: '100%' }} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利类型">
                  <Select style={{ width: '100%' }}>
                    <Option value="发明">发明</Option>
                    <Option value="实用新型">实用新型</Option>
                    <Option value="外观设计">外观设计</Option>
                    <Option value="其他">其他</Option>
                  </Select>
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="行业分类">
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
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="法律状态">
                  <Select style={{ width: '100%' }}>
                    <Option value="等年登印费">等年登印费</Option>
                    <Option value="等待恢复">等待恢复</Option>
                    <Option value="专利权维持">专利权维持</Option>
                    <Option value="等年费滞纳金">等年费滞纳金</Option>
                    <Option value="权利终止，等恢复">权利终止，等恢复</Option>
                    <Option value="权利失效">权利失效</Option>
                  </Select>
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="公开号">
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="公开日">
                  <DatePicker style={{ width: '100%' }} />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="专利权人">
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="发明人">
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="主分类号">
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="分类号">
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row gutter={20}>
              <Col span={12}>
                <FormItem label="地址">
                  <Input />
                </FormItem>
              </Col>
              <Col span={12}>
                <FormItem label="国省代码">
                  <Input />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="摘要">
                  <TextArea rows={8} />
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="PDF全文">
                  <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                  </Dragger>
                </FormItem>
              </Col>
            </Row>
            <Row>
              <Col span={24}>
                <FormItem label="评估文件">
                  <Dragger {...uploadProps}>
                    <p className="ant-upload-drag-icon">
                      <Icon type="inbox" />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">Support for a single or bulk upload. Strictly prohibit from uploading company data or other band files</p>
                  </Dragger>
                </FormItem>
              </Col>
            </Row>
            <div styleName="pubBtn-wrapper">
              <Button type="primary" size="large">发布</Button>
            </div>
          </Form>
        </div>
      </div>
    )
  }
}
