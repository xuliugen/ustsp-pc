import ajax from 'src/ajax'

export default {
  // 认领教师信息接口
  claimTchInfo(email) {
    return ajax.get(`https://weixin.uppfind.com/university-assistant-server/teacher/fetch?email=${email}&type=1`)
  },

  completeTchInfo(body) {
    return ajax.post('/teacher/completeInfo', body)
  }
}
