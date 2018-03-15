import React from 'react'
import './newsMgnt.css'
import { Input, Checkbox, Pagination, Modal } from 'antd'
import NewsItem from './news-item/NewsItem'
import ImgCover from 'src/assets/avatar11.png'

const Search = Input.Search
const confirm = Modal.confirm

export default class NewsMgnt extends React.Component {
  constructor() {
    super()
    this.state = {
      news: [
        { cover: ImgCover, title: '1光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '2光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '3光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '4光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '5光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '6光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '7光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' },
        { cover: ImgCover, title: '8光速中韩燕：人性流、穿刺力与一头贴地的豹子', abstract: '投资人应该像豹子一样，把脸贴在地上。有两种投资人，一种擅长预测还未发生的事情，还有', time: '2018-01-30  20：33' }
      ],
      selectAll: false,
      checkedList: [false, false, false, false, false, false, false, false]
    }
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
    let num = this.state.checkedList.filter(item => item).length
    confirm({
      title: '确定要删除这 ' + num + ' 项吗？',
      okText: '确认',
      cancelText: '取消',
      okType: 'danger',
      onOk: () => {
      }
    })
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

  render() {
    return (
      <div styleName="admin-news-wrapper">
        <div styleName="filter-bar">
          <div styleName="search">
            <Search placeholder="" style={{ width: '100%' }} />
          </div>
        </div>
        {this.state.news.map((item, idx) => {
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
        })}
        <div styleName="btns">
          <button styleName="selectAll" onClick={this.handleSelectAll} >{this.state.selectAll ? '取消全选' : '全选'}</button>
          <button styleName="batchDeleting" onClick={this.showDeleteConfirm.bind(this)} >批量删除</button>
          <div style={{ float: 'right' }}>
            <Pagination defaultCurrent={1} total={50} pageSize={15} hideOnSinglePage />
          </div>
        </div>
      </div>
    )
  }
}
