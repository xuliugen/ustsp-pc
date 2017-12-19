import { observable, action } from 'mobx'

class UserStore {
  @observable user

  @action login() { }

  @action logout() {
    this.user = null
  }
}

export default new UserStore()
