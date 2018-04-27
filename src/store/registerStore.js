import { observable, action, extendObservable, reaction, computed } from 'mobx'

class RegisterStore {
  @observable step = 1
  @observable initial = { userType: 2 }
  @observable claimData = {}

  @computed
  get isClaimDataAccept() {
    return this.claimData.isAccept
  }

  constructor() {
    this.loadData()
    this.saveInitialData()
    this.saveClaimData()

    this.setInitialData = this.setInitialData.bind(this)
  }

  loadData() {
    const fromStorage = {
      initial: JSON.parse(window.sessionStorage.getItem('reg1')),
      claimData: JSON.parse(window.sessionStorage.getItem('reg2'))
    }
    extendObservable(this.initial, fromStorage.initial)
    extendObservable(this.claimData, fromStorage.claimData)
  }

  @action
  changeStep(step) {
    this.step = step
  }

  @action
  setInitialData(data) {
    this.initial = {
      ...this.initial,
      ...data
    }
  }

  saveInitialData() {
    reaction(
      () => this.initial,
      initial => {
        const storageStr = JSON.stringify(initial)
        window.sessionStorage.setItem('reg1', storageStr)
      }
    )
  }

  saveClaimData() {
    reaction(
      () => this.claimData,
      claimData => {
        const storageStr = JSON.stringify(claimData)
        window.sessionStorage.setItem('reg2', storageStr)
      }
    )
  }

  @action
  setClaimData(data) {
    this.claimData = data
  }

  @action
  clearRegData() {
    this.initial = { userType: 2 }
    this.claimData = {}
    window.sessionStorage.removeItem('reg1')
    window.sessionStorage.removeItem('reg2')
  }
}

export default new RegisterStore()
