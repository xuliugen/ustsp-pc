import { observable, action, extendObservable, reaction, computed } from 'mobx'

class RegisterStore {
  @observable step = 1
  @observable initial = {}
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
    const defaultValue = { userType: 2 }
    const fromStorage = {
      initial: JSON.parse(window.sessionStorage.getItem('reg1')),
      claimData: JSON.parse(window.sessionStorage.getItem('reg2'))
    }
    const data = Object.assign({}, defaultValue, fromStorage)
    extendObservable(this, data)
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
}

export default new RegisterStore()
