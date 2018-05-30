import React from 'react'
import './transferInfo.css'

export default class TransferInfo extends React.Component {
  priceDigitUpper(n) {
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
  render() {
    const { patent } = this.props
    return (
      <div styleName="transfer-info">
        <ul>
          <li styleName="info-item">专利名称：{patent.patentName}</li>
          <li styleName="info-item">专利号：{patent.applicationNumber}</li>
          <li styleName="info-item">发明人：{patent.inventor}</li>
          {/* <li styleName="info-item">交易方式：{patent.transferMethod}</li> */}
          <li styleName="info-item">协议定价：{patent.money}元 (大写：{this.priceDigitUpper(patent.money)})</li>
          {/* <li styleName="info-item">评估机构：{patent.evaluateCompany}</li> */}
          {/* <li styleName="info-item">评估价格：{patent.evaluatePrice}万元 (大写：{this.priceDigitUpper(patent.evaluatePrice)})</li> */}
        </ul>
      </div>
    )
  }
}
