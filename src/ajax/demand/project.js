import ajax from 'src/ajax'

export default {
  fetchProjects() {
    return ajax.get('/project/query/home-page/projects')
  },

  getApplicationDetail(projectId) {
    return ajax.get(`/project/query/application-detail?projectId=${projectId}`)
  },

  signUpInfo(body) {
    return ajax.post('/project/docking', body)
  }
}
