import React from 'react'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import { message } from 'antd'
import 'braft-editor/dist/braft.css'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
export default class PubNewsContent extends React.Component {
  state = {
    htmlContent: this.props.htmlContent
  }

  handleHTMLChange = (htmlContent) => {
    // console.log(htmlContent)
    this.setState({
      htmlContent
    })
  }

  handleRawChange = (rawContent) => {
    // console.log(rawContent, rawContent.blocks[0].text)
  }

  render() {
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: this.state.htmlContent,
      onHTMLChange: this.handleHTMLChange,
      onRawChange: this.handleRawChange,
      controls: [
        'undo', 'redo', 'split', 'font-size', 'font-family', 'line-height', 'letter-spacing',
        'indent', 'text-color', 'bold', 'italic', 'underline', 'strike-through',
        'superscript', 'subscript', 'remove-styles', 'text-align', 'split', 'headings', 'list_ul',
        'list_ol', 'blockquote', 'code', 'split', 'link', 'split', 'hr', 'split', 'media', 'clear'
      ],
      extendControls: [
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            window.open().document.write(this.state.htmlContent)
          }
        }
      ],
      media: {
        uploadFn: (item) => {
          const serverURL = `${window.config.API_ORIGIN}/upload/project/file`
          const xhr = new XMLHttpRequest()
          const fd = new FormData()

          const successFn = () => {
            // 假设服务端直接返回文件上传后的地址
            // 上传成功后调用param.success并传入上传后的文件地址
            const file = JSON.parse(xhr.response)[0]
            const result = JSON.parse(file.result)
            item.success({
              url: result.data.access_url
            })
          }

          const progressFn = (event) => {
            // 上传进度发生变化时调用param.progress
            item.progress(event.loaded / event.total * 100)
          }

          const errorFn = (response) => {
            // 上传发生错误时调用param.error
            message.error('上传图片出错')
          }

          xhr.upload.addEventListener('progress', progressFn, false)
          xhr.addEventListener('load', successFn, false)
          xhr.addEventListener('error', errorFn, false)
          xhr.addEventListener('abort', errorFn, false)

          fd.append('files', item.file)
          fd.append('id', this.props.userStore.user.id)
          xhr.open('POST', serverURL, true)
          xhr.setRequestHeader('Authorization', 'Bearer ' + window.sessionStorage.getItem('token'))
          xhr.send(fd)
        }
      }
    }

    return (
      <div className="demo">
        <BraftEditor
          ref={this.props.editorRef}
          {...editorProps} />
      </div>
    )
  }
}
