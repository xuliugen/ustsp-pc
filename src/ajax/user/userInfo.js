import ajax from 'src/ajax'

export default {
  fetchEdu(id) {
    return ajax.get(`/user/getEducation?userId=${id}`)
  },

  updateEdu(body) {
    return ajax.put('/user/changeEducation', body)
  },

  deleteEdu(id) {
    return ajax.delete(`/user/deleteEducation?id=${id}`)
  },

  fetchResearch(id) {
    return ajax.get(`/user/getResearch?userId=${id}`)
  },

  updateResearch(body) {
    return ajax.put('/user/changeResearch', body)
  },

  deleteResearch(id) {
    return ajax.delete(`/user/deleteResearch?id=${id}`)
  }
}
