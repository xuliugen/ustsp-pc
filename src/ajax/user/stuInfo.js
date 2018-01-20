import ajax from 'src/ajax'

export default {
  completeStuInfo(body) {
    return ajax.post('/student/completeInfo', body)
  }
}
