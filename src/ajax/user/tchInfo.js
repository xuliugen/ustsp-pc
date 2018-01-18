import ajax from 'src/ajax'

export default {
  completeTchInfo(body) {
    return ajax.post('/teacher/completeInfo', body)
  }
}
