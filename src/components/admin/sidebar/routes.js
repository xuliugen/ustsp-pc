// key 和 to 必须要有对应关系：key 须和 to 的最后域相同
export const routes = [
  {
    key: 'info',
    title: {
      icon: 'user',
      text: '个人信息'
    },
    children: [
      {
        key: 'detail',
        to: '/admin/info/detail',
        text: '信息查看'
      }, {
        key: 'modify',
        to: '/admin/info/modify',
        text: '修改信息'
      }, {
        key: 'change-pwd',
        to: '/admin/info/change-pwd',
        text: '修改密码'
      }
    ]
  }, {
    key: 'message',
    title: {
      icon: 'notification',
      text: '消息通知'
    },
    children: [
      {
        type: 'systemMsgNum',
        key: 'system-msg',
        to: '/admin/message/system-msg',
        text: '系统消息'
      }, {
        type: 'projectMsgNum',
        key: 'demand-news',
        to: '/admin/message/demand-news',
        text: '项目消息'
      }, {
        type: 'patentMsgNum',
        key: 'ip-msg',
        to: '/admin/message/ip-msg',
        text: '专利消息'
      }, {
        type: 'friendMsgNum',
        key: 'friends-msg',
        to: '/admin/message/friends-msg',
        text: '好友消息'
      }
    ]
  }, {
    key: 'demand',
    title: {
      icon: 'check-square-o',
      text: '需求对接'
    },
    children: [
      {
        key: 'new-demand',
        to: '/admin/demand/new-demand',
        text: '发布新需求'
      }, {
        key: 'published-demand',
        to: '/admin/demand/published-demand',
        text: '已发布的需求'
      }, {
        key: 'undertaken-demand',
        to: '/admin/demand/undertaken-demand',
        text: '已报名/已承接的需求'
      }
    ]
  }, {
    key: 'news',
    title: {
      icon: 'file-text',
      text: '动态'
    },
    children: [
      {
        key: 'pub-news',
        to: '/admin/news/pub-news',
        text: '发布动态'
      }, {
        key: 'news-mgnt',
        to: '/admin/news/news-mgnt',
        text: '动态管理'
      }
    ]
  }, {
    key: 'ip',
    title: {
      icon: 'info-circle-o',
      text: '知识产权'
    },
    children: [
      {
        key: 'new-ip',
        to: '/admin/ip/new-ip',
        text: '发布专利'
      }, {
        key: 'transfer-ip',
        to: '/admin/ip/transfer-ip',
        text: '转让专利'
      }, {
        key: 'buy-ip',
        to: '/admin/ip/buy-ip',
        text: '购买专利'
      }
    ]
  }, {
    key: 'contacts',
    title: {
      icon: 'contacts',
      text: '人脉管理'
    },
    children: [
      {
        key: 'friends',
        to: '/admin/contacts/friends',
        text: '我的好友'
      }, {
        key: 'second-degree-contacts',
        to: '/admin/contacts/second-degree-contacts',
        text: '二度人脉'
      }
      //   key: 'friends-news',
      //   to: '/admin/contacts/friends-news',
      //   text: '好友动态'
      // }
    ]
  }, {
    key: 'push',
    title: {
      icon: 'pushpin-o',
      text: '消息推送'
    },
    children: [
      {
        key: 'push-messages',
        to: '/admin/push/push-messages',
        text: '推送消息'
      },
      {
        key: 'push-records',
        to: '/admin/push/push-records',
        text: '推送记录'
      }
    ]
  }
]
