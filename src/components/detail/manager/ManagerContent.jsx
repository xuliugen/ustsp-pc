import React from 'react'
import InfoManager from './info-manager/InfoManager'
import { MgrInfoApi } from 'src/ajax'
import { withRouter } from 'react-router-dom'

@withRouter
export default class ManagerContent extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      manager: {}
    }
  }

  componentDidMount() {
    this.getInfo()
  }

  async getInfo() {
    try {
      const info = await MgrInfoApi.getMgrInfo(this.props.match.params.id)
      this.setState({
        manager: info.data
      })
    } catch (error) {
      console.log(error)
    }
  }

  render() {
    return (
      <div>
        <InfoManager manager={this.state.manager} />
      </div>
    )
  }
}
