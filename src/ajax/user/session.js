import ajax from 'src/ajax'

export default {
  login(req) {
    return ajax.post('http://chat.hstar.org:8601/HkWp7sxj-/login', req)
  },

  register() {
    // return ajax.post()
  }
}
