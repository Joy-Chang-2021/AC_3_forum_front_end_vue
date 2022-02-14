import { apiHelper } from './../utils/helpers'

export default {
  signIn ({ email, password }) {
    // return 回傳了 promise
    return apiHelper.post('/signin', {
      email,
      password
    })
  }
}