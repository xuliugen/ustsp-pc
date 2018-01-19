import React from 'react'
import { Upload, Icon, message } from 'antd'
import { observer, inject } from 'mobx-react'
import './uploadAvatar.css'
import imgDefaultAvatar from './defaultAvatar.svg'

@inject('registerStore')
@observer
export default class UploadAvatar extends React.Component {
  state = {
    loading: false
  }

  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true })
    //   return
    // }
    if (info.file.status === 'done') {
    // Get this url from response in real world.
      message.success('上传照片成功')
      let tchPhotos = JSON.parse(JSON.stringify(info.file.response))
      console.log(tchPhotos[0].file_url)
      this.props.setTchPhoto(tchPhotos[0].file_url)
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false
      }))
    }
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
        name="files"
        listType="picture"
        styleName="upload-wrapper"
        // className="avatar-uploader"
        showUploadList={false}
        data={{ id: this.props.registerStore.initial.uid }}
        action={`${window.config.API_ORIGIN}/upload/avatar`}
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
