import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'
import TchInfoApi from './user/tchInfo'
import EtpInfoApi from './user/etpInfo'
import StuInfoApi from './user/stuInfo'
import TalentApi from './user/talent'
// project module
import DemandApi from './demand/demand'
import ProjectApi from './demand/project'

export default axios
export {
  SessionApi,
  RegisterApi,
  TchInfoApi,
  EtpInfoApi,
  StuInfoApi,
  DemandApi,
  TalentApi,
  ProjectApi
}
