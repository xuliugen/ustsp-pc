import ajax from 'src/ajax'

export default {
  // first 发起者 second 接受者
  sendAddFirend(firstUserId, secondUserId) {
    return ajax.post(`/relation/send/relation-message?firstUserId=${firstUserId}&secondUserId=${secondUserId}`)
  }
}
