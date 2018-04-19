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
    const titles = [
      { title: '团队好友申请', name: 'team' },
      { title: '个人好友申请', name: 'person' },
      { title: '好友私信', name: 'msg' }]
    return (
      <div styleName="root">
        <div styleName="title">
          <div>
            {titles.map((item, idx) => {
              let styleName = 'title-tags'
              if (this.state.curPanel === item.name) {
                styleName += ' selected-tag'
              }
              return (
                <span
                  key={idx}
                  styleName={styleName}
                  onClick={this.handleChangePanel.bind(this, item.name)}>
                  {item.title}
                </span>
              )
            })}
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
