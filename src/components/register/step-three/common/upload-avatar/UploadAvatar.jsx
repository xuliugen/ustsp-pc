// @flow
import React from 'react'
import { Upload, Icon, message } from 'antd'
import { observer, inject } from 'mobx-react'
import './uploadAvatar.css'
import imgDefaultAvatar from './defaultAvatar.svg'

type Props = {
  photo: string,
  setPhoto: (param: string) => mixed
}

type State = {
  loading: boolean,
  imageUrl: string
}

@inject('registerStore')
@observer
export default class UploadAvatar extends React.Component<Props, State> {
  state = {
    loading: false,
    imageUrl: ''
  }

  handleChange = (info: any) => {
    // if (info.file.status === 'uploading') {
    //   this.setState({ loading: true })
    //   return
    // }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      message.success('上传照片成功')
      let tchPhotos = info.file.response
      // console.log(tchPhotos[0].file_url)
      let pics = JSON.parse(tchPhotos[0].result)
      this.props.setPhoto(pics.data.access_url)
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
    const displayAvatar = this.props.tchPhoto ? this.props.tchPhoto : imgDefaultAvatar
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

function getBase64(img, callback: Function) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
