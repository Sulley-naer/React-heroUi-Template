import request from '@/utils/request'

function connectionTest() {
  return request.get('')
}

function getUser() {
  return request.get('/')
}

export default { connectionTest, getUser }
