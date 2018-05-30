import React from 'react'
import { Checkbox, message, Pagination, Modal } from 'antd'
import ApplicationItem from './application-item/ApplicationItem'
import './friendsMsg.css'
import { MessageApi } from 'src/ajax'
import { inject, observer } from 'mobx-react'

const confirm = Modal.confirm

@inject('userStore')
@observer
export default class FriendsMsg extends React.Component {
  state = {
    news: [],
    curPanel: 'person',
    mgnt: false,
    checkedList: [],
    selectAll: false,
    pagination: { total: 1, currentPage: 1, pageSize: 5 }
  }

  componentDidMount() {
    this.getMessages(1)
  }

  async getMessages(currentPage) {
    try {
      const { data } = await MessageApi.fetchMessages(this.props.userStore.user.id, 'friend', currentPage, this.state.pagination.pageSize)
      this.setState(prev => ({
        news: data.data,
        checkedList: new Array(data.data.length).fill(false),
        pagination: { total: data.totalNum, currentPage: currentPage, pageSize: prev.pagination.pageSize }
      }))
    } catch (error) {
      console.log(error)
    }
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

  handleSelectedChange(idx) {
    this.setState(prev => ({
      checkedList: prev.checkedList.map((item, i) => {
        return i === idx ? !item : item
      })
    }))
  }

  handleSelectAll = () => {
    this.setState(prev => ({
      checkedList: prev.checkedList.map(item => !prev.selectAll),
      selectAll: !prev.selectAll
    }))
  }

  showDeleteConfirm() {
    let ids = []
    let idxs = []
    let num = this.state.checkedList.filter((item, idx) => {
      if (item) {
        ids.push(this.state.news[idx].id)
        idxs.push(idx)
      }
      return item
    }).length
    if (num === 0) {
      message.warn('请选择需要删除的消息')
    } else {
      confirm({
        title: '确定要删除这 ' + num + ' 项吗？',
        okText: '确认',
        cancelText: '取消',
        okType: 'danger',
        onOk: async () => {
          try {
            const messages = {
              userId: this.props.userStore.user.id,
              messageIds: ids
            }
            const res = await MessageApi.deleteMessages(messages)
            if (res.data === num) {
              message.success('删除成功')
              this.getMessages(this.state.pagination.currentPage)
            } else {
              message.error('删除失败')
            }
          } catch (e) {
            console.log(e)
          }
        }
      })
    }
  }

  handlePagiChange = (page, pageSize) => {
    this.setState((prevState) => ({
      pagination: {
        total: prevState.pagination.total,
        current: page,
        pageSize: pageSize
      }
    }))
    this.getMessages(page)
  }

  render() {
    const titles = [
      // { title: '团队好友申请', name: 'team' },
      { title: '个人好友申请', name: 'person' }
      // { title: '好友私信', name: 'msg' }
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
              <span styleName="mgnt-tags" onClick={this.handleSelectAll} >{this.state.selectAll ? '取消全选' : '全选'}</span>
              <span styleName="mgnt-tags" style={{ margin: '0px 20px' }} onClick={this.showDeleteConfirm.bind(this)}>删除</span>
              <span styleName="mgnt-tags" onClick={this.handleMgnt.bind(this, false)}>退出</span>
            </div>
          ) : (
            <span styleName="mgnt-tags" onClick={this.handleMgnt.bind(this, true)}>管理</span>
          )}
        </div>
        <div styleName="content">
          {this.state.news.map((item, idx) => {
            return (
              <div key={idx} styleName="application-item">
                <ApplicationItem item={item} />
                {this.state.mgnt ? <Checkbox checked={this.state.checkedList[idx]} onChange={this.handleSelectedChange.bind(this, idx)} /> : ''}
              </div>
            )
          })}
          <Pagination
            defaultCurrent={1}
            total={this.state.pagination.total}
            current={this.state.pagination.current}
            pageSize={this.state.pagination.pageSize}
            onChange={this.handlePagiChange}
            hideOnSinglePage
            style={{ position: 'absolute', bottom: '10px', right: '25px' }} />
        </div>
      </div>
    )
  }
}
