import { observable, action, computed } from 'mobx'
import { userStore } from 'src/store'
import { MessageApi } from 'src/ajax'

class MsgStore {
  @observable systemMsgNum = 0
  @observable projectMsgNum = 0
  @observable patentMsgNum = 0
  @observable friendMsgNum = 0
  @observable notificationMsgNum = 0

  async dispatchGetCounts() {
    if (userStore.isLogin) {
      const { data } = await MessageApi.getMsgCounts(userStore.user.id)
      this.setMsgNum(data)
    }
  }

  @action setMsgNum({ systemMsgNum = 0, projectMsgNum = 0, patentMsgNum = 0, friendMsgNum = 0, notificationMsgNum = 0 } = {}) {
    this.systemMsgNum = systemMsgNum
    this.projectMsgNum = projectMsgNum
    this.patentMsgNum = patentMsgNum
    this.friendMsgNum = friendMsgNum
    this.notificationMsgNum = notificationMsgNum
  }

  @action clear() {
    this.setMsgNum()
  }

  @computed get totalNum() {
    return this.systemMsgNum + this.projectMsgNum + this.patentMsgNum + this.friendMsgNum + this.notificationMsgNum
  }

  @computed get hasMsg() {
    return this.totalNum > 0
  }
}

export default new MsgStore()
