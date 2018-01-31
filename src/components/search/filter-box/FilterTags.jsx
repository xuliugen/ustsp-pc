import React from 'react'
import { observer, inject } from 'mobx-react'
import { Tag } from 'antd'
import './styles.css'

@inject('searchStore')
@observer
export default class FilterTags extends React.Component {
  handleTagClose = (condition) => {
    this.props.searchStore.removeCondition(condition)
  }

  render() {
    const searchStore = this.props.searchStore
    return (
      <div styleName="conditions">
        {searchStore.conditions.map(({ category, field, value, label }) => {
          return <Tag key={field + value} closable afterClose={this.handleTagClose.bind(this, { field, value })}>{category}: {label}</Tag>
        })}
      </div>
    )
  }
}
