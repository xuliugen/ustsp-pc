import React from 'react'
import './uploadFile.css'
import { Upload, Icon } from 'antd'

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
        name="license-picture"
        listType="picture"
        styleName="license-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
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
