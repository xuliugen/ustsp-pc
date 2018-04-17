import ajax from 'src/ajax'

export default {
  // edu
  fetchEdu(id) {
    return ajax.get(`/user/getEducation?userId=${id}`)
  },
  updateEdu(body) {
    return ajax.put('/user/changeEducation', body)
  },
  deleteEdu(id) {
    return ajax.delete(`/user/deleteEducation?id=${id}`)
  },

  // research
  fetchResearch(id) {
    return ajax.get(`/user/getResearch?userId=${id}`)
  },
  updateResearch(body) {
    return ajax.put('/user/changeResearch', body)
  },
  deleteResearch(id) {
    return ajax.delete(`/user/deleteResearch?id=${id}`)
  },

  // ip
  fetchIp(id) {
    return ajax.get(`/user/getIntellectualProperty?userId=${id}`)
  },
  updateIp(body) {
    return ajax.put('/user/changeIntellectualProperty', body)
  },
  deleteIp(id) {
    return ajax.delete(`/user/deleteIntellectualProperty?id=${id}`)
  },

  // award
  fetchAward(id) {
    return ajax.get(`/user/getAward?userId=${id}`)
  },
  updateAward(body) {
    return ajax.put('/user/changeAward', body)
  },
  deleteAward(id) {
    return ajax.delete(`/user/deleteAward?id=${id}`)
  }
}
