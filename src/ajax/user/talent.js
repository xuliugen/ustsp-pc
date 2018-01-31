import ajax from 'src/ajax'

export default {
  // 主页获取5个人
  fetchTalents() {
    return ajax.get('/user')
  },

  // 搜索人才
  searchTalents(req) {
    return ajax.post('/search/user/detail', req)
  },

  // 类似人才推荐
  fetchSimilarTalents() {
    return ajax.get('/user/introduce')
  }
}
