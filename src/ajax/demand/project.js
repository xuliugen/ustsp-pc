import ajax from 'src/ajax'

export default {
  fetchProjects(showNum) {
    return ajax.get(`/project/query/home-page/projects?showNum=${showNum}`)
  },

  getApplicationDetail(projectId, userId) {
    return ajax.get(`/project/query/application-detail?projectId=${projectId}&userId=${userId}`)
  },
  // 乙方项目报名
  signUpInfo(body) {
    return ajax.post('/project/docking', body)
  },

  followInfo(body) {
    return ajax.post('/project/follow', body)
  },

  // 搜索项目
  searchProjects(req) {
    return ajax.post('/search/project/detail', req)
  },

  // 获取推荐项目
  fetchRmdProjects(showNum) {
    return ajax.get(`/project/query/home-page/projects?showNum=${showNum}`)
  }
}
