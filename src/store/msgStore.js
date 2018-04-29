import { observable, action, computed } from 'mobx'
import { userStore } from 'src/store'
import { MessageApi } from 'src/ajax'

class MsgStore {
  @observable systemMsgNum = 0
  @observable projectMsgNum = 0
  @observable patentMsgNum = 0
  @observable friendMsgNum = 0

  async dispatchGetCounts() {
    if (userStore.isLogin) {
      const { data } = await MessageApi.getMsgCounts(userStore.user.id)
      this.setMsgNum(data)
    }
  }

  @action setMsgNum({ systemMsgNum, projectMsgNum, patentMsgNum, friendMsgNum }) {
    this.systemMsgNum = systemMsgNum
    this.projectMsgNum = projectMsgNum
    this.patentMsgNum = patentMsgNum
    this.friendMsgNum = friendMsgNum
  }

  @computed get totalNum() {
    return this.systemMsgNum + this.projectMsgNum + this.patentMsgNum + this.friendMsgNum
  }

  @computed get hasMsg() {
    return this.totalNum > 0
  }
}

export default new MsgStore()
