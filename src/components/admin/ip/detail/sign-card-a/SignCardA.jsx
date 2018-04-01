import React from 'react'
import { Icon, Avatar } from 'antd'
import './signCardA.css'
import moment from 'moment'
// import ImgAvatar from 'src/assets/defaultAvatar.svg'

export default class SignCardA extends React.Component {
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
    const { ip, partyB } = this.props
    const money = this.priceDigitUpper(ip.money)
    return (
      <div>
        <div styleName="title">签订合同</div>
        <div styleName="content">
          <div styleName="message">
            <Icon type="check-circle" style={{ color: '#62f326', fontSize: '30px' }} />
            <span style={{ marginLeft: '20px' }} >签订合同请求已经发送，等待购买者确认。</span>
          </div>
          <div styleName="partyb">
            <div styleName="info-title">
              受让方信息
            </div>
            <div styleName="partyb-info">
              <div styleName="partyb-avatar">
                <Avatar src={partyB.partyPhoto} icon="user" />
                <span>&nbsp;&nbsp;{partyB.partyName}</span>
              </div>
              <span>{partyB.partyEducation}</span>
              <span>签订发起时间：{moment(partyB.createTime).format('YYYY-MM-DD')}</span>
              <span>转让金额：{money}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
