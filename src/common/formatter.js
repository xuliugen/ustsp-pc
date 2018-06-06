export function userTypeNumToStr(userType) {
  switch (userType) {
    case 1:
      return 'student'
    case 2:
      return 'teacher'
    case 3:
      return 'enterprise'
    case 4:
      return 'manager'
    default:
      return null
  }
}

export function projectStatusNum2Str(status) {
  switch (status) {
    case 0:
      return '待审核'
    case 1:
      return '报名中'
    case 2:
      return '待签单'
    case 3:
      return '进行中'
    case 4:
      return '待验收'
    case 5:
      return '评价'
    case 6:
      return '完成'
    case 13:
      return '中断'
    default:
      return ''
  }
}
