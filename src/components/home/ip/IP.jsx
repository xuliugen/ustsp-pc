// @flow
import React from 'react'
import './ip.css'
import IpHeader from './header/IpHeader'
import IpCard from './card/Card'
import { IpApi } from 'src/ajax'

type IPObj = {
  title: string,
  type: string,
  productID: string,
  patentNum: string,
  name: string,
  time: string
}

type STATE = {
  ip: Array<IPObj>
}

export default class IP extends React.Component<{}, STATE> {
  state = {
    ip: []
  }

  async componentDidMount() {
    try {
      let { data } = await IpApi.fetchHomePageData(4)
      if (Array.isArray(data) && data.length >= 5) {
        data = data.slice(0, 4)
      }
      this.setState({
        ip: data
      })
    } catch (error) {
      console.error(error)
    }
  }

  render() {
    return (
      <div styleName="ip">
        <div styleName="ip-header-wrapper">
          <IpHeader />
        </div>
        <div styleName="ip-card-wrapper">
          {this.state.ip.map((item, idx) => {
            return (
              <IpCard ip={item} key={idx} />
            )
          })}
        </div>
      </div>
    )
  }
}
