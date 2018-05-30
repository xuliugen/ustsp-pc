import React from 'react'
import './newsMgnt.css'
import { Input, Checkbox, Pagination, Modal, message } from 'antd'
import { NewsApi } from 'src/ajax'
import NewsItem from 'components/common/news-item/NewsItem'
import { observer, inject } from 'mobx-react'

const Search = Input.Search
const confirm = Modal.confirm

@inject('userStore')
@observer
export default class NewsMgnt extends React.Component {
  constructor() {
    super()
    this.state = {
      news: [],
      selectAll: false,
      checkedList: [],
      time: '全部',
      pagination: { total: 8, current: 1, pageSize: 8 }
    }
  }

  componentDidMount() {
    this.getNews(this.state.pagination.current, this.state.pagination.pageSize)
  }

  getNews = async (current, pageSize, time) => {
    try {
      let { data } = await NewsApi.getOwnNews(this.props.userStore.user.id, current, pageSize, time)
      this.setState(prev => ({
        news: data.data,
        checkedList: new Array(data.data.length).fill(false),
        pagination: { ...prev.pagination, total: data.totalNum }
      }))
    } catch (err) {
      console.log(err)
    }
  }

  handleIntervalChange = (item) => {
    // 修改样式
    this.setState({
      time: item
    })
    // 渲染数据
    this.setState(prev => ({
      pagination: { ...prev.pagination, current: 1 }
    }))
    this.getNews(this.state.pagination.current, this.state.pagination.pageSize, this.setTime(item))
  }

  handleChange = (idx) => {
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

  showDeleteConfirm = () => {
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
          if (num === 1) {
            try {
              const res = await NewsApi.deleteOneNews(this.props.userStore.user.id, ids[0])
              if (res.data === 1) {
                message.success('删除成功')
                this.getNews(this.state.pagination.current, this.state.pagination.pageSize, this.setTime(this.state.time))
              } else {
                message.error('删除失败')
              }
            } catch (e) {
              console.log(e)
            }
          } else {
            try {
              const dynamics = {
                userId: this.props.userStore.user.id,
                dynamicsIds: ids
              }
              const res = await NewsApi.deleteSomeNews(dynamics)
              if (res.data === num) {
                message.success('删除成功')
                this.getNews(this.state.pagination.current, this.state.pagination.pageSize, this.setTime(this.state.time))
              } else {
                message.error('删除失败')
              }
            } catch (e) {
              console.log(e)
            }
          }
        }
      })
    }
  }

  showSingleDelete = (id, deleteFunc) => {
    if (!this.state.checkedList[id]) {
      let list = this.state.checkedList
      list[id] = true
      this.setState({
        checkedList: list
      })
    }
    deleteFunc()
  }

  handlePagiChange = (page, pageSize) => {
    this.setState((prevState) => ({
      pagination: {
        total: prevState.pagination.total,
        current: page,
        pageSize: pageSize
      }
    }))
    this.getNews(page, pageSize, this.setTime(this.state.time))
  }

  setTime = (item) => {
    if (item === '全部') {
      return ''
    } else if (item === '一周内') {
      return 1
    } else if (item === '一月内') {
      return 2
    } else if (item === '一月以后') {
      return 3
    } else {
      message.error('Error')
    }
  }

  render() {
    const times = ['全部', '一周内', '一月内', '一月以后']
    return (
      <div styleName="admin-news-wrapper">
        <div styleName="filter-bar">
          {times.map((item, idx) => {
            let styleName = 'interval'
            if (item === this.state.time) {
              styleName += ' interval-selected'
            }
            return (
              <span key={idx} styleName={styleName} onClick={this.handleIntervalChange.bind(this, item)} >{item}</span>
            )
          })}
          <div styleName="search">
            <Search placeholder="" style={{ width: '100%' }} />
          </div>
        </div>
        {this.state.news.length !== 0 ? this.state.news.map((item, idx) => {
          return (
            <div styleName="news-item-wrapper" key={idx}>
              <div styleName="left">
                <Checkbox checked={this.state.checkedList[idx]} onChange={this.handleChange.bind(this, idx)} style={{ marginRight: '22px' }} />
                <NewsItem news={item} />
              </div>
              <div styleName="delete">
                <a href="javascript:void 0" onClick={this.showSingleDelete.bind(this, idx, this.showDeleteConfirm)} >删除</a>
              </div>
            </div>
          )
        }) : (
          <div styleName="news-item-wrapper"><span style={{ fontSize: '22px' }}>这里暂时没有动态...</span></div>
        )}
        <div styleName="btns">
          <button styleName="selectAll" onClick={this.handleSelectAll} >{this.state.selectAll ? '取消全选' : '全选'}</button>
          <button styleName="batchDeleting" onClick={this.showDeleteConfirm.bind(this)} >批量删除</button>
          <div style={{ float: 'right' }}>
            <Pagination defaultCurrent={1} total={this.state.pagination.total} current={this.state.pagination.current} pageSize={this.state.pagination.pageSize} onChange={this.handlePagiChange} hideOnSinglePage />
          </div>
        </div>
      </div>
    )
  }
}
