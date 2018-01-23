export const routes = [
  {
    key: 'info',
    title: {
      icon: 'user',
      text: '个人信息'
    },
    children: [
      {
        key: 'info-detail',
        to: '',
        text: '信息查看'
      }, {
        key: 'info-mod',
        to: '',
        text: '修改信息'
      }, {
        key: 'info-security',
        to: '',
        text: '修改密码'
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
        to: '',
        text: '已报名/已承接的需求'
      }
    ]
  }
]
