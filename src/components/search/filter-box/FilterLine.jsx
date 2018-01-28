import React from 'react'
import { observer, inject } from 'mobx-react'
import './styles.css'

@inject('searchStore')
@observer
export default class FilterLine extends React.Component {
  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(condition) {
    const { conditions: { category, field }, callback, isMulti = false, addDisabled = false } = this.props
    if (!addDisabled) {
      this.props.searchStore.addCondition({...condition, category, field}, isMulti)
    }
    if (typeof callback === 'function') {
      callback()
    }
  }

  render() {
    const { conditions } = this.props
    return (
      <div styleName="line line-unfold">
        <div styleName="line-title">{conditions.category}</div>
        <div styleName="line-items">
          {conditions.items.map((condition, idx) => {
            const { value, label } = condition
            return (
              <span
                styleName="item"
                className={idx === 0 ? 'item-active' : ''}
                key={value}
                onClick={this.handleItemClick.bind(this, condition)}>{label}
              </span>
            )
          })}
        </div>
      </div>
    )
  }
}
