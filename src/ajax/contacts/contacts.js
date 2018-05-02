import ajax from 'src/ajax'

export default {
  // 同意添加好友
  addFriendAgreement(ownerId, partyId, msgId) {
    return ajax.post(`/connection/add/friend?ownerId=${ownerId}&partyId=${partyId}&msgId=${msgId}`)
  },

  fetchFriendsList(id) {
    return ajax.get(`/connection/get/list?id=${id}`)
  },

  fetchSecondDegreeFriends(id) {
    return ajax.get(`/connection/get/second/friend?id=${id}`)
  },

  // 给好友添加备注
  setNotes(ownerId, partyId, label) {
    return ajax.post(`/connection/add/label?ownerId=${ownerId}&partyId=${partyId}&label=${label}`)
  },

  // 删除好友
  deleteFriends(ownerId, partyId) {
    return ajax.delete(`/connection?ownerId=${ownerId}&partyId=${partyId}`)
  }

}
