import ajax from 'src/ajax'

export default {
  // queryType 1系统消息，11好友消息，21项目消息， 31专利消息'
  fetchMessages(userId, queryType, page, rows) {
    return ajax.get(`/message/query/messages?userId=${userId}&queryType=${queryType}&page=${page}&rows=${rows}`)
  },

  fetchOneMessage(msgId) {
    return ajax.get(`/message/query/one?msgId=${msgId}`)
  },

  deleteMessages(body) {
    return ajax.post('/message/delete/batches', body)
  }

}
