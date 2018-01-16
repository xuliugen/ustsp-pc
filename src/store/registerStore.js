import { observable, action, extendObservable, reaction } from 'mobx'

class RegisterStore {
  @observable step = 1
  @observable initial = {}

  constructor() {
    this.loadData()
    this.saveInitialData()

    this.setInitialData = this.setInitialData.bind(this)
  }

  loadData() {
    const defaultValue = { userType: 'teacher' }
    const fromStorage = JSON.parse(window.sessionStorage.getItem('reg1')) || {}
    const data = Object.assign({}, fromStorage, defaultValue)
    extendObservable(this, { initial: data })
  }

  @action
  changeStep(step) {
    this.step = step
  }

  @action
  setInitialData(data) {
    extendObservable(this, { initial: data })
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
}

export default new RegisterStore()
