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

  // 获取推荐人才
  fetchRmdTalents(id) {
    return ajax.get(`/user/introduce?id=${id}`)
  },

  // 获取感兴趣的老师
  fetchInterestedTeacher(id) {
    return ajax.get(`/user/introduce/teacher?id=${id}`)
  },

  // 获取感兴趣的学生
  fetchInterestedStudent(id) {
    return ajax.get(`/user/introduce/student?id=${id}`)
  },

  fetchUserInfo(id) {
    return ajax.get(`/user/show-user?userId=${id}`)
  }
}
