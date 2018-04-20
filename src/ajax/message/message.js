import ajax from 'src/ajax'

export default {
  // queryType 1.系统消息 2.好友消息 3.项目消息 4.专利消息
  fetchMessages(userId, queryType, page, rows) {
    return ajax.get(`/message/query/messages?userId=${userId}&queryType=${queryType}&page=${page}&rows=${rows}`)
  },

  fetchOneMessage(msgId) {
    return ajax.get(`/message/query/one?msgId=${msgId}`)
  }
}
