import React from 'react'
import './downloadFile.css'
import ImgLink from '../../../../../assets/link.png'

export default class DownloadFile extends React.Component {
  render() {
    return (
      <div styleName="download-file">
        <div styleName="file-name">
          <span><img src={ImgLink} /></span>
          <span styleName="name">{this.props.download.uploadFileName}</span>
        </div>
        <div styleName="download-link">
          <a href={this.props.download.uploadFileUrl} >点击下载</a>
        </div>
      </div>
    )
  }
}
