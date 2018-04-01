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
  constructor() {
    super()
    this.state = {
      ip: [
        {title: '新能源电池研究专利', type: '发明专利', productID: '53356367', patentNum: '356352436457', name: '王海超', time: '12-20'},
        {title: '新型全曲OLED屏幕', type: '新型外观', productID: '633563327', patentNum: '344565246457', name: '周竖峰', time: '10-16'},
        {title: '太阳能热水器管道过滤器', type: '发明专利', productID: '631156367', patentNum: '342352476457', name: '马尔', time: '12-20'},
        {title: '新型饮用水多净化设备', type: '实用新型', productID: '87356367', patentNum: '342354566457', name: '王丽娟', time: '12-20'}
      ]
    }
  }

  async componentDidMount() {
    try {
      const { data } = await IpApi.fetchHomePageData()
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
