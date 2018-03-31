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
  }
}
