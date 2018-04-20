import React from 'react'
import MsgItem from './msg-item/MsgItem'
import { Checkbox } from 'antd'
import { inject, observer } from 'mobx-react'
import './demandNews.css'
import { MessageApi } from 'src/ajax'

@inject('userStore')
@observer
export default class DemandNews extends React.Component {
  state = {
    news: [],
    curPanel: 'owner',
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

  componentDidMount() {
    this.getMessages(1, 8)
  }

  async getMessages(currentPage, pageSize) {
    try {
      const { data } = await MessageApi.fetchMessages(this.props.userStore.user.id, 22, currentPage, pageSize)
      this.setState({
        news: data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    const titles = [
      { title: '乙方消息', name: 'owner' },
      { title: '甲方消息', name: 'partyB' }
    ]
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
              <span styleName="tags" >全选</span>
              <span styleName="tags" style={{ margin: '0px 20px' }}>删除</span>
              <span styleName="tags" onClick={this.handleMgnt.bind(this, false)}>退出</span>
            </div>
          ) : (
            <span styleName="tags" onClick={this.handleMgnt.bind(this, true)}>管理</span>
          )}
        </div>
        <div styleName="content">
          {this.state.news.map((item, idx) => {
            return (
              <div key={idx} styleName="news-item">
                <MsgItem item={item} party={this.state.curPanel} />
                {this.state.mgnt ? <Checkbox /> : ''}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
