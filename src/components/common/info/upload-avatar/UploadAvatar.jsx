// @flow
import React from 'react'
import { Upload, Icon, message } from 'antd'
import { observer, inject } from 'mobx-react'
import './uploadAvatar.css'
import imgDefaultAvatar from 'src/assets/defaultAvatar.svg'

@inject('registerStore')
@observer
export default class UploadAvatar extends React.Component {
  state = {
    loading: false,
    imageUrl: ''
  }

  handleChange = (info) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true })
    //   return
    // }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      message.success('上传照片成功')
      let tchPhotos = info.file.response
      let pics = JSON.parse(tchPhotos[0].result)
      // const avatarUrls = pics.data.resource_path.split('/')
      // this.props.setPhoto(avatarUrls[2])
      // console.log(avatarUrls[2])
      this.props.setPhoto(pics.data.resource_path)
      getBase64(info.file.originFileObj, imageUrl => this.setState({
        imageUrl,
        loading: false
      }))
    } else if (info.file.status === 'error') {
      message.error('上传照片失败')
      this.setState({
        loading: false
      })
    }
  }

  render() {
    const imageUrl = this.state.imageUrl
    const displayAvatar = this.props.photo || imgDefaultAvatar
    const uploadButton = (
      <div styleName="upload-avatar-container">
        <img styleName="upload-avatar" src={displayAvatar} />
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
