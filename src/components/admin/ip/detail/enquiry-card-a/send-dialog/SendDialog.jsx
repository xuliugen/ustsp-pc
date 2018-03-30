import React from 'react'
import { Modal, Upload, Button, Icon, Avatar, Input } from 'antd'
import './sendDialog.css'

export default class SendDialog extends React.Component {
  state = {
    fileList: [{
      uid: -1,
      name: 'xxx.png',
      status: 'done',
      url: 'http://www.baidu.com/xxx.png'
    }]
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
        file.url = file.response.url
      }
      return file
    })

    // 3. filter successfully uploaded files according to response from server
    fileList = fileList.filter((file) => {
      if (file.response) {
        return file.response.status === 'success'
      }
      return true
    })

    this.setState({ fileList })
  }

  handleOk = () => {
    this.props.changeSendDialogStatus(false)
  }

  handleCancel = () => {
    this.props.changeSendDialogStatus(false)
  }

  render() {
    const props = {
      action: '//jsonplaceholder.typicode.com/posts/',
      onChange: this.handleFileChange,
      multiple: true
    }
    return (
      <Modal
        title="发送评估问价"
        width={400}
        visible={this.props.visible}
        onOk={this.handleOk}
        onCancel={this.handleCancel}
      >
        <div styleName="content">
          <Avatar size="large" style={{ marginBottom: '1em' }} />
          <label styleName="money">预定出售金额: <Input size="small" style={{ width: '100px' }} /></label>
          <div styleName="confirm-text">确认对此人发送评估文件？</div>
          <div styleName="upload-wrapper">
            <Upload {...props} fileList={this.state.fileList}>
              {this.state.fileList.length === 0 && <Button>
                <Icon type="upload" /> upload
              </Button>}
            </Upload>
          </div>
        </div>
      </Modal>
    )
  }
}
