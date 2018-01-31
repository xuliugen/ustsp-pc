import ajax from 'src/ajax'

export default {
  fetchProjects() {
    return ajax.get('/project/query/home-page/projects')
  },

  getApplicationDetail(projectId, userId) {
    return ajax.get(`/project/query/application-detail?projectId=${projectId}&userId=${userId}`)
  },

  signUpInfo(body) {
    return ajax.post('/project/docking', body)
  },

  // 搜索项目
  searchProjects(req) {
    return ajax.post('/search/project/detail', req)
  },

  // 获取推荐项目
  fetchRmdProjects() {
    return ajax.get('/project/query/home-page/projects')
  }
}
