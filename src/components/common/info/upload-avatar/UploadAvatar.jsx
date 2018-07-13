// @flow
import React from 'react'
import { Upload, message, Modal, Icon } from 'antd'
import { observer, inject } from 'mobx-react'
import Cropper from 'react-cropper'
import 'cropperjs/dist/cropper.css'
import axios from 'axios'

import imgDefaultAvatar from 'src/assets/defaultAvatar.svg'

@inject('registerStore')
@observer
export default class UploadAvatar extends React.Component {
  state = {
    visible: false,
    imageUrl: null,
    filename: '',
    naturalWidth: '',
    naturalHeight: '',
    error: false,
    hover: false
  }

  _crop = () => {
    let canVS = this.refs.cropper && this.refs.cropper.getData()
    if (canVS) {
      this.setState({
        naturalWidth: parseInt(canVS.width),
        naturalHeight: parseInt(canVS.height)
      })
    }
  }

  beforeUpload(file) {
    const isLt2M = file.size / 1024 / 1024 < 2
    if (!isLt2M) {
      message.error('图片不能大于2MB!请重新选择')
      this.setState({
        error: true
      })
    } else {
      this.setState({
        error: false
      })
    }

    return isLt2M
  }

  // handleChange = (info) => {
  //   // if (info.file.status === 'uploading') {
  //   //   this.setState({ loading: true })
  //   //   return
  //   // }
  //   if (info.file.status === 'done') {
  //     // Get this url from response in real world.
  //     message.success('上传照片成功')
  //     let tchPhotos = info.file.response
  //     let pics = JSON.parse(tchPhotos[0].result)
  //     // const avatarUrls = pics.data.resource_path.split('/')
  //     // this.props.setPhoto(avatarUrls[2])
  //     // console.log(avatarUrls[2])
  //     this.props.setPhoto(pics.data.resource_path)
  //     getBase64(info.file.originFileObj, imageUrl => this.setState({
  //       imageUrl,
  //       loading: false
  //     }))
  //   } else if (info.file.status === 'error') {
  //     message.error('上传照片失败')
  //     this.setState({
  //       loading: false
  //     })
  //   }
  // }

  render() {
    const {
      visible,
      imageUrl,
      naturalHeight,
      naturalWidth,
      error,
      hover
    } = this.state

    const uploadProps = {
      accept: 'image/jpg,image/jpeg,image/png,image/bmp',
      action: `${window.config.API_ORIGIN}/upload/avatar`,
      showUploadList: false,
      beforeUpload: (info) => {
        this.beforeUpload(info)
      },
      customRequest: (info) => {
        getBase64(info.file, imageUrl => this.setState({
          imageUrl: error ? '' : imageUrl
        }))
        this.setState({
          visible: !error,
          filename: info.file.name
        })
      },
      onChange: (info) => {
        console.log('test')
      }
    }
    const modalProps = {
      title: '图片裁剪',
      // width: '900',
      visible,
      onOk: () => {
        this.setState({
          visible: false,
          imageUrl: this.refs.cropper.getCroppedCanvas().toDataURL()
        }, () => {
          let fd = new FormData()
          if (this.state.imageUrl) {
            fd.set('files', dataURLtoFile(this.state.imageUrl, this.state.filename))
            fd.set('id', '')
            axios.post(uploadProps.action, fd).then((res) => {
              if (Array.isArray(res.data)) {
                message.success('图片上传成功')
                let avatars = res.data
                let pic = JSON.parse(avatars[0].result)
                this.props.setPhoto(pic.data.resource_path)
              } else {
                message.error('图片上传失败')
              }
            })
          }
        })
      },
      onCancel: () => {
        this.setState({
          imageUrl: '',
          visible: false,
          filename: ''
        })
      }
    }

    const displayAvatar = this.props.photo || imgDefaultAvatar
    const uploadButton = (
      <div
        style={styles['upload-avatar-container']}
        onMouseEnter={() => this.setState({ hover: true })}
        onMouseLeave={() => this.setState({ hover: false })}>
        <img style={styles['upload-avatar']} src={displayAvatar} />
        <div style={hover ? styles.hoverLayerActive : styles.hoverLayer}>
          <Icon style={styles['upload-icon']} type={this.state.loading ? 'loading' : 'plus'} />
          <div style={styles['upload-hoverText']}>点击上传</div>
        </div>
      </div>
    )
    return (
      <div>
        <Upload
          name="files"
          listType="picture"
          style={styles['upload-wrapper']}
          {...uploadProps}
          // data={{ id: this.props.registerStore.initial.uid }}
          // action={`${window.config.API_ORIGIN}/upload/avatar`}
          // beforeUpload={beforeUpload}
          // onChange={this.handleChange}
        >
          {imageUrl ? <img src={imageUrl} alt="头像" width="120" /> : uploadButton}
        </Upload>
        <Modal {...modalProps}>
          <div>{naturalHeight} x {naturalWidth}px</div>
          <Cropper
            ref="cropper"
            src={imageUrl}
            style={{ height: 400, width: '100%' }}
            // aspectRatio={tRatio}
            guides={false}
            crop={this._crop.bind(this)}
          />
        </Modal>
      </div>
    )
  }
}

function getBase64(img, callback) {
  const reader = new FileReader()
  reader.addEventListener('load', () => callback(reader.result))
  reader.readAsDataURL(img)
}

function dataURLtoFile(dataurl, filename) {
  var arr = dataurl.split(',')
  var mime = arr[0].match(/:(.*?);/)[1]
  var bstr = atob(arr[1])
  var n = bstr.length
  var u8arr = new Uint8Array(n)
  while (n--) {
    u8arr[n] = bstr.charCodeAt(n)
  }
  return new File([u8arr], filename, { type: mime })
}

const styles = {
  'upload-wrapper': {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    width: '270px',
    height: '270px',
    border: '1px solid #eee'
  },

  'upload-avatar-container': {
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    width: '120px'
  },

  'upload-avatar': {
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    objectFit: 'cover'
  },

  hoverLayer: {
    display: 'none'
  },

  hoverLayerActive: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    left: 0,
    top: 0,
    width: '120px',
    height: '120px',
    borderRadius: '50%',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
    color: '#fff',
    cursor: 'pointer'
  },

  'upload-hoverText': {
    marginTop: '3px',
    fontSize: '14px'
  },

  'upload-icon': {
    fontSize: '32px'
  }

}
