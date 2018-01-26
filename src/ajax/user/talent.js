import ajax from 'src/ajax'

export default {
  fetchTalents() {
    return ajax.get('/user')
  }
}
