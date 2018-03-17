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

  deleteNews(userId, dynamicsId) {
    return ajax.post(`/dynamics/delete?userId=${userId}&dynamicsId=${dynamicsId}`)
  },

  fetchNewsDetail(dynamicsId) {
    return ajax.get(`/dynamics/query/one?dynamicsId=${dynamicsId}`)
  }
}
