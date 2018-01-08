import { observable, action, computed } from 'mobx'

class UserStore {
  @observable user = null

  @computed get isLogin() {
    return !!this.user
  }

  @action
  save(data) {
    this.user = data
  }

  clear() {
    this.user = null
  }
}

export default new UserStore()
