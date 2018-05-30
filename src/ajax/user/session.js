import ajax from 'src/ajax'

export default {
  login(req) {
    return ajax.post('/user/login', req)
  }
}
