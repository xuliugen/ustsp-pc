import React from 'react'
import IPItem from '../common/ipItem/IPItem'
import { IpApi } from 'src/ajax'

export default class TransferIP extends React.Component {
  state = {
    patents: []
  }

  componentDidMount() {
    this.getPatents()
  }

  async getPatents() {
    try {
      const {data} = await IpApi.fetchTransferPatents()
      this.setState({
        patents: data
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
