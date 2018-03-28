import React from 'react'
import { withRouter } from 'react-router-dom'

@withRouter
export default class IPContent extends React.Component {
  render() {
    return (
      <div>ip: {this.props.match.params.id}</div>
    )
  }
}
