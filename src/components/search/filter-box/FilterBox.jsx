import React from 'react'
import { observer, inject } from 'mobx-react'
import { Tag } from 'antd'
import FilterLine from './FilterLine'
import './styles.css'

import { Major } from './data'

@inject('searchStore')
@observer
export default class FilterBox extends React.Component {
  render() {
    const searchStore = this.props.searchStore
    return (
      <div styleName="filter-box">
        <FilterLine condition={Major} />
        <div styleName="line">
          <div styleName="line-title">省份</div>
          <div styleName="line-items">
            <span styleName="item" className="item-active">不限</span>
          </div>
        </div>
        <div styleName="line">
          <div styleName="line-title">学校</div>
          <div styleName="line-items">
            <span styleName="item" className="item-active">不限</span>
          </div>
        </div>
        <div styleName="line">
          <div styleName="line-title">职称</div>
          <div styleName="line-items">
            <span styleName="item" className="item-active">不限</span>
            <span styleName="item">教授</span>
            <span styleName="item">副教授</span>
            <span styleName="item">副教授</span>
            <span styleName="item">讲师</span>
            <span styleName="item">其他</span>
          </div>
        </div>
        <div styleName="line">
          <div styleName="line-title">人才类型</div>
          <div styleName="line-items">
            <span styleName="item" className="item-active">不限</span>
            <span styleName="item">老师</span>
            <span styleName="item">学生</span>
          </div>
        </div>
        <div styleName="conditions">
          {searchStore.conditions.map(({ category, field, value }) => {
            return <Tag key={value} closable>{category}: {value}</Tag>
          })}
          {/* <span styleName="condition">人才类型: 老师</span>
          <span styleName="condition">人才类型: 老师</span> */}
        </div>
      </div>
    )
  }
}
