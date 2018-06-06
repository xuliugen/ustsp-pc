export function userTypeNumToStr(userType) {
  switch (userType) {
    case 1:
      return 'student'
    case 2:
      return 'teacher'
    case 3:
      return 'enterprise'
    default:
      return null
  }
}
