import React from 'react'
import './uploadLicensePic.css'
import { Upload, Icon, message } from 'antd'
import { observer, inject } from 'mobx-react'

@inject('registerStore')
@observer
export default class uploadLicensePic extends React.Component {
  state = {
    loading: false,
    imageUrl: ''
  }

  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true })
      return
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      message.success('上传照片成功')
      let license = info.file.response
      let pics = JSON.parse(license[0].result)
      this.props.setLicense(pics.data.access_url)
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
        <div styleName="upload-text">上传正面</div>
      </div>
    )

    return (
      <Upload
        name="files"
        listType="picture"
        styleName="license-uploader"
        showUploadList={false}
        data={{ id: this.props.registerStore.initial.uid }}
        action={`${window.config.API_ORIGIN}/upload/business`}
        onChange={this.handleChange}
      >
        {imageUrl ? <img src={imageUrl} alt="营业执照" height="85" /> : uploadButton}
      </Upload>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}
