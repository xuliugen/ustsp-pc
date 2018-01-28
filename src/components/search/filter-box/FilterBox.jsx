import React from 'react'
import { observer, inject } from 'mobx-react'
import { Tag } from 'antd'
import FilterLine from './FilterLine'
import './styles.css'

import { Major, Province, Title, Type } from './data'

@inject('searchStore')
@observer
export default class FilterBox extends React.Component {
  handleTagClose = (condition) => {
    this.props.searchStore.removeCondition(condition)
  }

  render() {
    const searchStore = this.props.searchStore
    return (
      <div styleName="filter-box">
        <FilterLine conditions={Major} />
        <FilterLine conditions={Province} />
        <div styleName="line">
          <div styleName="line-title">学校</div>
          <div styleName="line-items">
            <span styleName="item" className="item-active">不限</span>
          </div>
        </div>
        <FilterLine conditions={Title} />
        <FilterLine conditions={Type} />
        <div styleName="conditions">
          {searchStore.conditions.map(({ category, field, value }) => {
            return <Tag key={value} closable afterClose={this.handleTagClose.bind(this, {field, value})}>{category}: {value}</Tag>
          })}
        </div>
      </div>
    )
  }
}
