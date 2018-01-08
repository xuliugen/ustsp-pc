import { observable, action } from 'mobx'
import { SessionAPI } from 'src/ajax'
import { userStore } from 'src/store'

class AuthStore {
  @observable username = ''
  @observable password = ''

  @action
  async login() {
    try {
      const req = {
        username: this.username,
        password: this.password
      }
      const userInfo = await SessionAPI.login(req)
      this.setPassword('')
      userStore.save(userInfo)
    } catch (err) {
      console.log(err)
    }
  }

  @action logout() {
    userStore.clear()
  }

  @action setUsername(username) {
    this.username = username
  }

  @action setPassword(password) {
    this.password = password
  }
}

export default new AuthStore()
