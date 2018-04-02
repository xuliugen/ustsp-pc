import React from 'react'
import IPItem from '../common/ipItem/IPItem'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import { Pagination } from 'antd'
import './buyIP.css'

@inject('userStore')
@observer
export default class BuyIp extends React.Component {
  state = {
    patents: [],
    type: '询价中',
    pagination: { total: 0, current: 1, pageSize: 8 }
  }

  componentDidMount() {
    this.getPatents()
  }

  async getPatents(type = 1, current = 1, pageSize = 8) {
    try {
      const { data } = await IpApi.fetchBuyPatents(this.props.userStore.user.id, type, current, pageSize)
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

  handleTypeChange = (type, idx) => {
    idx = idx + 1
    this.setState({
      type: type
    })
    this.setState(prev => ({
      pagination: { ...prev.pagination, current: 1 }
    }))
    this.getPatents(idx, 1, this.state.pagination.pageSize)
  }

  render() {
    const statusTags = ['询价中', '购买成功', '购买失败']
    const { pagination } = this.state
    return (
      <div>
        <div styleName="types">
          {statusTags.map((item, idx) => {
            let styleName = 'type-status'
            if (item === this.state.type) {
              styleName += ' type-status-selected'
            }
            return (
              <span key={idx} styleName={styleName} onClick={this.handleTypeChange.bind(this, item, idx)} >{item}</span>
            )
          })}
        </div>
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
