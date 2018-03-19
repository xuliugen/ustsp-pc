import React from 'react'
import './demandDetail.css'
import ApplyCard from './apply-card/ApplyCard'
import OrderDetail from './order-detail/OrderDetail'
import { DemandApi } from 'src/ajax'
import { observer, inject } from 'mobx-react'
import moment from 'moment'

@inject('userStore')
@observer
export default class DemandDetail extends React.Component {
  constructor() {
    super()
    this.state = {
      demand: {},
      currentStatus: 0,
      registeredPersons: [],
      follewedPersons: []
    }
  }

  async componentDidMount() {
    this.getDemandInfo()
  }

  async getDemandInfo() {
    const res = await DemandApi.getDemanOrderDetail(this.props.match.params.id, this.props.userStore.user.id)
    let projectInfo = res.data.projectDetail.projectResearchInfo
    this.setState({
      demand: {
        projectName: projectInfo.projectName,
        type: projectInfo.type,
        money: projectInfo.money,
        startTime: projectInfo.startTime ? moment(projectInfo.startTime.valueOf()).format('YYYY-MM-DD') : '无',
        endTime: projectInfo.endTime ? moment(projectInfo.endTime.valueOf()).format('YYYY-MM-DD') : '无',
        PartyAContactInfo: projectInfo.contactWay,
        PartyBContactInfo: res.data.projectDetail.partyContactWay ? res.data.projectDetail.partyContactWay : []
      },
      currentStatus: projectInfo.status
    })
    if (projectInfo.status === 1) {
      const applicants = res.data.applicants
      const followers = res.data.followers
      this.setState({
        registeredPersons: applicants.data,
        follewedPersons: followers.data
      })
    }
  }

  render() {
    return (
      <div>
        <OrderDetail demand={this.state.demand} currentStatus={this.state.currentStatus} />
        <div styleName="apply-card-wrapper">
          <ApplyCard registeredPersons={this.state.registeredPersons} follewedPersons={this.state.follewedPersons} />
        </div>
      </div>
    )
  }
}
