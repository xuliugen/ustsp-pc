// @flow
import React from 'react'
import { observer, inject } from 'mobx-react'
import { computed } from 'mobx'
import './styles.css'

type Props = {
  conditions: {
    category: string,
    field: string,
    items: Array<{
      label: string,
      value: any
    }>
  },
  addDisabled?: boolean,
  isMulti?: boolean,
  hasMore?: boolean,
  style?: Object,
  callback?: Function
}

type State = {
  isUnfold: boolean
}

@inject('searchStore')
@observer
export default class FilterLine extends React.Component<Props, State> {
  @computed get selected() {
    const condition = this.props.searchStore.conditions.find(({ field }) => this.props.conditions.field === field)
    return condition ? condition.value : ''
  }

  state = {
    isUnfold: false
  }

  handleItemClick(condition: {
    label: string,
    value: any
  }) {
    const { searchStore, conditions: { category, field }, callback, isMulti = false } = this.props
    searchStore.addCondition({ ...condition, category, field, notCondition: this.props.addDisabled }, isMulti)
    if (typeof callback === 'function') {
      callback(condition)
    }
  }

  render() {
    const { conditions, hasMore } = this.props
    return (
      <div styleName="line">
        <div styleName="line-title">{conditions.category}</div>
        <div styleName={`line-items ${this.state.isUnfold ? '' : 'line-items-fold'}`} style={this.props.style}>
          {conditions.items.map((condition, idx) => {
            const { value, label } = condition
            return (
              <span
                styleName={this.selected === value ? 'item item-active' : 'item'}
                key={value}
                onClick={this.handleItemClick.bind(this, condition)}>{label}
              </span>
            )
          })}
          {hasMore &&
            <button styleName="more" onClick={() => { this.setState(pre => ({isUnfold: !pre.isUnfold})) }}>更多</button>}
        </div>
      </div>
    )
  }
}
