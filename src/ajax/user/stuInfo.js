import ajax from 'src/ajax'

export default {
  completeStuInfo(body) {
    return ajax.post('/student/completeInfo', body)
  },

  completeStuEducation(body) {
    return ajax.post('/student/completeEducation', body)
  },

  updateStuEdu(body) {
    return ajax.put('/user/changeEducation', body)
  },

  getInfo(userId) {
    return ajax.get(`./student/getInfo?id=${userId}`)
  },

  getEduInfo(userId) {
    return ajax.get(`/student/getOtherAddInfo?id=${userId}`)
  }
}
