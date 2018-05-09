import React from 'react'
import './researchItem.css'
import { Icon, message, Modal } from 'antd'
import moment from 'moment'
import { UserInfoApi } from 'src/ajax'

export default class ResearchItem extends React.Component<{}> {
  handleEdit(item) {
    this.props.setVisible(true)
    this.props.setSelectedItem(item)
  }

  handleDelete(item) {
    Modal.confirm({
      title: '是否确认删除',
      onOk: async () => {
        try {
          await UserInfoApi.deleteResearch(item.id)
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
    const props = this.props
    const { editable } = this.props

    return (
      <div styleName="root">
        <div>
          <span styleName="research-name">{props.projectName}</span>
          {(props.startTime && props.endTime) &&
            <span styleName="time-text">{moment(props.startTime).format('YYYY.M')} - {moment(props.endTime).format('YYYY.M')}</span>}
        </div>
        <div styleName="ul-container">
          <ul style={{ paddingLeft: '18px' }}>
            {(props.projectLevel) && <li styleName="li-text">级别: {props.projectLevel}</li>}
            <li styleName="li-text">
              <span>经费:   {props.funding ? `¥${props.funding}万元` : '暂无'}</span>
              {editable && <div styleName="operate-container">
                <button styleName="operate-text" onClick={this.handleDelete.bind(this, props)}>删除</button>
                <div>
                  <Icon type="edit" />
                  <button styleName="operate-text" onClick={this.handleEdit.bind(this, props)}>编辑</button>
                </div>
              </div>}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
