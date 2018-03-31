import React from 'react'
import './ipItem.css'

export default class IPItem extends React.Component {
  render() {
    // const { patent } = this.props
    return (
      <div styleName="root">
        <div styleName="header">
          {/* {patent.patentName} */}
          <span styleName="name">name</span>
          <span styleName="status">status</span>
        </div>
        <div styleName="info">
          <div>
            <span>行业分类：</span>
            <span>A</span>
          </div>
          <div style={{marginLeft: '50px'}}>
            <span>专类类型：</span>
            <span>B</span>
          </div>
        </div>
      </div>
    )
  }
}
