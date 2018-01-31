import ajax from 'src/ajax'

export default {
  // 认领教师信息接口
  claimTchInfo(email) {
    return ajax.get(`https://weixin.uppfind.com/university-assistant-server/teacher/fetch?email=${email}&type=1`)
  },

  completeTchInfo(body) {
    return ajax.post('/teacher/completeInfo', body)
  },

  completeEducation(body) {
    return ajax.post('/teacher/completeEducation', body)
  },

  completeResearch(body) {
    return ajax.post('/teacher/completeResearch', body)
  },

  completeIntellectualProperty(body) {
    return ajax.post('/teacher/completeIntellectualProperty', body)
  },

  completeAward(body) {
    return ajax.post('/teacher/completeAward', body)
  },

  getOtherAddInfo(userId) {
    return ajax.get(`/teacher/getOtherAddInfo?id=${userId}`)
  },

  getTeacherInfo(userId) {
    return ajax.get(`/teacher/getInfo?id=${userId}`)
  }

}
