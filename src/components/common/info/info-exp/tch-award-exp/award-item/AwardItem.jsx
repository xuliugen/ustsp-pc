import React from 'react'
import './awardItem.css'
import { Icon, message, Modal } from 'antd'
import moment from 'moment'
import { UserInfoApi } from 'src/ajax'

export default class AwardItem extends React.Component {
  handleEdit(item) {
    this.props.setVisible(true)
    this.props.setSelectedItem(item)
  }

  handleDelete(item) {
    Modal.confirm({
      title: '是否确认删除',
      onOk: async () => {
        try {
          await UserInfoApi.deleteAward(item.id)
          this.props.deleteItem(item)
          message.success('删除成功')
        } catch (err) {
          message.error('删除失败')
          console.log(err)
        }
      }
    })
  }

  render() {
    return (
      <div styleName="root">
        <div styleName="award-name-container">
          <div styleName="flex-row">
            <span styleName="award-name">{this.props.name}</span>
            {this.props.editable && <div>
              <Icon type="edit" styleName="edit-icon" />
              <button styleName="edit-text" onClick={this.handleEdit.bind(this, this.props)}>编辑</button>
              <button styleName="edit-text" onClick={this.handleDelete.bind(this, this.props)}>删除</button>
            </div>}
          </div>
        </div>
        <div styleName="award-info">
          <span styleName="award-info-text">获奖时间: {moment(this.props.time).format('YYYY-MM-DD')}</span>
          <span styleName="award-info-text">级别: {this.props.level}</span>
          <span styleName="award-info-text">排名: {this.props.rank}</span>
        </div>
        <div styleName="award-description">获奖描述: {this.props.introduction ? this.props.introduction : '暂无'}
        </div>
      </div>
    )
  }
}
