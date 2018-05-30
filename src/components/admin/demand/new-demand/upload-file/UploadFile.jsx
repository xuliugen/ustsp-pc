import React from 'react'
import './uploadFile.css'
import { Upload, Icon, message } from 'antd'
import { observer, inject } from 'mobx-react'

@inject('registerStore')
@observer
export default class uploadLicensePic extends React.Component {
  state = {
    loading: false
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      message.success('上传文件成功')
      let files = info.file.response
      let result = JSON.parse(files[0].result)
      let file = {
        fileUrl: result.data.access_url,
        fileName: files[0].original_name
      }
      this.props.setUploadFile(file)
      // Get this url from response in real world.
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false
      }))
    }
  }

  render() {
    const imageUrl = this.state.imageUrl
    const uploadButton = (
      <div styleName="upload-content">
        <Icon type={this.state.loading ? 'loading' : 'plus'} />
        <div styleName="upload-text">上传文件</div>
      </div>
    )

    return (
      <Upload
        name="files"
        listType="picture"
        styleName="file-uploader"
        showUploadList={false}
        data={{ id: this.props.registerStore.initial.uid }}
        action={`${window.config.API_ORIGIN}/upload/project/file`}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="文件" height="85" /> : uploadButton}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
