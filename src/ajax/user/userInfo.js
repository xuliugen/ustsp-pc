import ajax from 'src/ajax'

export default {
  fetchEdu(id) {
    return ajax.get(`/user/getEducation?id=${id}`)
  },

  updateEdu(body) {
    return ajax.put('/user/changeEducation', body)
  },

  deleteEdu(id) {
    return ajax.delete(`/user/deleteEducation?id=${id}`)
  }
}
