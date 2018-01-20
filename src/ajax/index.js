import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'
import TchInfoApi from './user/tchInfo'
import StuInfoApi from './user/stuInfo'

export default axios
export {
  SessionApi,
  RegisterApi,
  TchInfoApi,
  StuInfoApi
}
