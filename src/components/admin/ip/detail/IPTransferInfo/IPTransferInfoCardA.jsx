import React from 'react'
import './IPTransferInfoCardA.css'

export default class IPTransferInfoA extends React.Component {
  constructor() {
    super()
    this.state = {
      header: '根据国务院印发的《实施〈中华人民共和国促进科技成果转化若干规定〉》和《暨南大学促进科技成果转化管理办法》相关规定，现拟将我校以下发明专利转让有关事项予以公示：',
      ipName: '高硬韧低合金耐磨钢及其应用',
      ipID: 'ZL200910037500.1',
      owners: ['李卫', '刘英'],
      transferMethod: '专利权转让',
      taker: '韶关韶瑞铸钢有限公司',
      price: 50.0,
      evaluateCompany: '广州同嘉资产评估有限公司',
      evaluatePrice: 9.9413
    }
  }
  priceDigitUpper(n) {
    n = n * 10000
    const fraction = ['角', '分']
    const digit = [
      '零', '壹', '贰', '叁', '肆',
      '伍', '陆', '柒', '捌', '玖'
    ]
    const unit = [
      ['元', '万', '亿'],
      ['', '拾', '佰', '仟']
    ]
    const head = n < 0 ? '欠' : ''
    n = Math.abs(n)
    let s = ''
    for (let i = 0; i < fraction.length; i++) {
      s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '')
    }
    s = s || '整'
    n = Math.floor(n)
    for (let i = 0; i < unit[0].length && n > 0; i++) {
      let p = ''
      for (let j = 0; j < unit[1].length && n > 0; j++) {
        p = digit[n % 10] + unit[1][j] + p
        n = Math.floor(n / 10)
      }
      s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s
    }
    return head + s.replace(/(零.)*零元/, '元')
      .replace(/(零.)+/g, '零')
      .replace(/^整$/, '零元整')
  }

  componentDidMount() {
    // 请求相应信息
  }
  render() {
    const price = this.state.price
    const evaluatePrice = this.state.evaluatePrice
    const owners = this.state.owners
    return (
      <div styleName="content-wrapper">
        <div styleName="title">
          <span styleName="title-text">转让公示</span>
        </div>
        <div styleName="text-head">
          <span>专利转让公示</span>
        </div>
        <div styleName="explanation">
          <span>{this.state.header}</span>
        </div>
        <div styleName="transfer-info">
          <ul>
            <li>专利名称：{this.state.ipName}</li>
            <li>专利号：{this.state.ipID}</li>
            <li>发明人：{owners.map((item, idx) => {
              return (
                idx === owners.length - 1 ? <span>{item}</span> : <span>{item}，</span>
              )
            })}</li>
            <li>交易方式：{this.state.transferMethod}</li>
            <li>协议定价：{this.state.price}万元 (大写：{this.priceDigitUpper(price)})</li>
            <li>评估机构：{this.state.evaluateCompany}</li>
            <li>评估价格：{this.state.evaluatePrice}万元 (大写：{this.priceDigitUpper(evaluatePrice)})</li>
          </ul>
        </div>
      </div>
    )
  }
}
