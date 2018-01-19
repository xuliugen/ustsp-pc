import ajax from 'src/ajax'

export default {
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
  }
}
