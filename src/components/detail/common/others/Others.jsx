// @flow
import React from 'react'
import Header from 'components/detail/common/header/Header'
import OthersItem from './others-item/OthersItem'
import './others.css'

type OthersObj = {
  title: string,
  date: string,
}

type State = {
  others: Array<OthersObj>
}

export default class Others extends React.Component<{}, State> {
  constructor() {
    super()
    this.state = {
      others: [
        { title: '其他内容标题1', date: '2018-01-08' },
        { title: '其他内容标题2', date: '2018-01-08' },
        { title: '其他内容标题3', date: '2018-01-08' },
        { title: '其他内容标题4', date: '2018-01-08' },
        { title: '其他内容标题5', date: '2018-01-08' }
      ]
    }
  }
  render() {
    const othersItem = this.state.others.map((item, idx) => {
      return (
        <div key={idx}>
          <OthersItem others={item} />
        </div>
      )
    })
    return (
      <div styleName="others">
        <Header title="其他内容" />
        { othersItem }
      </div>
    )
  }
}
