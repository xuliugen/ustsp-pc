import React from 'react'
import './statusTags.css'

export default class StatusTags extends React.Component {
  handleClick(item) {
    this.props.handleClick(item)
  }

  render() {
    return (
      <div styleName="types">
        {this.props.statusTags.map((item, idx) => {
          let styleName = 'type-status'
          if (item.status === this.props.currentStatus) {
            styleName += ' type-status-selected'
          }
          return (
            <span key={idx} styleName={styleName} onClick={this.handleClick.bind(this, item)} >{item.name}</span>
          )
        })}
      </div>
    )
  }
}
