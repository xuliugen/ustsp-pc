import ajax from 'src/ajax'

export default{
  sendfeedbackData(body) {
    return ajax.post('/feedback/send', body)
  }
}
