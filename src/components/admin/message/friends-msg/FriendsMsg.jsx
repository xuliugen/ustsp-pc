import React from 'react'
import { Checkbox } from 'antd'
import ApplicationItem from './application-item/ApplicationItem'
import './friendsMsg.css'

export default class FriendsMsg extends React.Component {
  state = {
    curPanel: 'team',
    mgnt: false
  }

  handleMgnt(status) {
    this.setState({
      mgnt: status
    })
  }

  handleChangePanel(type) {
    this.setState({
      curPanel: type
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          <div>
            <span
              styleName={'title-tags' + (this.state.curPanel === 'team' ? ' selected-tag' : '')}
              onClick={this.handleChangePanel.bind(this, 'team')}>
              团队好友申请
            </span>
            <span
              styleName={'title-tags' + (this.state.curPanel === 'person' ? ' selected-tag' : '')}
              onClick={this.handleChangePanel.bind(this, 'person')}>
              个人好友申请
            </span>
            <span
              styleName={'title-tags' + (this.state.curPanel === 'msg' ? ' selected-tag' : '')}
              onClick={this.handleChangePanel.bind(this, 'msg')}>
              好友私信
            </span>
          </div>
          {this.state.mgnt ? (
            <div>
              <span styleName="mgnt-tags" >全选</span>
              <span styleName="mgnt-tags" style={{ margin: '0px 20px' }}>删除</span>
              <span styleName="mgnt-tags" onClick={this.handleMgnt.bind(this, false)}>退出</span>
            </div>
          ) : (
            <span styleName="mgnt-tags" onClick={this.handleMgnt.bind(this, true)}>管理</span>
          )}
        </div>
        <div styleName="content">
          <div styleName="application-item">
            <ApplicationItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
          <div styleName="application-item">
            <ApplicationItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
          <div styleName="application-item">
            <ApplicationItem />
            {this.state.mgnt ? <Checkbox /> : ''}
          </div>
        </div>
      </div>
    )
  }
}
