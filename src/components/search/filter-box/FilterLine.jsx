import React from 'react'
import { observer, inject } from 'mobx-react'
import './styles.css'

@inject('searchStore')
@observer
export default class FilterLine extends React.Component {
  handleItemClick = (category, field, value) => {
    this.props.searchStore.addCondition(category, field, value, false)
  }

  render() {
    const condition = this.props.condition
    return (
      <div styleName="line line-unfold">
        <div styleName="line-title">{condition.category}</div>
        <div styleName="line-items">
          {condition.items.map(({ value, label }, idx) => {
            return (
              <span
                styleName="item"
                className={idx === 0 ? 'item-active' : ''}
                key={value}
                onClick={this.handleItemClick.bind(this, condition.category, condition.field, value)}>{label}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}
