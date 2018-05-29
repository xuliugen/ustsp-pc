import ajax from 'src/ajax'

export default {
  completeInfo(body) {
    return ajax.post('/enterprise/completeInfo', body)
  },

  getEnterpriseInfo(etpId) {
    return ajax.get(`/enterprise/getInfo?id=${etpId}`)
  },

  updateInfo(body) {
    return ajax.put('/enterprise/change-info', body)
  },

  fetchRmdEtp(id) {
    return ajax.get(`/enterprise/introduce?id=${id}`)
  }
}
