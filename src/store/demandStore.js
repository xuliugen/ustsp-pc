import { observable, action, runInAction } from 'mobx'
import moment from 'moment'
import { DemandApi } from 'src/ajax'

class DemandStore {
  @observable projectId = ''
  @observable demand = {}
  @observable currentStatus = 0
  // 报名时报名人
  @observable registeredPersons = []
  // 报名时关注人
  @observable follewedPersons = []
  // 乙方
  @observable partyB = {}
  // 甲方
  @observable partyA = {}

  async dispatchGetDemandInfo() {
    this.clearData()

    const res = await DemandApi.getDemanOrderDetail(this.projectId)

    let projectInfo = res.data.projectDetail.projectResearchInfo
    // set demand data
    runInAction(() => {
      this.demand = {
        ownerId: projectInfo.ownerId,
        projectName: projectInfo.projectName,
        type: projectInfo.type,
        money: projectInfo.money,
        startTime: projectInfo.startTime ? moment(projectInfo.startTime.valueOf()).format('YYYY-MM-DD') : '无',
        endTime: projectInfo.endTime ? moment(projectInfo.endTime.valueOf()).format('YYYY-MM-DD') : '无',
        PartyAContactInfo: projectInfo.contactWay,
        PartyBContactInfo: res.data.projectDetail.partyContactWay ? res.data.projectDetail.partyContactWay : []
      }
      this.currentStatus = projectInfo.status
      if (res.data.projectDetail.applyData) {
        Object.assign(this.demand, {
          applyDate: res.data.projectDetail.applyData
        })
      }
    })
    // set party a data
    if (res.data.projectDetail.owner) {
      let partyA = res.data.projectDetail.owner
      this.setPartyA(partyA)
    }
    // set party b data
    if (res.data.projectDetail.projectJointDTO) {
      let partyB = res.data.projectDetail.projectJointDTO
      this.setPartyB(partyB)
    }
    switch (projectInfo.status) {
      case 1:
        // set applicants and followers data
        runInAction(() => {
          const applicants = res.data.applicants
          const followers = res.data.followers
          this.registeredPersons = applicants.data
          this.follewedPersons = followers.data
        })
        break
    }
  }

  @action
  clearData() {
    this.demand = {}
    this.registeredPersons = []
    this.follewedPersons = []
    this.partyB = {}
    this.partyA = {}
  }

  @action
  setProjectId(projectId) {
    this.projectId = projectId
  }

  @action
  setPartyB(partyB) {
    this.partyB = partyB
  }

  @action
  setPartyA(partyA) {
    this.partyA = partyA
  }
}

export default new DemandStore()
