import { observable, action, computed, reaction, extendObservable } from 'mobx'

class UserStore {
  @observable user = null

  constructor() {
    this.loadData()
    reaction(
      () => this.user,
      user => {
        if (user) {
          const storageStr = JSON.stringify(user)
          window.sessionStorage.setItem('user', storageStr)
        } else {
          window.sessionStorage.removeItem('user')
        }
      }
    )
  }

  loadData() {
    const fromStorage = JSON.parse(window.sessionStorage.getItem('user'))
    if (fromStorage) {
      extendObservable(this, { user: fromStorage })
    }
  }

  @computed get isLogin() {
    return this.user && this.user.id
  }

  @action
  save(data) {
    this.user = data
  }

  @action
  clear() {
    this.user = null
  }
}

export default new UserStore()
