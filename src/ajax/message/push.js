import ajax from 'src/ajax'

export default {
  fetchTargets(queryCommand, page, rows) {
    return ajax.post(`/search/notification/user`, {
      ...queryCommand
    }, {
      params: {
        page,
        rows
      }
    })
  },

  send(notification, userId) {
    return ajax.post(`/notification/send`, {
      ...notification
    }, {
      params: { userId }
    })
  },

  fetchRecords(method, page, rows) {
    return ajax.get(`/notification/get/list`, {
      params: {
        method,
        page,
        rows
      }
    })
  },

  fetchRecordDetail(notificationId, userId) {
    return ajax.get(`/notification/get/detail`, {
      params: {
        notificationId,
        userId
      }
    })
  }
}
