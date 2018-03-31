import React from 'react'
import { Modal, Upload, Button, Icon, Avatar, Input, Form, message } from 'antd'
import './sendDialog.css'
import { withRouter } from 'react-router-dom'
import { IpApi } from 'src/ajax'

const FormItem = Form.Item

@withRouter
@Form.create()
export default class SendDialog extends React.Component {
  constructor(props) {
    super(props)
    if (this.props.ip && this.props.ip.appraisalDocument) {
      this.state = {
        fileList: [{
          uid: -1,
          name: 'xxx.png',
          status: 'done',
          url: this.props.ip.appraisalDocument
        }]
      }
    } else {
      this.state = {
        fileList: []
      }
    }
  }

  handleFileChange = (info) => {
    let fileList = info.fileList

    // 1. Limit the number of uploaded files
    //    Only to  the lastest uploaded files, and old ones will be replaced by the new
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

    this.setState({ fileList })
  }

  handleOk = () => {
    this.props.form.validateFields(async (err, values) => {
      if (err) {
        message.error('请填写或上传')
      } else {
        try {
          await IpApi.sendEvaluateDoc(values.docUrl, values.money, this.props.person.partyId, this.props.ip.id)
          message.success('发送评估文件成功')
          this.props.dispatch()
          this.props.changeSendDialogStatus(false)
        } catch (error) {
          console.log(error)
        }
      }
    })
  }

  handleCancel = () => {
    this.props.changeSendDialogStatus(false)
  }

  normFile = (e) => {
    if (e.file.status === 'uploading') {
      return null
    } else if (e.file.status === 'done') {
      let files = e.file.response
      let result = JSON.parse(files[0].result)
      return result.data.access_url
    } else {
      return null
    }
  }

  render() {
    const props = {
      onChange: this.handleFileChange,
      multiple: false,
      name: 'files',
      action: `${window.config.API_ORIGIN}/upload/patent?fileType=patentEvalute`,
      fileList: this.state.fileList
    }
    const { getFieldDecorator } = this.props.form
    const formItemLayout = {
      labelCol: { span: 8 },
      wrapperCol: { span: 14 }
    }
    const avatarUrl = this.props.person ? this.props.person.partyPhoto : ''
    return (
      <Modal
        title="发送评估文件"
        width={400}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
        destroyOnClose="true"
      >
        <div styleName="content">
          <Avatar size="large" style={{ marginBottom: '1em' }} src={avatarUrl} />
          <Form layout="horizontal">
            <FormItem label="预定出售金额" {...formItemLayout}>
              {getFieldDecorator('money', {
                validateTrigger: 'onBlur',
                rules: [
                  { required: true, message: '请填写' }
                ]
              })(
                <Input size="small" />
              )}
            </FormItem>
            <FormItem label="评估文件" {...formItemLayout}>
              {getFieldDecorator('docUrl', {
                // valuePropName: 'fileList',
                getValueFromEvent: this.normFile,
                rules: [{ required: true, message: '请上传' }],
                initialValue: this.state.fileList[0] ? this.state.fileList[0].url : null
              })(
                <Upload {...props} >
                  {this.state.fileList.length < 1 && <Button><Icon type="upload" /> upload</Button>}
                </Upload>
              )}
            </FormItem>
          </Form>
        </div>
      </Modal>
    )
  }
}
