import ajax from 'src/ajax'

export default {
  pubishDemand(body) {
    return ajax.post('/project/publish', body)
  },

  getPublishedDemand(page, row, status) {
    if (status === undefined) {
      return ajax.get(`/project/query/status?page=${page}&rows=${row}`)
    }
    return ajax.get(`/project/query/status?status=${status}&page=${page}&rows=${row}`)
  }
}
