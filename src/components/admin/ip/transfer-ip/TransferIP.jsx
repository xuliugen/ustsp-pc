import React from 'react'
import IPItem from '../common/ipItem/IPItem'
import { IpApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
export default class TransferIP extends React.Component {
  state = {
    patents: []
  }

  componentDidMount() {
    this.getPatents()
  }

  async getPatents() {
    try {
      const { data } = await IpApi.fetchTransferPatents(this.props.userStore.user.id, 1, 10)
      this.setState({
        patents: Array.isArray(data.data) ? data.data : []
      })
    } catch (err) {
      console.log(err)
    }
  }

  render() {
    return (
      <div>
        {this.state.patents.map(patent => {
          return <IPItem key={patent.id} patent={patent} />
        })}
      </div>
    )
  }
}
