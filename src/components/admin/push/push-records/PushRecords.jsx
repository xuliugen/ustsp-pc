import React from 'react'
import './pushRecords.css'
import { Tag, Pagination } from 'antd'
import { PushApi } from 'src/ajax'

import RecordCard from './record-card/RecordCard'

const { CheckableTag } = Tag

export default class PushRecords extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      method: 1,
      records: [],
      recordsPage: {
        page: 1,
        row: 10
      }
    }
    this.setMethod = this.setMethod.bind(this)
  }

  componentDidMount() {
    this.getRecords()
  }

  setMethod(method, cb) {
    this.setState({
      method
    }, cb)
  }

  handleMethodChange = (method, checked) => {
    if (checked) {
      this.setMethod(method, () => {
        this.getRecords()
      })
    }
  }
  onPageChange = (page) => {
    this.setState(prev => ({
      ...prev,
      recordsPage: {
        page: page,
        row: prev.recordsPage.row
      }
    }), () => {
      this.getRecords()
    })
  }

  async getRecords() {
    const { method, recordsPage } = this.state
    const { data } = await PushApi.fetchRecords(method, recordsPage.page, recordsPage.row)
    this.setState({
      records: data.data
    })
  }

  render() {
    const { records, recordsPage } = this.state
    return (
      <div styleName="container">
        <div styleName="records-title">推送记录</div>
        <div styleName="records-content">
          <div styleName="push-methods">
            <CheckableTag checked={this.state.method === 1}
              onChange={this.handleMethodChange.bind(this, 1)}>站内信</CheckableTag>
            <CheckableTag checked={this.state.method === 2}
              onChange={this.handleMethodChange.bind(this, 2)}>邮件</CheckableTag>
          </div>
          <div>
            {records.map(record => (
              <RecordCard key={record.id} record={record} />
            ))}
          </div>
          <Pagination current={recordsPage.page} onChange={this.onPageChange}
            total={records.length} pageSize={recordsPage.row} hideOnSinglePage />
        </div>
      </div>
    )
  }
}
