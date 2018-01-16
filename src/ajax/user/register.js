import ajax from 'src/ajax'

export default {
  fetchVerifyCode(phone) {
    return ajax.get(`/user/code/phone?phone=${phone}`)
  },

  checkVerifyCode(code, id, type) {
    switch (type) {
      case 'phone':
        return ajax.post(`/user/code/check`, {
          code: code,
          phone: id,
          flag: 1
        })
      case 'email':
        return ajax.post(`/user/code/check`, {
          code: code,
          mail: id,
          flag: 0
        })
      default:
        break
    }
  },

  register(body) {
    return ajax.post('/user/register', body)
  }
}
