import React from 'react'
import Header from 'components/detail/common/header/Header'
import IpItem from './ip-item/IpItem'
import './ipRmd.css'

export default class IpsRmd extends React.Component {
  constructor() {
    super()
    this.state = {
      // list：测试数据
      list: [
        {ipname: '基于手机的智能算法如果字数超了就忽略', category: 'A:人类生活需求'},
        {ipname: '一种多功能检测的视力表', category: 'A:人类生活需求'},
        {ipname: 'Chaokrason B在制备抗疱疹病毒的制药工艺的应用', category: 'A:人类生活需求'},
        {ipname: '一种用于LED灯的丙烯酸涂料及其制备方法', category: '其他'}
      ]
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
