import ajax from 'src/ajax'

export default {
  // 发专利
  publishPatent(body) {
    return ajax.post('/patent/publish', body)
  },

  // 获取详情
  fetchPatentDetail(patentId) {
    return ajax.get(`/patent/detail?patentId=${patentId}`)
  },

  // 乙方发起询价
  // status的状态是乙方的状态，apply 询价了；sended 发了文件；wonder 想购买专利
  applyEnquiry(patentId, userId, status) {
    return ajax.post(`/patent/status?patentId=${patentId}&userId=${userId}&status=${status}`)
  },

  // 甲方发给乙方评估文件
  sendEvaluateDoc(body) {
    return ajax.post('/patent/send/document', body)
  }
}
