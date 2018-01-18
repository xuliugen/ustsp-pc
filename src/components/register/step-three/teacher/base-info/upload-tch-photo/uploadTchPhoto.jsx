import React from 'react'
import './uploadTchPhoto.css'
import { Upload, Icon, message } from 'antd'

export default class uploadTchPhoto extends React.Component {
  state = {
    loading: false
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      message.success('上传照片成功')

      // let pics = JSON.parse(info.file.response))

      let avatars = JSON.parse(JSON.stringify(info.file.response))
      this.props.setAvatar(avatars[0].file_url)
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
        <div styleName="upload-text">上传教师证照片</div>
      </div>
    )

    return (
      <Upload
        name="files"
        listType="picture"
        styleName="license-uploader"
        showUploadList={false}
        data={{ id: '5dc98a9959b84811bfbdfa12b3cde49e' }}
        action="http://192.168.1.213:8080/upload/avatar"
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="教师证照片" height="85" /> : uploadButton}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
