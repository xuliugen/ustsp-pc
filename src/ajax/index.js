import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'

export default axios
export {
  SessionApi,
  RegisterApi
}
