import React from 'react'
import './allNewsContent.css'
import NewsItem from './news-item/NewsItem'
import { Pagination } from 'antd'

export default class AllNewsContent extends React.Component {
  constructor() {
    super()
    this.state = {
      type: '项目动态'
    }
  }

  handleTypeChange = (type) => {
    this.setState({
      type: type
    })
  }

  render() {
    const types = ['项目动态', '老师动态', '企业动态']
    return (
      <div styleName="news-list-wrapper">
        <div styleName="types">
          {types.map((item, idx) => {
            let styleName = 'type-status'
            if (item === this.state.type) {
              styleName += ' type-status-selected'
            }
            return (
              <span key={idx} styleName={styleName} onClick={this.handleTypeChange.bind(this, item)} >{item}</span>
            )
          })}
        </div>
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <NewsItem />
        <div style={{ float: 'right', margin: '15px 20px' }}>
          <Pagination defaultCurrent={1} total={50} pageSize={15} hideOnSinglePage />
        </div>
      </div>
    )
  }
}
