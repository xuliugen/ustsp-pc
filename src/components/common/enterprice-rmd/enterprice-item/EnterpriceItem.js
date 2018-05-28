import React from 'react'
import './enterpriceItem.css'
export default class EnterpriceItem extends React.Component {
  render() {
    const { enterprice } = this.props
    return (
      <div styleName="enterprice_item">
        <img styleName="photo" src={enterprice.photo} />
        <span styleName="name" >{ enterprice.name }</span>
        <span styleName="type">{ enterprice.type }</span>
      </div>
    )
  }
}
