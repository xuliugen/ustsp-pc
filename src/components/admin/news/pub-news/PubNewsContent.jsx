import React from 'react'

// 引入编辑器以及编辑器样式
import BraftEditor from 'braft-editor'
import 'braft-editor/dist/braft.css'

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
      extendControls: [
        {
          type: 'button',
          text: '预览',
          className: 'preview-button',
          onClick: () => {
            console.log(this.props.editorRef)
            window.open().document.write(this.state.htmlContent)
          }
        }
      ]
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