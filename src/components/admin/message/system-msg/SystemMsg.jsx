import React from 'react'
import MsgItem from './msg-item/MsgItem'
import './systemMsg.css'

export default class SystemMsg extends React.Component {
  state = {
    mgnt: false
  }

  handleMgnt(status) {
    this.setState({
      mgnt: status
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          <span>系统消息</span>
          {this.state.mgnt ? (
            <div>
              <span styleName="tags" >全选</span>
              <span styleName="tags" style={{ margin: '0px 20px' }}>删除</span>
              <span styleName="tags" onClick={this.handleMgnt.bind(this, false)}>退出</span>
            </div>
          ) : (
            <span styleName="tags" onClick={this.handleMgnt.bind(this, true)}>管理</span>
          )}
        </div>
        <div styleName="content">
          <MsgItem mgnt={this.state.mgnt} />
          <MsgItem mgnt={this.state.mgnt} />
          <MsgItem mgnt={this.state.mgnt} />
        </div>
      </div>
    )
  }
}
