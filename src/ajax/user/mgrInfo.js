import ajax from 'src/ajax'

export default {
  getMgrInfo(mgrId) {
    return ajax.get(`/manager/getInfo?id=${mgrId}`)
  }
}
