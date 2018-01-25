import React from 'react'
import './demandDetail.css'
import ApplyCard from './apply-card/ApplyCard'
import OrderDetail from './order-detail/OrderDetail'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'

@inject('userStore')
@observer
export default class DemandDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      registeredPersons: [],
      follewedPersons: []
    }
  }

  async componentDidMount() {
    let applicantsRes = await DemandApi.getDemandApplicants(this.props.userStore.user.id, this.props.match.params.id)
    let followersRes = await DemandApi.getDemandFollowers(this.props.match.params.id)
    this.setState({
      registeredPersons: applicantsRes.data.data,
      follewedPersons: followersRes.data.data
    })
  }
  render() {
    return (
      <div>
        <OrderDetail />
        <div styleName="apply-card-wrapper">
          <ApplyCard registeredPersons={this.state.registeredPersons} follewedPersons={this.state.follewedPersons} />
        </div>
      </div>
    )
  }
}
