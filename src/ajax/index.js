import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'
import TchInfoApi from './user/tchInfo'
import EtpInfoApi from './user/etpInfo'
import StuInfoApi from './user/stuInfo'
import DemandApi from './demand/demand'
import TalentApi from './user/talent'

export default axios
export {
  SessionApi,
  RegisterApi,
  TchInfoApi,
  EtpInfoApi,
  StuInfoApi,
  DemandApi,
  TalentApi
}
