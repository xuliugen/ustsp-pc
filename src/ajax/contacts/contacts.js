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
  }
}
