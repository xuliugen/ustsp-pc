import ajax from 'src/ajax'

export default {
  // 发专利
  publishPatent(body) {
    return ajax.post('/patent/publish', body)
  },

  // 获取转让专利
  fetchTransferPatents(ownerId, page, rows) {
    return ajax.get(`/patent/query/list?ownerId=${ownerId}&page=${page}&rows=${rows}`)
  },

  // 获取购买专利
  fetchBuyPatents(partyId, page, rows) {
    return ajax.get(`/patent/query/buy/list?partyId=${partyId}&page=${page}&rows=${rows}`)
  },

  // 获取详情
  fetchPatentDetail(patentId) {
    return ajax.get(`/patent/detail?patentId=${patentId}`)
  },

  // 乙方发起询价
  // status的状态是乙方的状态，apply 询价了；sended 发了文件；wonder 想购买专利
  changePatentStatus(patentId, userId, status) {
    return ajax.post(`/patent/status?patentId=${patentId}&userId=${userId}&status=${status}`)
  },

  // 甲方发给乙方评估文件
  sendEvaluateDoc(docUrl, money, partyId, patentId) {
    return ajax.post(`/patent/send/document?docUrl=${docUrl}&money=${money}&partyId=${partyId}&patentId=${patentId}`)
  },

  // 专利详情界面获取详情
  fetchPatentAllDetail(patentId) {
    return ajax.get(`patent/query/enquiry?patentId=${patentId}`)
  },

  // 搜索
  searchPatents(body) {
    return ajax.post('/search/patent/detail', body)
  },

  // 主页获取专利数据
  fetchHomePageData() {
    return ajax.get('/patent/home-page/patent')
  }
}
