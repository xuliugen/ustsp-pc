import React from 'react'
import { observer, inject } from 'mobx-react'
import './styles.css'

@inject('searchStore')
@observer
export default class FilterLine extends React.Component {
  state = {
    isUnfold: false,
    selected: this.props.selected
  }

  constructor(props) {
    super(props)
    this.handleItemClick = this.handleItemClick.bind(this)
  }

  handleItemClick(condition) {
    const { conditions: { category, field }, callback, isMulti = false } = this.props
    this.props.searchStore.addCondition({...condition, category, field}, isMulti)
    if (typeof callback === 'function') {
      callback(condition)
    }
  }

  render() {
    const { conditions, hasMore } = this.props
    // line-unfold
    return (
      <div styleName="line">
        <div styleName="line-title">{conditions.category}</div>
        <div styleName={`line-items ${this.state.isUnfold ? '' : 'line-items-fold'}`} style={this.props.style}>
          {conditions.items.map((condition, idx) => {
            const { value, label } = condition
            return (
              <span
                styleName={this.props.selected === value ? 'item item-active' : 'item'}
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
