export function getPhotoRelativeUrl(url) {
  let photo
  if (url) {
    const avatarUrls = url.split('/')
    photo = avatarUrls[avatarUrls.length - 1]
  } else {
    photo = url
  }
  return photo
}
