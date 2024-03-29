import axios from './config'
// user module
import SessionApi from './user/session'
import RegisterApi from './user/register'
import TchInfoApi from './user/tchInfo'
import EtpInfoApi from './user/etpInfo'
import StuInfoApi from './user/stuInfo'
import TalentApi from './user/talent'
import UserInfoApi from './user/userInfo'
import MgrInfoApi from './user/mgrInfo'
// project module
import DemandApi from './demand/demand'
import ProjectApi from './demand/project'
// news module
import NewsApi from './news/news'
// ip module
import IpApi from './ip/ip'
import ContactsApi from './contacts/contacts'
// feedback
import FeedbackApi from './user/feedback'
import MessageApi from './message/message'
import PushApi from './message/push'

export default axios
export {
  SessionApi,
  RegisterApi,
  TchInfoApi,
  EtpInfoApi,
  StuInfoApi,
  UserInfoApi,
  DemandApi,
  TalentApi,
  ProjectApi,
  NewsApi,
  IpApi,
  MessageApi,
  PushApi,
  ContactsApi,
  FeedbackApi,
  MgrInfoApi
}
