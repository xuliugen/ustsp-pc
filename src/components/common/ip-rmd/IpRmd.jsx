import React from 'react'
import Header from 'components/detail/common/header/Header'
import IpItem from './ip-item/IpItem'
import './ipRmd.css'
import { IpApi } from 'src/ajax'

export default class IpsRmd extends React.Component {
  constructor() {
    super()
    this.state = {
      // list：测试数据
      list: []
    }
  }

  async componentDidMount() {
    try {
      const { data } = await IpApi.fetchRmdPatent()
      if (Array.isArray(data)) {
        this.setState({
          list: data.slice(0, 4)
        })
      }
    } catch (e) {
      console.log(e)
    }
  }

  render() {
    const ipsitems = this.state.list.map((item, idx) => {
      return <IpItem item={item} key={idx} />
    })
    return (
      <div styleName="recommand">
        <Header title="热门专利推荐" />
        {ipsitems}
      </div>
    )
  }
}
