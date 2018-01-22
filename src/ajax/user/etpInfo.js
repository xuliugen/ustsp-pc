import ajax from 'src/ajax'

export default {
  completeInfo(body) {
    return ajax.post('/enterprise/completeInfo', body)
  }
}
