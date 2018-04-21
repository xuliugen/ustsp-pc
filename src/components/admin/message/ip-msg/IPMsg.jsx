import React from 'react'
import MsgItem from './msg-item/MsgItem'
import { Checkbox } from 'antd'
import './ipMsg.css'

export default class IPMsg extends React.Component {
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
          <span>专利消息</span>
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
          <div styleName="news-item">
            <MsgItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
          <div styleName="news-item">
            <MsgItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
          <div styleName="news-item">
            <MsgItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
        </div>
      </div>
    )
  }
}
