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
    mgnt: false
  }

  handleMgnt(status) {
    this.setState({
      mgnt: status
    })
  }

  componentDidMount() {
    this.getMessages(1, 8)
  }

  async getMessages(currentPage, pageSize) {
    try {
      const { data } = await MessageApi.fetchMessages(this.props.userStore.user.id, 21, currentPage, pageSize)
      this.setState({
        news: data.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="title">
          <span styleName="title-tags">项目消息</span>
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
                <MsgItem item={item} />
                {this.state.mgnt ? <Checkbox /> : ''}
              </div>
            )
          })}
        </div>
      </div>
    )
  }
}
