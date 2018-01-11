import React from 'react'
import { Upload, Icon } from 'antd'

import './uploadAvatar.css'
import imgDefaultAvatar from './defaultAvatar.svg'

export default class UploadAvatar extends React.Component {
  state = {
    loading: false
  }

  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true })
    //   return
    // }
    // if (info.file.status === 'done') {
    // Get this url from response in real world.
    getBase64(info.file.originFileObj, imageUrl => this.setState({
      imageUrl,
      loading: false
    }))
    // }
  }

  render() {
    const imageUrl = this.state.imageUrl
    const uploadButton = (
      <div styleName="upload-avatar-container">
        <img styleName="upload-avatar" src={imgDefaultAvatar} />
        <div styleName="hoverLayer">
          <Icon styleName="upload-icon" type={this.state.loading ? 'loading' : 'plus'} />
          <div styleName="upload-hoverText">点击上传</div>
        </div>
      </div>
    )
    return (
      <Upload
        name="avatar"
        listType="picture"
        styleName="upload-wrapper"
        // className="avatar-uploader"
        showUploadList={false}
        action="//jsonplaceholder.typicode.com/posts/"
        // beforeUpload={beforeUpload}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="头像" width="120" /> : uploadButton}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
