import ajax from 'src/ajax'

export default {
  pubishDemand(body) {
    return ajax.post('/project/publish', body)
  }

}
