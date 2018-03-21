import { observable, action, runInAction } from 'mobx'
import moment from 'moment'
import { DemandApi } from 'src/ajax'
import { userStore } from 'src/store'

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

  async dispatchGetDemandInfo() {
    this.clearData()
    const res = await DemandApi.getDemanOrderDetail(this.projectId, userStore.user.id)
    let projectInfo = res.data.projectDetail.projectResearchInfo
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
    switch (projectInfo.status) {
      case 1:
        runInAction(() => {
          const applicants = res.data.applicants
          const followers = res.data.followers
          this.registeredPersons = applicants.data
          this.follewedPersons = followers.data
        })
        break
      case 2:
        runInAction(() => {
          const partyB = res.data.projectDetail.projectJointDTO
          this.partyB = partyB
        })
    }
  }

  @action
  clearData() {
    this.demand = {}
    this.registeredPersons = []
    this.follewedPersons = []
    this.partyB = {}
  }

  @action
  setProjectId(projectId) {
    this.projectId = projectId
  }
}

export default new DemandStore()
