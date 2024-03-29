import ajax from 'src/ajax'

export default {
  // queryType 1系统消息，11好友消息，21项目消息， 31专利消息，41团队，51站内信'
  fetchMessages(userId, queryType, page, rows) {
    const queryTypes = ['system', 'friend', 'demand', 'ip', 'team', 'post']
    queryType = queryTypes.indexOf(queryType) * 10 + 1
    return ajax.get(`/message/query/messages?userId=${userId}&queryType=${queryType}&page=${page}&rows=${rows}`)
  },

  fetchOneMessage(msgId) {
    return ajax.get(`/message/query/one?msgId=${msgId}`)
  },

  deleteMessages(body) {
    return ajax.post('/message/delete/batches', body)
  },

  checkIsFriend(ownerId, partyId) {
    return ajax.get(`/connection/check/friend?ownerId=${ownerId}&partyId=${partyId}`)
  },

  // first 发起者 second 接受者
  sendAddFirend(ownerId, partyId) {
    return ajax.post(`/message/add/friend?ownerId=${ownerId}&partyId=${partyId}`)
  },

  rejectAddFirend(ownerId, partyId, msgId) {
    return ajax.post(`/message/reject/friend?ownerId=${ownerId}&partyId=${partyId}&msgId=${msgId}`)
  },

  getMsgCounts(userId) {
    return ajax.get(`/message/get/total-number?userId=${userId}`)
  },

  // 查询站内信详情
  getPostMsgDetail(msgId) {
    return ajax.get(`/message/get/notification?msgId=${msgId}`)
  }
}
