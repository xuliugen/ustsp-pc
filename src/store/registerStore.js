import { observable, action } from 'mobx'

class RegisterStore {
  @observable step = 1
  @observable one = {
    userType: 'teacher'
  }

  @action
  changeStep(step) {
    this.step = step
  }

  @action
  changeUserType = (type) => {
    this.one.userType = type
  }

  @action
  setOne(data) {
    this.one = data
  }
}

export default new RegisterStore()
