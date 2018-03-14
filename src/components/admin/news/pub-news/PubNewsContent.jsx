import React from 'react'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

export default class PubNewsContent extends React.Component {
  handleHTMLChange = (htmlContent) => {
    this.props.setContent({ htmlContent })
    console.log(htmlContent)
  }

  handleRawChange = (rawContent) => {
    console.log(rawContent)
  }

  render() {
    const editorProps = {
      height: 500,
      contentFormat: 'html',
      initialContent: this.props.htmlContent,
      onHTMLChange: this.handleHTMLChange,
      onRawChange: this.handleRawChange,
      extendControls: [
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            window.open().document.write(this.props.htmlContent)
          }
        }
      ]
    }

    return (
      <div className="demo">
        <BraftEditor {...editorProps} />
      </div>
    )
  }
}
