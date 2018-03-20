import ajax from 'src/ajax'

export default {
  publishNews(userId, title, abstracts, dynamics) {
    return ajax.post('/dynamics/publish', {
      userId,
      title,
      abstracts,
      dynamics
    })
  },

  deleteOneNews(userId, dynamicsId) {
    return ajax.delete(`/dynamics/delete?userId=${userId}&dynamicsId=${dynamicsId}`)
  },

  deleteSomeNews(body) {
    return ajax.post(`/dynamics/delete/all`, body)
  },

  getOwnNews(userId, page, row, time) {
    if (time) {
      return ajax.get(`/dynamics/query/all?userId=${userId}&time=${time}&page=${page}&rows=${row}`)
    }
    return ajax.get(`/dynamics/query/all?userId=${userId}&page=${page}&rows=${row}`)
  },

  fetchNewsDetail(dynamicsId) {
    return ajax.get(`/dynamics/query/one?dynamicsId=${dynamicsId}`)
  }
}
