import { observable, action, extendObservable, reaction } from 'mobx'
import { SessionApi } from 'src/ajax'
import { userStore } from 'src/store'

class AuthStore {
  @observable username = ''
  @observable password = ''
  @observable token = null

  constructor() {
    this.loadData()
    reaction(
      () => this.token,
      token => {
        if (token) {
          const storageStr = JSON.stringify(token)
          window.sessionStorage.setItem('token', storageStr)
        } else {
          window.sessionStorage.removeItem('token')
        }
      }
    )
  }

  loadData() {
    const fromStorage = window.sessionStorage.getItem('token') || ''
    if (fromStorage) {
      extendObservable(this, { token: fromStorage })
    }
  }

  @action
  async login() {
    try {
      const req = {
        phone: this.username,
        password: this.password
      }
      const { data } = await SessionApi.login(req)
      this.setPassword('')
      userStore.save({
        realName: data.realName,
        ...data.user
      })
      this.setToken(data.token)
    } catch (err) {
      throw err
    }
  }

  @action logout() {
    userStore.clear()
    this.setToken(null)
  }

  @action setUsername(username) {
    this.username = username
  }

  @action setPassword(password) {
    this.password = password
  }

  @action setToken(token) {
    this.token = token
  }
}

export default new AuthStore()
