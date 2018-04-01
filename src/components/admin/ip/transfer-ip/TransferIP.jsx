import React from 'react'
import IPItem from '../common/ipItem/IPItem'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'

@inject('userStore')
@observer
export default class TransferIP extends React.Component {
  state = {
    patents: [],
    pagination: { total: 0, current: 1, pageSize: 8 }
  }

  componentDidMount() {
    this.getPatents()
  }

  async getPatents(current = 1, pageSize = 8) {
    try {
      const { data } = await IpApi.fetchTransferPatents(this.props.userStore.user.id, current, pageSize)
      this.setState((prevState) => ({
        patents: Array.isArray(data.data) ? data.data : [],
        pagination: {
          total: data.totalNum,
          // total: data.pageSize * data.totalPage,
          current: prevState.pagination.current,
          pageSize: pageSize
        }
      }))
    } catch (err) {
      console.log(err)
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
    this.getPatents(page, pageSize)
  }

  render() {
    const { pagination } = this.state
    return (
      <div>
        {this.state.patents.map(patent => {
          return <IPItem key={patent.id} patent={patent} />
        })}
        <div style={{ marginTop: '30px' }}>
          <Pagination hideOnSinglePage current={pagination.current} total={pagination.total} pageSize={pagination.pageSize} onChange={this.handlePagiChange} />
        </div>
      </div>
    )
  }
}
