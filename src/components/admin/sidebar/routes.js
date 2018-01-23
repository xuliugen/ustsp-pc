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
      text: '个人信息'
    },
    children: [
      {
        key: 'demand-new',
        to: '/admin/demand/new-demand',
        text: '发布新需求'
      }, {
        key: 'demand-mod',
        to: '',
        text: '已发布的需求'
      }, {
        key: 'demand-security',
        to: '',
        text: '已报名/已承接的需求'
      }
    ]
  }
]
