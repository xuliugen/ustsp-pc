// @flow
import React from 'react'
import './ip.css'
import IpHeader from './header/IpHeader'
import IpCard from './card/Card'

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
        {title: '新能源电池研究专利', type: '发明专利', productID: '53356367', patentNum: '342352436457', name: '王德福', time: '12-20'},
        {title: '新型全曲OLED屏幕', type: '新型外观', productID: '53356367', patentNum: '342352436457', name: '周海媚', time: '10-16'},
        {title: '如果有很长的标题到这里就显示两排啊啊啊啊啊啊啊', type: '发明专利', productID: '53356367', patentNum: '342352436457', name: '马云', time: '12-20'},
        {title: '如果是短标题', type: '发明专利', productID: '53356367', patentNum: '342352436457', name: '王健林', time: '12-20'}
      ]
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
