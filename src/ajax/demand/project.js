import ajax from 'src/ajax'

export default {
  fetchProjects() {
    return ajax.get('/project/query/home-page/projects')
  }
}
