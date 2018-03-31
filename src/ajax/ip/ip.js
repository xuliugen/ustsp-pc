import ajax from 'src/ajax'

export default {
  // 发专利
  publishPatent(body) {
    return ajax.post('/patent/publish', body)
  }
}
