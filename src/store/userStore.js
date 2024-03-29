import { observable, action, computed, reaction, extendObservable } from 'mobx'
import { message } from 'antd'

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

  @action
  changeAvatar(avatar) {
    this.user.avatar = avatar
    const storageStr = JSON.stringify(this.user)
    window.sessionStorage.setItem('user', storageStr)
  }

  checkIfInfoCompleted() {
    if (this.isLogin && !this.user.realName) {
      message.warn('请进入个人中心完善用户信息~')
      return false
    }
    return true
  }
}

export default new UserStore()
