import ajax from 'src/ajax'

export default {
  publishNews(body) {
    return ajax.post('/dynamics/publish', body)
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
  },

  getMoreNews(queryType, page, row) {
    return ajax.get(`dynamics/query/type?queryType=${queryType}&page=${page}&rows=${row}`)
  },

  // search
  searchNews(body) {
    return ajax.post('/search/dynamics/detail', body)
  }
}
