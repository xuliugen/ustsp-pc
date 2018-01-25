import ajax from 'src/ajax'

export default {
  pubishDemand(body) {
    return ajax.post('/project/publish', body)
  },

  getPublishedDemand(userId, page, row, status) {
    if (status === undefined) {
      return ajax.get(`/project/query/status?userid=${userId}&page=${page}&rows=${row}`)
    }
    return ajax.get(`/project/query/status?userid=${userId}&status=${status}&page=${page}&rows=${row}`)
  },

  getDemandApplicants(userId, projectId) {
    return ajax.get(`/project/query/applicants?userId=${userId}&projectId=${projectId}`)
  },

  getDemandFollowers(projectId) {
    return ajax.get(`/project/query/followers?projectId=${projectId}`)
  }
}
