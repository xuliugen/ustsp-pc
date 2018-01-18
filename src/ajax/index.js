import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'
import TchInfo from './user/tchInfo'

export default axios
export {
  SessionApi,
  RegisterApi,
  TchInfo
}
