import ajax from 'src/ajax'

export default {
  // 获取项目详情
  getDemanOrderDetail(projectId) {
    return ajax.get(`/project/query/project-detail?projectId=${projectId}`)
  },
  // 甲方获取已发布项目
  getPublishedDemand(userId, page, row, status) {
    if (status === undefined) {
      return ajax.get(`/project/query/status?userId=${userId}&page=${page}&rows=${row}`)
    }
    return ajax.get(`/project/query/status?userId=${userId}&status=${status}&page=${page}&rows=${row}`)
  },
  // 甲方获取项目的报名人
  getDemandApplicants(userId, projectId) {
    return ajax.get(`/project/query/applicants?userId=${userId}&projectId=${projectId}`)
  },
  // 甲方获取项目的关注人
  getDemandFollowers(projectId) {
    return ajax.get(`/project/query/followers?projectId=${projectId}`)
  },
  // 乙方获取已报名项目
  getUndertakenDemand(userId, page, row, status) {
    return ajax.get(`/project/query/applicated?status=${status}&userId=${userId}&page=${page}&rows=${row}`)
  },
  // 甲方发项目
  pubishDemand(body) {
    return ajax.post('/project/publish', body)
  },
  /**
   * 改变项目状态
   * 如 status 为 'toSign'，则表示甲方等待乙方进行签单确认
   * @param {projectId: string, ownerId: string, partyId: string, status: string}
   */
  changeDemandStatus(body) {
    return ajax.post(`project/status`, body)
  }
}
