import React from 'react'
import IPItem from '../common/ipItem/IPItem'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'

@inject('userStore')
@observer
export default class BuyIp extends React.Component {
  state = {
    patents: [],
    pagination: { total: 0, current: 1, pageSize: 8 }
  }

  componentDidMount() {
    this.getPatents()
  }

  async getPatents(current = 1, pageSize = 8) {
    try {
      const { data } = await IpApi.fetchBuyPatents(this.props.userStore.user.id, 1, 10)
      this.setState((prevState) => ({
        patents: Array.isArray(data.data) ? data.data : [],
        pagination: {
          total: data.totalNum,
          current: prevState.pagination.current,
          pageSize: pageSize
        }
      }))
    } catch (err) {
      console.log(err)
    }
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
