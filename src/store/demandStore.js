import { observable, action, runInAction } from 'mobx'
import moment from 'moment'
import { DemandApi } from 'src/ajax'
import { userStore } from 'src/store'

class DemandStore {
  @observable projectId = ''
  @observable demand = {}
  @observable currentStatus = 0
  @observable registeredPersons = []
  @observable follewedPersons = []

  async dispatchGetDemandInfo() {
    this.clearData()
    const res = await DemandApi.getDemanOrderDetail(this.projectId, userStore.user.id)
    let projectInfo = res.data.projectDetail.projectResearchInfo
    runInAction(() => {
      this.demand = {
        projectName: projectInfo.projectName,
        type: projectInfo.type,
        money: projectInfo.money,
        startTime: projectInfo.startTime ? moment(projectInfo.startTime.valueOf()).format('YYYY-MM-DD') : '无',
        endTime: projectInfo.endTime ? moment(projectInfo.endTime.valueOf()).format('YYYY-MM-DD') : '无',
        PartyAContactInfo: projectInfo.contactWay,
        PartyBContactInfo: res.data.projectDetail.partyContactWay ? res.data.projectDetail.partyContactWay : []
      }
      this.currentStatus = projectInfo.status
    })
    if (projectInfo.status === 1) {
      runInAction(() => {
        const applicants = res.data.applicants
        const followers = res.data.followers
        this.registeredPersons = applicants.data
        this.follewedPersons = followers.data
      })
    }
  }

  @action
  clearData() {
    this.demand = {}
    this.registeredPersons = []
    this.follewedPersons = []
  }

  @action
  setProjectId(projectId) {
    this.projectId = projectId
  }
}

export default new DemandStore()
