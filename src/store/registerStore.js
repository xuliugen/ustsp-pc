import { observable, action } from 'mobx'

class RegisterStore {
  @observable step = 1

  @action
  changeStep(step) {
    this.step = step
  }
}

export default new RegisterStore()
