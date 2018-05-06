export function userTypeNumToStr(userType) {
  switch (userType) {
    case 1:
      return 'student'
    case 2:
      return 'teacher'
    default:
      return null
  }
}
